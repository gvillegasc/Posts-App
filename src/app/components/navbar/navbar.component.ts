import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/appState';
import { PostService } from '../../services/post/post.service';
import * as actions from '../../actions/post.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(
    private postService: PostService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  loadPosts() {
    this.postService.loadPosts().subscribe(
      (posts) => {
        this.store.dispatch(actions.loadPosts({ posts }));
      },
      (err) => {
        console.log('Error to load post', err);
      }
    );
  }
}
