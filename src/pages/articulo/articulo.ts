import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the ArticuloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulo',
  templateUrl: 'articulo.html',
})
export class ArticuloPage {

  articulo:any;
  nombre:string;
  stock:string;
  precio:string;
  descripcion:string;
  genero:string;
  color:string;
  fecha:string;
  extra_chica:string;
  chica:string;
  mediana:string;
  grande:string;
  extra_grande:string;
  cantidad:any=1;
				

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public view:ViewController,
     public http:HttpProvider,
     public toastCtrl:ToastController) {

    console.log(navParams.get('Data'));

    this.traerArticulo(navParams.get('Data'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloPage');
  }

  cerrarModal(){
    this.view.dismiss();
  }

  menos(){  
    
    if(this.cantidad == 1){

      let toast = this.toastCtrl.create({
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

  traerArticulo(id:string){
    this.http.articulo(id).then(
      (data) => { 
        console.log(data)  
   



        var result = data["articulo"];

        for (var i = 0; i < result.length; i++) {
           console.log(result[i].nombre);   
           this.nombre=result[i].nombre;
           this.precio=result[i].precio;
           this.descripcion=result[i].descripcion;
           this.genero=result[i].genero;
           this.color=result[i].color;
           this.fecha=result[i].fecha_publicacion;
           this.extra_chica=result[i].extra_chica;
           this.chica=result[i].chica;
           this.mediana=result[i].mediana;
           this.grande=result[i].grande;
           this.extra_grande=result[i].extra_grande;
     
         // this.id = result[i].id_usuario;
          
          }


        console.log("Resultado   "+this.articulo);  

       
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
       
      }
    );
  }

}
