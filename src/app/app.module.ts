import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MusicPage } from '../pages/music/music';
import { VideoPage } from '../pages/video/video';
import { NewsPage } from '../pages/news/news';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage} from "../pages/intro/intro";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    MusicPage,
    VideoPage,
    NewsPage,
    TabsPage,
    IntroPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MusicPage,
    VideoPage,
    NewsPage,
    TabsPage,
    IntroPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
