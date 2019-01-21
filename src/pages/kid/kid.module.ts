import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidPage } from './kid';

@NgModule({
  declarations: [
    KidPage,
  ],
  imports: [
    IonicPageModule.forChild(KidPage),
  ],
})
export class KidPageModule {}
