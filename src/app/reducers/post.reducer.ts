import { createReducer, on } from '@ngrx/store';
import { loadPosts, filterPosts } from '../actions/post.action';
import { PostModel } from '../models/post.model';

const initialState = {
  posts: [],
  filterTag: null,
};

const _postReducer = createReducer(
  initialState,
  on(loadPosts, (state, { posts }) => ({
    ...state,
    posts: [...posts],
  })),
  on(filterPosts, (state, { filterTag }) => ({
    ...state,
    posts: state.posts.filter((post: PostModel) =>
      post.tags.includes(filterTag)
    ),
  }))
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
