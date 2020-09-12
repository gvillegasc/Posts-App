import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/appState';
import * as actions from '../../actions/modal.action';

@Component({
  selector: 'app-modal-comments',
  templateUrl: './modal-comments.component.html',
})
export class ModalCommentsComponent implements OnInit {
  loading: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('modal').subscribe(({ loading, comments }) => {
      this.loading = loading;
    });
  }

  activeLoading() {
    this.store.dispatch(actions.loadingInactive());
  }
}
