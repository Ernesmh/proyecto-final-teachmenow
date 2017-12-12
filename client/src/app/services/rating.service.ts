import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/subject"

@Injectable()
export class RatingService {
  teacher = {
    id: '',
  }
private options = {withCredentials:true};
  constructor(private http: Http) {}

  findTeacherByID(id): Observable<any>{
    let profid = id._value.teacherid
    console.log(profid);
    console.log(environment.BASEURL)
      return this.http.get(`${environment.BASEURL}/user/${profid}`, this.options)
                  .map(res => res.json());

  }

  rateTeacherService(teacherId, userId, ratingObj):Observable<any>{
      return this.http.post(`${environment.BASEURL}/rating/new/${teacherId}`,{userId, ratingObj}, this.options)
                  .map(res => res.json());
}
  }
