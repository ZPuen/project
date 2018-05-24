import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomemePage } from './homeme';

@NgModule({
  declarations: [
    HomemePage,
  ],
  imports: [
    IonicPageModule.forChild(HomemePage),
  ],
})
export class HomemePageModule {}
