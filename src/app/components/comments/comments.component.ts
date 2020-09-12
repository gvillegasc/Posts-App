import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/appState';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styles: [],
})
export class CommentsComponent implements OnInit {
  comments: [] = null;
  loading: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('modal').subscribe(({ loading, comments }) => {
      this.loading = loading;
      this.comments = comments;
    });
  }
}
