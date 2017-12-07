import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/user"
@Injectable()
export class UserService {

  constructor(private http: Http) {}

    getUserById(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                  .map(res => res.json());
}

}
