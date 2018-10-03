import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {Post} from '../post';
import { style } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})


export class ContentListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService ) {
    this.posts = [];
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPostes()
      .subscribe(posts => this.posts = Object.values(posts));
  }


  getPic(picPath) {
    return 'https://firebasestorage.googleapis.com/v0/b/eugenewangme.appspot.com/o/' + picPath + '?alt=media';
  }
}
