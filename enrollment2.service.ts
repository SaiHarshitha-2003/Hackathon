import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { VoteModel } from './vote-model';

VoteModel
@Injectable({
  providedIn: 'root'
})
export class Enrollment2Service {

  _url='http://127.0.0.1:2001';
  _registerapi=this._url+'/register'

  constructor(private _http:HttpClient) { }

  registerService(voteModel: VoteModel){
    const params=new HttpParams()
    .set('username',voteModel.username)

    return this._http.get(this._registerapi,{params});
 }
} 