import { StoreState } from './types';
import { Reducer } from 'redux';
import { GetPostActionResults } from './actions';
import * as constants from './constants';

const reducer: Reducer<StoreState, GetPostActionResults> = (state: StoreState, action: GetPostActionResults) => {
    switch (action.type) {
        case constants.GET_POSTS_SUCCESS:
            console.log(action.payload);
            return { ...state, posts: action.payload };
        case constants.GET_POSTS_FAILURE:
            return { ...state, posts: [] };
        default:
            return state;
    }
};

export { reducer as postReducer };