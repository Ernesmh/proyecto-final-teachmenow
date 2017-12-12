import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {
  student = {
    id : '',
  }
  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private headers = new Headers({ 'Content-type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers, withCredentials:true});

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent;
    }

    getUser(){
      return this.http.get(`${environment.BASEURL}/user/profile`, this.options)
        .map(res => res.json())
    }

    closeMeetingService(studentID){
      this.student.id = studentID;
      console.log(this.student)
      return this.http.post(`${environment.BASEURL}/meeting/new`, JSON.stringify(this.student) , this.options)
        .map(res => res.json())
    }

    findMeetings(userID){
        return this.http.get(`${environment.BASEURL}/meeting/${userID}`, this.options)
        .map(res => res.json())
    }

    private emitUserLoginEvent(user){
      this.user = user;
      this.userLoginEvent.emit(user);
      return user;
    }

    private handleError(e) {
      console.log("AUTH ERROR");
      return Observable.throw(e.json().message);
    }

    signup(username,password,role) {
      console.log("entrooo")
      return this.http.post(`${BASEURL}/signup`, {username,password,role}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    login(username,password) {
      return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    logout() {
      return this.http.get(`${BASEURL}/logout`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(null))
        .catch(this.handleError);
    }

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }
}
