import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { fromPromise } from 'rxjs/observable/fromPromise';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private storage: Storage) {
    }

    getToken(): Promise<any> {
        return this.storage.get('auth');    
    }    

    intercept(req: HttpRequest<any>, 
               next: HttpHandler):Observable<HttpEvent<any>> {
        return fromPromise(this.getToken()).pipe(
                    mergeMap(token => { 
                        // Use the token in the request
                        req = req.clone({            
                            setHeaders: {            
                                'x-auth': token,
                                'Version': '1.0.0',
                            }
                        });
        return next.handle(req);
    }));
    }
}