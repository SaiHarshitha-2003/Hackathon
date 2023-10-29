import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { MentorModel } from './mentor-model';

MentorModel
@Injectable({
  providedIn: 'root'
})
export class Enrollment1Service {

  _url='http://127.0.0.1:2001';
  _registerapi=this._url+'/register'

  constructor(private _http:HttpClient) { }

  registerService(mentorModel: MentorModel){
    const params=new HttpParams()
    .set('username',mentorModel.username)
    .set('password',mentorModel.password)
    .set('email',mentorModel.email)
    .set('name',mentorModel.name)

    return this._http.get(this._registerapi,{params});
 }
} 