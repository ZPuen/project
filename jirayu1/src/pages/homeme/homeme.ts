import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FoodPage} from '../food/food';
import {ExercisePage} from '../exercise/exercise';
import {HomePage} from '../home/home';
import {UserPage}from '../user/user';

/**
 * Generated class for the HomemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeme',
  templateUrl: 'homeme.html',
})
export class HomemePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomemePage');
  }

  food(){
    this.navCtrl.push(FoodPage);
  }

  home(){
    this.navCtrl.push(HomePage);
  }

  exercise(){
    this.navCtrl.push(ExercisePage);
  }

  user(){
    this.navCtrl.push(UserPage);
  }

}
