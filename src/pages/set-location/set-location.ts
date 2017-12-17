import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';
import { Location } from "../../models/location";


@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {

          marker: Location;
          location: Location;

     
     
//      title: string = 'My first AGM project'

     
  constructor( public navParams: NavParams, private viewCtrl: ViewController) {
       this.location = this.navParams.get('location');
       if (this.navParams.get('isSet')){
            this.marker = this.location;
       }
       
  }
     
     onSetMarker(event: any){
          console.log(event);
          this.marker = new Location(event.coords.lat, event.coords.lng);
     }
     
     onConfirm(){
          this.viewCtrl.dismiss({location: this.marker});
     }
     
     onAbort(){
          this.viewCtrl.dismiss();
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocationPage');
  }

}
