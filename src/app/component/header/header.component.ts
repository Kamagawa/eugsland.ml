import { Component } from '@angular/core';
import { keys } from '../../../environments/keys';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  getlink(a) {
    return (keys.me[a]);
  }
}
