import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { ChatModel } from './chat-model';

ChatModel
@Injectable({
  providedIn: 'root'
})
export class Enrollment3Service {

  _url='http://127.0.0.1:2001';
  _registerapi=this._url+'/register'

  constructor(private _http:HttpClient) { }

  registerService(chatModel: ChatModel){
    const params=new HttpParams()
    .set('name',chatModel.name)

    return this._http.get(this._registerapi,{params});
 }
} 