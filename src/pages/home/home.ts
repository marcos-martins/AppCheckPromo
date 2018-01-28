import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Observable} from "rxjs/Observable";

import {PromotionService} from './../../services/promotion.service';
import {UserService} from './../../services/user.service';

import {Promotion} from './../../models/promotion.model';
import {UserModel} from './../../models/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  promotions: Observable<Promotion[]>;
  user: UserModel;
  constructor(private navCtrl: NavController, 
              private promotionService: PromotionService,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.promotions = this.promotionService.getPromotion();
    this.userService.getUser().subscribe(data => {
      
      this.user = data  
      console.log(this.user);
    });
  } 

}
