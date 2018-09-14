// This is a post which can be fetched from https://jsonplaceholder.typicode.com/posts
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

// This is the definition of the global state, which will be given to Redux
export interface StoreState {
    posts: Post[]
}