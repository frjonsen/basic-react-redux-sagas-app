import * as React from 'react'
import {Post} from './types';

export interface RequestButtonProps {
    onClick: () => void;
}

// This is a stateless component, called SFC
export const RequestButton: React.SFC<RequestButtonProps>
    = (props: RequestButtonProps) => <button onClick={props.onClick}>Click me</button>

export interface PostListProps {
    posts: Post[]
}

export function PostList(props: PostListProps) {
    let rows = props.posts.map(p => <div key={p.id}><h2>{p.title}</h2><p>{p.body}</p></div>);
    return (<div>
        {rows}
    </div>);
}