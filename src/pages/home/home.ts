import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  }
  testHello(){
    alert('click');
  }
  signIn(){
    this.navCtrl.push(LoginPage);
  }
  Register(){
    this.navCtrl.push(RegisterPage);
  }

}
