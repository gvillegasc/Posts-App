import { createReducer, on } from '@ngrx/store';
import {
  setUser,
  loadComments,
  loadingActive,
  loadingInactive,
} from '../actions/modal.action';

const initialState = {
  user: {},
  comments: [],
  loading: null,
};

const _modalReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(loadComments, (state, { comments }) => ({
    ...state,
    comments: [...comments],
  })),
  on(loadingActive, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadingInactive, (state) => ({
    ...state,
    comments: [],
    loading: null,
  }))
);

export function modalReducer(state: any, action: any) {
  return _modalReducer(state, action);
}
