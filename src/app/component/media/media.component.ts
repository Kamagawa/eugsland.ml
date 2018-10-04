import { Component, OnInit } from '@angular/core';
import {Post} from '../../post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})


export class MediaComponent {
  posts: Post[];
  url = 'https://eugenewangme.firebaseio.com/test/media.json'; 

  constructor(private http: HttpClient ) {
    this.http.get(this.url)
      .subscribe(posts => this.posts = Object.values(posts));
  }


 




  getPic(picPath) {
    return 'https://firebasestorage.googleapis.com/v0/b/eugenewangme.appspot.com/o/' + picPath + '?alt=media';
  }
}
