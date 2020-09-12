import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/appState';
import * as actions from '../../actions/post.action';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  posts: PostModel[] = [];
  loading: boolean;

  constructor(
    private postServices: PostService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.loadPosts();
    this.readPosts();
  }

  loadPosts() {
    this.postServices.loadPosts().subscribe(
      (posts) => {
        this.loading = false;
        this.store.dispatch(actions.loadPosts({ posts }));
      },
      (err) => {
        this.loading = false;
        console.log('Error to load post', err);
      }
    );
  }

  readPosts() {
    this.store.select('post').subscribe(({ posts }) => {
      this.posts = posts;
    });
  }
}
