import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { ModalComponent } from './modal/modal.component';
import { ModalCommentsComponent } from './modal-comments/modal-comments.component';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    LoadingComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    ModalComponent,
    ModalCommentsComponent,
    LoadingModalComponent,
    CommentsComponent,
    CommentComponent,
  ],
  exports: [
    LoadingComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    ModalComponent,
    ModalCommentsComponent,
    LoadingModalComponent,
    CommentsComponent,
    CommentComponent,
  ],
})
export class ComponentModule {}
