import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroUbicacionPage } from './registro-ubicacion';

@NgModule({
  declarations: [
    RegistroUbicacionPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroUbicacionPage),
  ],
})
export class RegistroUbicacionPageModule {}
