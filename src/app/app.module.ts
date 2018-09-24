import { keys } from '../environments/keys';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from './backend/post.service';
import { Ng2PageScrollModule } from './ng2-page-scroll';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { ContentListComponent } from './content-list/content-list.component';
import { StaticFrontComponent } from './static-front/static-front.component';
import { BlogComponent } from './blog/blog.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { FooterComponent } from './footer/footer.component';
import { MessageService } from './message/message.service';
import {HttpClientModule} from '@angular/common/http';
import {RSSParserService} from './rss-service/rss-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    StaticFrontComponent,
    BlogComponent,
    YoutubeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2PageScrollModule,
    AngularFireModule.initializeApp(keys.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [RSSParserService, PostService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
