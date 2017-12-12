import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/user"
@Injectable()
export class UserService {
  teacher = {
    id: '',
  }
  private headers = new Headers({ 'Content-type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials:true});

  constructor(private http: Http) {}

    getUserById(id):Observable<any>{
      return this.http.get(`${BASEURL}/${id}`)
                  .map(res => res.json());
    }

    getUserBySubject(subject):Observable<any>{
      console.log(subject, BASEURL)
      return this.http.get(`${BASEURL}/teacher/${subject}`, this.options)
                  .map(res => res.json());
}

  wantTeacherService(teacherID):Observable<any>{
    this.teacher.id = teacherID
    return this.http.post(`${BASEURL}/teacher/petition`, JSON.stringify(this.teacher) ,this.options)
                .map(res => res.json());
  }


  updateUser(userid, username, role, subject, price_per_hour, level, email, phone, description){
    console.log("usuario en el servicio" + JSON.stringify(userid));
    console.log(username, role, subject, price_per_hour, level, email, phone, description)
    return this.http.post(`${BASEURL}/${userid}/edit`,
       {userid, username, role, subject, price_per_hour, level, email, phone, description}, this.options)
                .map(res => res.json());
  }

}
