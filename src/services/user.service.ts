import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';


import {UserModel} from './../models/user.model';

@Injectable()
export class UserService {    
  private getApiUrl : string = "https://server-checkpromo.herokuapp.com/users/";

  private headers;

  constructor(private http: HttpClient) { 
    
  } 

  getUser() : Observable<UserModel>{
   
    return this.http
            .get<UserModel>(this.getApiUrl + "me")
            .do(console.log);
  }
 
}