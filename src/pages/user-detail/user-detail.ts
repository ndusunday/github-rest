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
  public userinput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitRest:GitRestProvider) {
    this.user = this.navParams.get('user');
    this.userinput = navParams.get('userinput');
    this.getUserInfo();
    console.log("Show the set userinfo "+ this.userinfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage ');
  }

  getUserInfo(){
    
    this.gitRest.getUserInfo(this.user)
    .then(data => {
      this.user = data;
      console.log('User-Details '+this.user.login);
    })
    console.log('User-Details '+this.user.followers);
  }

}
