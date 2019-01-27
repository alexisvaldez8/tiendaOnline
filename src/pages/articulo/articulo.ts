import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';


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
  imagenes:any;
  nombre:string;
  stock:string;
  precio:string;
  descripcion:string;
  genero:string;
  color:string;
  fecha:string;
  extra_chica:any;
  chica:any;
  mediana:any;
  grande:any;
  extra_grande:any;



  cantidad:any=1;  

  id_articulo:string;
  talla:any=0;

  ////login
  usuario:string;
  contra:string;

  id_usuario:any;
  
				

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public view:ViewController,
     public http:HttpProvider,
     public toastCtrl:ToastController,
     public modalCtl:ModalController,
     public storage:Storage,
     public loadingCtrl:LoadingController) {

    
    this.id_articulo=navParams.get('Data');
    this.traerArticulo(navParams.get('Data'));
    this.traerImagenes(navParams.get('Data'));

  }

  comprar(){

          if(this.talla == 0){

            let toast = this.toastCtrl.create({
              message: 'antes debes seleccionar la talla',
              duration: 3000,
              position: 'top'
            });
          
            toast.present();

   
          }else if(this.talla == 1){
            console.log("extra chica  "+this.extra_chica);

            if(this.cantidad > this.extra_chica){
              this.toastCantidad();
            }else {
              this.siguienteModal(this.id_articulo,this.cantidad , this.talla);
            }

          }else if(this.talla == 2){
            console.log("chica  "+this.chica);

            if(this.cantidad > this.extra_chica){
              this.toastCantidad();              
            }else {
              this.siguienteModal(this.id_articulo,this.cantidad , this.talla);
            }

          }else if(this.talla == 3){
            console.log("mediana  "+this.mediana);

            if(this.cantidad > this.extra_chica){
              this.toastCantidad();              
            }else {
              this.siguienteModal(this.id_articulo,this.cantidad , this.talla);
            }

          }else if(this.talla == 4){
            console.log("grande   "+this.grande);

            if(this.cantidad > this.extra_chica){
              this.toastCantidad();              
            }else {
              this.siguienteModal(this.id_articulo,this.cantidad , this.talla);
            }

          }else{    
            console.log("extra grande  "+this.extra_grande);

            if(this.cantidad > this.extra_chica){
              this.toastCantidad();
            }else {
              this.siguienteModal(this.id_articulo,this.cantidad , this.talla);
            }   

          }
  
  }

  

  siguienteModal(id:string, cantidad:string, talla:string){


    this.storage.get('USU').then((usu) =>{
      console.log("Usuario"+usu);
      this.usuario = usu;
    });  

    this.storage.get('PASS').then((pass) =>{
      console.log("Contrasena"+pass);
      this.contra = pass;
      this.login(id,cantidad,talla);
    });   


     

    

  }

  registroCarrito(id:string, cantidad:string, talla:string){
    console.log("Enviando al PHP  "+id+"  Cantidad  "+cantidad+"  Talla  "+talla+"  Precio  "+this.precio); 
    

    this.http.agregarCarrito(this.id_usuario,id,this.precio,cantidad,talla).then(
      (data) => {    
        console.log(data)
  
        var result = data["estado"];   

       if(result != 0){
        console.log("REgistro Exitoso");
        this.cerrarModal();
       }else{
         console.log("no registro");
       }
  
        

      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
       
      }
    );
    
      
    
  }

  toastCantidad(){
    let toast = this.toastCtrl.create({
      message: 'No contamos con la cantidad suficiente de esa talla',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
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

  traerImagenes(id:string){

    this.http.articuloImg(id).then(
      (data) => {    
        console.log(data)  

        this.imagenes = data["imagenes"];

      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
       
      }
    );

  }

  login(id:string, cantidad:string, talla:string){

    this.http.login(this.usuario,this.contra).then(
      (data) => { 
        console.log(data)  




        var result = data["usuario"];

        for (var i = 0; i < result.length; i++) {
           console.log(result[i].id_usuario);
          this.id_usuario = result[i].id_usuario;
          
          }

          if(this.id_usuario != 0){
            this.registroCarrito(id,cantidad,talla); 
        }else{
          
          let modalRegistra = this.modalCtl.create('LoginPage');
          modalRegistra.onDidDismiss(data => {
          console.log(data);
    
          if(data != 0){
    
            console.log("Log Exitoso desde modal");
    
            this.id_usuario = data;
            this.registroCarrito(id,cantidad,talla);
           
          }else{
           console.log("no Logeo desde modal");   
           
          }   
         });
    
         modalRegistra.present();
        }  
           

      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        
      }
    );

  }

}
