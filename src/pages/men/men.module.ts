import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenPage } from './men';

@NgModule({
  declarations: [
    MenPage,
  ],
  imports: [
    IonicPageModule.forChild(MenPage),
  ],
})
export class MenPageModule {}
