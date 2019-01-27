import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CarritoPage } from '../pages/carrito/carrito';
import { DireccionPage } from '../pages/direccion/direccion';
import { TabsPage } from '../pages/tabs/tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpProvider } from '../providers/http/http';
import {HttpClientModule} from '@angular/common/http';
import {InicioPage} from '../pages/inicio/inicio';
import {UserprofilePage} from '../pages/userprofile/userprofile';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    UserprofilePage,
    CarritoPage,
    DireccionPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,  
    InicioPage,
    UserprofilePage,
    CarritoPage,
    DireccionPage,
    TabsPage
  ],         
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
