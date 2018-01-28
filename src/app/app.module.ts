import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import{ PromotionService } from './../services/promotion.service';
import{ UserService } from './../services/user.service';

import { AddPage } from '../pages/add/add';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';

import { HTTP_INTERCEPTORS  } from '@angular/common/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { AuthInterceptor } from '../util/AuthInterceptor';

@NgModule({
  declarations: [
    AddPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage    
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddPage,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PromotionService,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,    
    FileTransferObject,
    File,
    Camera,
    [ { provide: HTTP_INTERCEPTORS, useClass: 
      AuthInterceptor, multi: true } ]
  ]
})
export class AppModule {}
