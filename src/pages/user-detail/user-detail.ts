import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitRestProvider } from '../../providers/git-rest/git-rest';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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

  // The variable to store the user object
  public user: any; 
  
  // Variable for loading
  public loading: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public gitRest:GitRestProvider,
    public loadingCtrl:LoadingController) {
    // Start Loader
    this.presentLoading();

    // Get the user object loaded from the home.ts
    this.user = this.navParams.get('user');
    // Make a get Using the user object
    this.getUserInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage ');
  }

  // Handles the loading of show while the app pulls
  presentLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait ...'
    });

    this.loading.present();
  }

  // Ends the loading
  endLoading(){
    this.loading.dismiss();
  }

  // Getting the user data from the Git Rest provider
  getUserInfo(){    
    this.gitRest.getUserInfo(this.user)
    .then(data => {
      this.endLoading();
      this.user = data;
      console.log('User-Details '+this.user.login);
    })
    console.log('User-Details '+this.user.followers);
  }

}
