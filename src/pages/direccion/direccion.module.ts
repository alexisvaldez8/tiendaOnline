import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DireccionPage } from './direccion';

@NgModule({
  declarations: [
    DireccionPage,
  ],
  imports: [
    IonicPageModule.forChild(DireccionPage),
  ],
})
export class DireccionPageModule {}
