import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private storage: Storage) {
  }  

  login(){
    // Your app login API web service call triggers 
    this.storage.set("auth","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTY0YTE3ZjYyNjU5YzAwMTQ2NTgxZDQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTE2NTQ0NDcxfQ.bdyLQbY9wixSDfa2a3QIFEiOS7FOkb5eHZ-8hkLD288");
    this.navCtrl.setRoot(TabsPage, {}, {animate: false});    
  }

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }
}
