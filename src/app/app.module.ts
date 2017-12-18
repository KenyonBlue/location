import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera  } from '@ionic-native/camera';
import { Geolocation } from "@ionic-native/geolocation";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AddPlacePage } from '../pages/add-place/add-place';
import { AgmCoreModule } from '@agm/core';
import { PlacesService } from "../services/places";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
       PlacePage,
       SetLocationPage,
       AddPlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
       
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_qnQY9g5Db8xb0x2fucp07zo8UxOmQAA'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
 MyApp,
    HomePage,
       PlacePage,
       SetLocationPage,
       AddPlacePage
  ],
  providers: [
    StatusBar,
       
       Geolocation,
       Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
       PlacesService
  ]
})
export class AppModule {}
