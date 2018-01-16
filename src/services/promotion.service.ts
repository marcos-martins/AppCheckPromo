import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import {Promotion} from './../models/promotion.model';

@Injectable()
export class PromotionService {    
  private getApiUrl : string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { } 

  addPromotion(p_promotion: Promotion){
    
  }
 
}