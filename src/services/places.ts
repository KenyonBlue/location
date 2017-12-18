import { Place } from "../models/place";
import { Location } from "../models/location";

export class PlacesService {
     private places: Place[] = [];
     
     addPlace(title: string, 
               description: string, 
               location: Location, 
               base64Image: string){
          const place = new Place (title, description, location, base64Image );
          this.places.push(place);
     }
     loadPlaces(){
          return this.places.slice();
     }
}

