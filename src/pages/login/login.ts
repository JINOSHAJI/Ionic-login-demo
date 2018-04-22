import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }
  testHello(){
    alert('click');
  }
  signIn(){
    console.log(this.username.value,this.password.value);
    if(this.username.value=="admin" && this.password.value=="admin"){
      let alert=this.alertCtrl.create({
        title:'Login Successfull',
        subTitle:'Your friend, Obi wan kenobi, just accepted your friend request',
        buttons:['Ok']
      });
      alert.present();
    }else{
      let alert=this.alertCtrl.create({
        title:'Login Failed',
        subTitle:'Incorrect username or password',
        buttons:['Ok']
      });
      alert.present();
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
