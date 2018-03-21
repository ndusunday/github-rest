import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {GitRestProvider} from '../providers/git-rest/git-rest';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserDetailPage } from "../pages/user-detail/user-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage, UserDetailPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, UserDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,GitRestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
