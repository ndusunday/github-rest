import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GitRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitRestProvider {
  //https://api.github.com/search/users?q=location:lagos

  apiUrl = 'https://api.github.com'

  constructor(public http: HttpClient) {
    console.log('Hello GitRestProvider Provider');
  }

  getUsersInLagos(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/search/users?q=location:lagos').subscribe(data=> {
        //console.log('my data: ', data);
        resolve(data);
        console.log('Rest Api - Get all users Successful '+data);
      }, err => {
        console.log(err);
      })
    })
  }

  getUserInfo(user){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users/'+user).subscribe(data=>{
        resolve(data);
        console.log('Rest Api - Get User successful '+data);
      }, err=>{
        console.log(err);
      })      
    })
  }

}
