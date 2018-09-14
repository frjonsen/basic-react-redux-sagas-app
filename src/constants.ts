// The idea of saga is to split up actions. We basically have one action
// which is sort-of fire-and-forget. We then have two actions for the result,
// depending on whether the outbound action succeeded or not.

// This is essentially an OUTBOUND action
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export type GET_POSTS_REQUEST = typeof GET_POSTS_REQUEST;

// These are essentially INBOUND actions
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export type GET_POSTS_SUCCESS = typeof GET_POSTS_SUCCESS;

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export type GET_POSTS_FAILURE = typeof GET_POSTS_FAILURE;