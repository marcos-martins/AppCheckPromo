import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

import {Promotion} from './../models/promotion.model';

@Injectable()
export class PromotionService {    
  private getApiUrl : string = "https://server-checkpromo.herokuapp.com/promotions/";

  constructor(private http: HttpClient) { } 

  getPromotion() : Observable<Promotion[]>{
    return this.http
            .get<Promotion[]>(this.getApiUrl)
            .map(data => _.values(data))
            .do(console.log);
  }
 
}