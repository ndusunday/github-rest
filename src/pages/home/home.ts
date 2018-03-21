import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitRestProvider } from '../../providers/git-rest/git-rest';
import { UserDetailPage } from '../user-detail/user-detail';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public users: any;
  public loading: any;

  constructor(public navCtrl: NavController, 
    public gitRest: GitRestProvider,
    public loadingCtrl: LoadingController
    ) {
    // show loading
    this.presentLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getUsers();
  }

  // Handles the loading of show while the app pulls
  presentLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Loading ...',
      cssClass: 'loaderCss',
      showBackdrop: false
    });

    this.loading.present();
  }

  // Ends the loading
  endLoading(){
    this.loading.dismiss();
  }

  // Get list of users Using the Git RestProvider
  getUsers() {
    this.gitRest.getUsersInLagos()
    .then(data => {
      this.endLoading();
      this.users = data;
      console.log('getUsers() '+this.users);
    })
  }

  // Get the user object and navigate to details page
  showDetails(user){
    this.navCtrl.push(UserDetailPage, {user: user});
  }
}
