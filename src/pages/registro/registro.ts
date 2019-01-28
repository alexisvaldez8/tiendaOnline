import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public modalCtl: ModalController, public view:ViewController, public navParams: NavParams) {
  }

  cerrarModal(){
    this.view.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  envio(){
    this.modalCtl.create('RegistroUbicacionPage').present(); 
  }

}
