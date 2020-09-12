import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  @Input() posts: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
