import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http/http'

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
playerasInicio;
variable:boolean=true;

productos:any;
rutaImagen:any[];
completoInicio:any;
completoNovedades:any;
rutaNovedades:any;
completo:any;
ruta:any;
novedades:any;
ruta2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl: ModalController, public http:HttpProvider)
  {

  this.traerNovedades();
  this.traerNovedadesInicio();


    this.slideData = [{ image: "../../assets/imgs/hombre.png" },
    { image: "../../assets/imgs/mujer.png" },
    { image: "../../assets/imgs/niño.png" }],

    this.playerasInicio = [{ image: "../../assets/imgs/pstarwarsmujer.png"  },
    { image: "../../assets/imgs/pstarwarsmujer.png" }];
  
  
  }

  traerNovedades(){
    this.http.novedades().then(
    (data)=>{
      this.completoNovedades=data["completo"];
      this.rutaNovedades=this.completoNovedades.productos[0];
      this.novedades=this.rutaNovedades.imagenes;
      console.log("aiiiuudaa");
      console.log(this.novedades);
    },
    (error)=>{
      console.log("error"+JSON.stringify(error))
    });
  }

traerNovedadesInicio(){
  this.http.inicio().then(
    (data)=>{
      this.completoInicio=data["inicio"];
      console.log("ayuda");
      console.log(this.completoInicio);
    },
    (error)=>{
      console.log("error"+JSON.stringify(error))
    });

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  abrirLogin(){
    
    this.modCtrl.create('LoginPage').present();   

  }

  mostrar(){
    if(this.variable){
      this.variable=false;
    }else{
      this.variable=true;
    }
  }

  menPage(){ 
    this.navCtrl.push("MenPage");
  }

  womanPage(){ 
    this.navCtrl.push("WomanPage");
  }

  kidPage(){ 
    this.navCtrl.push("KidPage");
  }


}
