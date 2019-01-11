import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';
import { InicioPage } from '../inicio/inicio';
import { UserprofilePage } from '../userprofile/userprofile';

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

  carrito = CarritoPage;
  inicio = InicioPage;
  usuario = UserprofilePage;

  @ViewChild('myTabs') tabsRef: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let openTab = this.navParams.get('openTab');
    if(openTab){
 
     this.tabsRef.select(openTab);
 
    }
  }

}
