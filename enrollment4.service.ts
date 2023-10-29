import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { JuryModel } from './jury-model';

JuryModel
@Injectable({
  providedIn: 'root'
})
export class Enrollment4Service {

  _url='http://127.0.0.1:2001';
  _registerapi=this._url+'/register'

  constructor(private _http:HttpClient) { }

  registerService(juryModel: JuryModel){
    const params=new HttpParams()
    .set('name',juryModel.name)

    return this._http.get(this._registerapi,{params});
 }
} 