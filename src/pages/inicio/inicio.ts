import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  abrirLogin(){
    
    this.modCtrl.create('LoginPage').present();   

  }

}
