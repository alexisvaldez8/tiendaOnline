import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs, NavParams, ModalController } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';
import { InicioPage } from '../inicio/inicio';
import { UserprofilePage } from '../userprofile/userprofile';

import { Storage } from '@ionic/storage';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  id:any;
  contra:string;
  usuario:string;

  perfilLogBol:boolean=false;
  perfilBol:boolean=true;

  carrito = CarritoPage;
  inicio = InicioPage;
  usuarioPage = UserprofilePage;

  @ViewChild('myTabs') tabsRef: Tabs;

  constructor(public storage:Storage, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http:HttpProvider, 
    public modlCtrl:ModalController) {

    
    /*              
      this.storage.set('USU',null);
    this.storage.set('PASS',null);  
    this.storage.set('NUM', 0);  
    */

      this.storage.get('USU').then((usu) =>{
        console.log("Usuario"+usu);
        this.usuario = usu;
      });
  
      this.storage.get('PASS').then((pass) =>{
        console.log("Contrasena"+pass);
        this.contra = pass;
        this.login();
      });   
  
     
  }

  ionViewDidLoad() {

    let openTab = this.navParams.get('openTab');
    if(openTab){
     this.tabsRef.select(openTab);
 

    }

   
  }

  modalLogin(){

    console.log("entraste a entrar a modal");
    let modalRegistra = this.modlCtrl.create('LoginPage');
    modalRegistra.onDidDismiss(data => {
      console.log(data);

      if(data != 0){

        console.log("Log Exitoso");
        this.perfilLogBol=false;
        this.perfilBol=true;

      }else{
       console.log("no Logeo");   
        this.perfilLogBol=true;
        this.perfilBol=false;
      }   
     });

     modalRegistra.present();
      
  }


  login(){

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
            this.perfilLogBol=false;
            this.perfilBol=true;

          }else{
           console.log("no Logeo");   
            this.perfilLogBol=true;
            this.perfilBol=false;
          }   
           

      },
      (error) =>{
        console.log("Error"+JSON.stringify(error));
        
      }
    );

  }

}
