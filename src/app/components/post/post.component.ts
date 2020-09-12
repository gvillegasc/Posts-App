import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from '../../services/post/post.service';
import * as actions from '../../actions/modal.action';
import * as actionsPost from '../../actions/post.action';
import { UserModel } from '../../models/user.model';
interface AppState {
  user: any;
  comments: any;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  @Input() post: any;

  constructor(
    private postService: PostService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  loadComments(idPost: String) {
    this.postService.loadComments(idPost).subscribe(
      (comments) => {
        this.store.dispatch(actions.loadingActive());
        this.store.dispatch(actions.loadComments({ comments: comments }));
      },
      (err) => {
        console.log('Error to load post', err);
      }
    );
  }

  selectUser(user: UserModel) {
    this.store.dispatch(actions.setUser({ user }));
  }

  filterTag(filterTag: String) {
    this.store.dispatch(actionsPost.filterPosts({ filterTag: filterTag }));
  }
}
