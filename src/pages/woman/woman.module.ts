import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WomanPage } from './woman';

@NgModule({
  declarations: [
    WomanPage,
  ],
  imports: [
    IonicPageModule.forChild(WomanPage),
  ],
})
export class WomanPageModule {}
