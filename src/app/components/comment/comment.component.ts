import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/appState';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: [],
})
export class CommentComponent implements OnInit {
  @Input() comment;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
