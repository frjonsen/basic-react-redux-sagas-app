import  * as actions from './actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {RequestButton as RequestButtonComponent, PostList as PostListComponent } from './components';
import { StoreState } from './types';

export function requestButtonMapDispatchToProps (dispatch: Dispatch<actions.GetPostsRequest>) {
    return {onClick: () => dispatch({ type: "GET_POSTS_REQUEST" })};
}

export const RequestButton = connect(null, requestButtonMapDispatchToProps)(RequestButtonComponent);

export function postListMapStateToProps ({ posts } : StoreState) {
    return { posts };
}

export const PostList = connect(postListMapStateToProps, null)(PostListComponent);