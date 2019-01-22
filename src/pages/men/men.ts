import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-men',
  templateUrl: 'men.html',
  
})
export class MenPage {
  playerasHombre;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.playerasHombre = [{ image: "../../assets/imgs/pstarwarshombre.png" },
    { image: "../../assets/imgs/pstarwarsmujer.png" }];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenPage');
  }

}
