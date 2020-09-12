import { createAction, props } from '@ngrx/store';
import { CommentModel } from '../models/comment.model';
import { UserModel } from '../models/user.model';

export const setUser = createAction(
  '[Modal] SetUser',
  props<{ user: UserModel }>()
);

export const loadComments = createAction(
  '[Modal] LoadComments',
  props<{ comments: CommentModel[] }>()
);

export const loadingActive = createAction('[Modal] Loading Active');
export const loadingInactive = createAction('[Modal] Loading Inactive');
