import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';
import { ContentListComponent } from './component/content-list/content-list.component';
import { HeaderComponent } from './component/header/header.component';
import { YoutubeComponent } from './component/youtube/youtube.component';
import { FooterComponent } from './component/footer/footer.component';
import { MediaComponent } from './component/media/media.component';

// https://github.com/cornflourblue/angular-6-registration-login-example


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ContentListComponent,
    HeaderComponent,
    YoutubeComponent,
    FooterComponent,
    MediaComponent
  ],
  imports: [
    Ng2PageScrollModule,
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }