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
completo:any[]=[];
ruta:any[0]="http://localhost:8080/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modCtrl: ModalController, public http:HttpProvider)
  {

  this.traerNovedades();

    this.slideData = [{ image: "../../assets/imgs/hombre.png" },
    { image: "../../assets/imgs/mujer.png" },
    { image: "../../assets/imgs/niño.png" }],

    this.playerasInicio = [{ image: this.completo  },
    { image: "../../assets/imgs/pstarwarsmujer.png" }];
  
  
  }

  traerNovedades(){
    this.http.recientes().then(
    (data)=>{
      //console.log(data)
      this.completo[0]=data;
      console.log(this.completo);
      this.completo=this.completo[0].completo.productos[0].imagenes[0].ruta_imagen;
      console.log("aiiiuudaa");
      this.completo=(this.ruta+this.completo)
      //this.completo.toString();
      console.log(this.completo);

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
