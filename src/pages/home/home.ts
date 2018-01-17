import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Observable} from "rxjs/Observable";

import {PromotionService} from './../../services/promotion.service';
import {Promotion} from './../../models/promotion.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  promotions: Observable<Promotion[]>;

  constructor(public navCtrl: NavController, private promotionService: PromotionService) {

  }

  ngOnInit(): void {
    this.promotions = this.promotionService.getPromotion();
  } 

}
