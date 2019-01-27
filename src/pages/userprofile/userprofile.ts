import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';


/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {
  opcPerfil;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public alertCtrl:AlertController) {
    this.opcPerfil=["Mis Pedidos","Actualizar Datos","Cerrar Sesion"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserprofilePage');
  }

  cerrarSesion(){

     
    this.storage.set('USU',null);
    this.storage.set('PASS',null);
    this.storage.set('NUM', 0);

   
    window.location.reload();

  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Estas seguro?',
      message: 'Quieres Cerrar Sesion?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.cerrarSesion();
          }
        }
      ]
    });
    confirm.present();
  }

}
