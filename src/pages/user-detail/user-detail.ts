import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitRestProvider } from '../../providers/git-rest/git-rest';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  public user: any;
  public userinfo: any;
  public count: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitRest:GitRestProvider) {
    this.user = navParams.get('user');
    this.getUserInfo(this.user);
    //this.userinfo = navParams.get('userinfo');
    //this.count = this.userInfo.login;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage ' + this.userinfo);
    this.getUserInfo(this.user.login);
    console.log("Show the set userinfo "+ this.userinfo);
  }

  getUserInfo(user: object){
    this.gitRest.getUserInfo(user.login)
    .then(data => {
      this.userinfo = data;
      console.log("getUserInfo() "+data);
      console.log("Type of the data "+ this.userinfo.name);
    })
  }

}
