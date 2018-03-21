import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitRestProvider } from '../../providers/git-rest/git-rest';
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public users: any;
  public user: any;
  //public items: object;

  constructor(public navCtrl: NavController, public gitRest: GitRestProvider ) {
    //this.getUsers();
    // this.users = [
    //   {
    //     login: "whatever",
    //     url: "kdddkddjdfdff.ocm"
    //   }
    // ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getUsers();
  }

  getUsers() {
    this.gitRest.getUsersInLagos()
    .then(data => {
      this.users = data;
      console.log('getUsers() '+this.users);
    })
  }
  getUserInfo(user){
    this.gitRest.getUserInfo(user)
    .then(data=> {
      this.user = data;
    })
  }

  showDetails(user){
    this.getUserInfo(user);
    this.navCtrl.push(UserDetailPage, {user: user, userinput: this.user});
    console.log('showDetails() '+ this.user);
  }
}
