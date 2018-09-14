import { Action as ReduxAction } from 'redux';
import { Post } from './types';
import * as constants from './constants'

export interface Action<T extends string> extends ReduxAction {
  type: T
}

export interface PayloadAction<T extends string, P> extends ReduxAction { 
  type: T
  payload: P
}

export interface GetPostsRequest extends Action<constants.GET_POSTS_REQUEST> {}
export interface GetPostsSuccess extends PayloadAction<constants.GET_POSTS_SUCCESS, Post[]> {}
export interface GetPostsFailure extends PayloadAction<constants.GET_POSTS_FAILURE, string> {}

export type GetPostActionResults = GetPostsSuccess | GetPostsFailure;