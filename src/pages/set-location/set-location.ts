import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Location } from "../../models/location";


@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

          marker: Location;
          location: Location = {
           lat:  37.983929,
          lng:  -84.529081
     
     };
     
     
//      title: string = 'My first AGM project';
//  lat: number = 37.983929;
//  lng: number = -84.529081;
     
  constructor( public navParams: NavParams) {
       this.location = this.navParams.get('location');
  }
     
     onSetMarker(event: any){
          console.log(event);
          this.marker = new Location(event.coords.lat, event.coords.lng);
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocationPage');
  }

}
