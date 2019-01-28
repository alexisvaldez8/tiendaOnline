import { Component } from '@angular/core';
import { ToastController, IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';


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

  nombreCompl:string;
  usuario:string;
  contra:string;
  contraRep:string;
  correo:string;
  correoRep:string;

  constructor(public toastCtl:ToastController, public navCtrl: NavController, public modalCtl: ModalController, public view:ViewController, public navParams: NavParams) {
  }

  cerrarModal(){    
    this.view.dismiss();
  }


 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  envio(){

    
  if(this.nombreCompl){
    console.log("Pasamos nombre Completo");
    
    if(this.usuario){
      console.log("Pasamos Usuario");

      if(this.contra){
        console.log("Pasamos Contrasena");

        if(this.contraRep){
          console.log("Pasamos Rep Contra");

          if(this.correo){
            console.log("Pasamos Correo");

            if(this.correoRep){
              console.log("PAsamos Rep Correo");

              this.pasoDos();
            }else{
              let toast = this.toastCtl.create({
                message: 'El campo Repite Correo esta vacio',
                duration: 3000,
                position: 'top'
              });
            
              toast.present();
            }
          }else{
            let toast = this.toastCtl.create({
              message: 'El campo Correo esta vacio',
              duration: 3000,
              position: 'top'
            });
          
            toast.present();
          }
        

        }else{
          let toast = this.toastCtl.create({
            message: 'El campo Repetir Contraseña esta vacio',
            duration: 3000,
            position: 'top'
          });
        
          toast.present();
        }
      
      }else{
        let toast = this.toastCtl.create({
          message: 'El Campo Contraseña esta vacio',
          duration: 3000,
          position: 'top'
        });
      
        toast.present();
      }
    

    }else{
      let toast = this.toastCtl.create({
        message: 'El Campo Usuario esta vacio',
        duration: 3000,
        position: 'top'
      });
    
      toast.present();
    }
  
  }else{
    let toast = this.toastCtl.create({
      message: 'El Campo Nombre Completo esta vacio',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }

    //this.modalCtl.create('RegistroUbicacionPage').present(); 
  }


  pasoDos(){

    ///////Checar Contraseñas
    console.log("pasamos todos los Vacios");  

    var contra = new String(this.contra);    
    var cantidadContra = contra.length;


    if(this.contra == this.contraRep){

      console.log("Son Iguales");
      if(cantidadContra < 8){
        let toast = this.toastCtl.create({
          message: 'La Contraseña debe ser mayor a 8 digitos',
          duration: 3000,
          position: 'top'
        });
      
        toast.present();
      }else{
       console.log("Es mayor 8");  

       this.pasoTres();
      }

    }else{

      let toast = this.toastCtl.create({
        message: 'La contraseña no coincide',
        duration: 3000,
        position: 'top'  
      });
    
      toast.present();

    }

    
  }


  pasoTres(){
    ///////////// Checamos Correo

    if(this.correo == this.correoRep){

     
    }else{

      let toast = this.toastCtl.create({
        message: 'No coincide el Correo',
        duration: 3000,
        position: 'top'
      });
    
      toast.present();

    }

  }

}
