import { Component } from '@angular/core';
import { IonicPage,ModalController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { SetLocationPage } from "../set-location/set-location";



@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
     
     constructor(private modalCtrl: ModalController){}
     
     onSubmit(form: NgForm){
      console.log(form.value);
 }
     
     opOpenMap(){
          const modal = this.modalCtrl.create(SetLocationPage);
          modal.present();
     }

}
