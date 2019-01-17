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

slideData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl: ModalController) {
    this.slideData = [{ image: "../../assets/imgs/hombre.png" },
    { image: "../../assets/imgs/mujer.png" },
    { image: "../../assets/imgs/niño.png" }]
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  abrirLogin(){
    
    this.modCtrl.create('LoginPage').present();   

  }

  

}
