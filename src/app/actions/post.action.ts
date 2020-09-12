import { createAction, props } from '@ngrx/store';
import { PostModel } from '../models/post.model';

export const loadPosts = createAction(
  '[Post] LoadPosts',
  props<{ posts: PostModel[] }>()
);

export const filterPosts = createAction(
  '[Post] FilterPosts',
  props<{ filterTag: String }>()
);
