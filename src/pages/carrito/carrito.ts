import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  cantidad:any=1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  menos(){  
    
    if(this.cantidad == 1){

      let toast = this.toastCtl.create({
        message: 'No puedes solicitar menos de 1',
        duration: 3000,
        position: 'bottom'
      });
    
      toast.present();

    }else{
      this.cantidad= this.cantidad-1;
    }

  }

  mas(){

    this.cantidad = this.cantidad+1;

  }


}
