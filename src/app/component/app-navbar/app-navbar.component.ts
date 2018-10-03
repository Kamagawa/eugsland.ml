import { keys } from '../../../environments/keys';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html'
})
export class AppNavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  getlink(a) {
    return (keys.me[a]);
  }

}
