import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }  

  login(){
    // Your app login API web service call triggers 
    this.navCtrl.setRoot(TabsPage, {}, {animate: false});
  }

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }
}
