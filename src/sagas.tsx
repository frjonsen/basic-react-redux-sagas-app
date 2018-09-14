import * as constants from'./constants';
import { call, put, takeEvery, CallEffect, PutEffect } from 'redux-saga/effects'
import { GetPostsRequest } from './actions';
import axios from 'axios';
import {Post} from './types';
import * as actions from './actions';

// This will be the function called when a GET_POSTS_REQUEST-action is fired
export function* getPosts(action: GetPostsRequest) : IterableIterator<CallEffect | PutEffect<actions.GetPostActionResults>>  {
    try {
        // Using call isn't strictly necessary here, but simplifies testing
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/posts");
        // We create a new action, of type GET_POSTS_SUCCESS, with the response as payload
        let result: Post[] = response.data;
        let res: actions.GetPostsSuccess = {type: constants.GET_POSTS_SUCCESS, payload: result};
        yield put(res /* Have to do type assertion, because compiler fails to recognize it */);
    }
    catch(error) {
        // Or a failure action, if REST call failed
        yield put({ type: constants.GET_POSTS_FAILURE, payload: error.message } as actions.GetPostsFailure);
    }
}

// This function will constantly "listen" for GET_POSTS_REQUEST-actions
export function* watchGetPostsRequest() {
    // let s: actions.GetPostsRequest = { type: constants.GET_POSTS_REQUEST };
    // let f = GetPostsRequest["type"];
    // yield takeEvery(actions.GetPostsRequest["type"], getPosts);
    // yield takeEvery(typeof s.type, getPosts);
    yield takeEvery(constants.GET_POSTS_REQUEST, getPosts);
}