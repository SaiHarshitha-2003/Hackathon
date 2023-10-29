import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { RegisterModel } from './register-model';

RegisterModel
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='http://127.0.0.1:2000';
  _registerapi=this._url+'/register'

  constructor(private _http:HttpClient) { }

  registerService(registerModel: RegisterModel){
    const params=new HttpParams()
    .set('username',registerModel.username)
    .set('password',registerModel.password)
    .set('email',registerModel.email)
    return this._http.get(this._registerapi,{params});
 }
} 