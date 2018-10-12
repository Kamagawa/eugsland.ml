import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})


export class ContentListComponent {
  posts: Post[];
  url = 'https://eugsland.firebaseio.com/test/exp.json'; 

  constructor(private http: HttpClient ) {
    this.http.get(this.url)
      .subscribe(posts => this.posts = Object.values(posts));
  }


  getPic(picPath) {
    return 'https://firebasestorage.googleapis.com/v0/b/eugsland.appspot.com/o/' + picPath + '?alt=media';
  }
}
