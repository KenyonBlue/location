import { Component } from '@angular/core';
import { IonicPage,ModalController,LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { SetLocationPage } from "../set-location/set-location";
import { Location } from "../../models/location";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera } from '@ionic-native/camera';
import { PlacesService } from "../../services/places";




@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
     location: Location = {
           lat:  37.983929,
          lng:  -84.529081
     };
     
     locationIsSet = false;
     public base64Image: string;

     
     constructor(private modalCtrl: ModalController, public geolocation: Geolocation,private camera: Camera, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private placesService: PlacesService){}
     
   
     
     onSubmit(form: NgForm){
          this.placesService.addPlace(form.value.title, form.value.description, this.location, this.base64Image);
          form.reset();
          this.location = {
           lat:  37.983929,
          lng:  -84.529081
     };
      this.base64Image = '';
          this.locationIsSet = false;
 }
     
     onOpenMap(){
          let modal = this.modalCtrl.create(SetLocationPage,
                    {location: this.location, isSet: this.locationIsSet});
          modal.present();
          modal.onDidDismiss(
          data => {
               if (data) {
               this.location = data.location;
                    this.locationIsSet = true;
               }
          }
          );
     }
     
     onLocate() {
          let loader = this.loadingCtrl.create({
               content: 'Getting your location...'
          });
          loader.present();
          this.geolocation.getCurrentPosition()
          .then(
          location => {
               loader.dismiss();
               this.location.lat = location.coords.latitude;
               this.location.lng = location.coords.longitude;
               this.locationIsSet = true;
          })
          .catch(
               
          error => {
               loader.dismiss();
               const toast = this.toastCtrl.create({
                    message: 'Could not get location, please pick it manually!',
                    duration: 2500
               });
               toast.present();
          });
     }
     
       
     
     onTakePhoto() {
       this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
         
    }).then((imageData) => {
      
        this.base64Image = "data:image/jpeg;base64," + imageData;
            
            
    }, (err) => {
        console.log(err);
    });

}

}
