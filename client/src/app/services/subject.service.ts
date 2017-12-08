import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/subject"
@Injectable()
export class SubjectService {
private options = {withCredentials:true};
  constructor(private http: Http) {}

    getSubjectList():Observable<any>{
      console.log("EN EL SERVICIO TAMBIEN")
      return this.http.get(`${BASEURL}/`, this.options)
                  .map(res => res.json());
}

}
