import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string;
  contra:string;
  rol:any;
  id:any=0;
  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public loadingCtrl:LoadingController, public storage: Storage, public http:HttpProvider, public modalCtrl: ModalController, public view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cerrarModal(){
      
    if(this.id != 0){

      this.view.dismiss(this.id);
    }else{
      this.view.dismiss("0");
    }

    
  }

  registrar(){

    this.modalCtrl.create('RegistroPage').present();


  }


  login(){

    let loading = this.loadingCtrl.create({
      content: 'Iniciando Sesion...'
    });
  
    loading.present();
  

    this.http.login(this.usuario,this.contra).then(
      (data) => { 
        console.log(data)  




        var result = data["usuario"];

        for (var i = 0; i < result.length; i++) {
          // console.log(json[i].nombre_mob);
          this.id = result[i].id_usuario;
          
          }

          if(this.id != 0){


            console.log("Log Exitoso");
            this.storage.set('USU',this.usuario);
            this.storage.set('PASS',this.contra);
            this.storage.set('NUM', 1);

            this.cerrarModal();    
              
          /*  this.navCtrl.setRoot(HomePage, {
              data: this.id
            });
*/
          }else{
            this.presentToast(); 
          }   
        

          

       loading.dismiss();
      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        this.internetToast();
      }
    );
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'El Usuario y/o la Contraseña no existen',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
  
  
  internetToast() {
    let toast = this.toastCtrl.create({
      message: 'Verifica que cuentes con Internet',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
  }
    
}
