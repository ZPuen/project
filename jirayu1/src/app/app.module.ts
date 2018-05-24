import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TotalPage} from '../pages/total/total';
import {HomemePage} from '../pages/homeme/homeme';
import {ExercisePage} from '../pages/exercise/exercise';
import {FoodPage} from '../pages/food/food';
import {UserPage} from '../pages/user/user';
import {BmiCalculator } from '../pages/providers/bim-cal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TotalPage,
    HomemePage,
    ExercisePage,
    FoodPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TotalPage,
    HomemePage,
    ExercisePage,
    FoodPage,
    UserPage
  ],
  providers: [
    BmiCalculator,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
