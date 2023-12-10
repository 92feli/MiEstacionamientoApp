import { Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { Geolocation } from '@capacitor/geolocation';
import { Subscription, findIndex } from 'rxjs';
import { RegistrarUserService, Note,Nota2} from 'src/app/registrar-user.service';
import { GeoPoint } from '@angular/fire/firestore';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
  
    @ViewChild('map')
    mapRef: ElementRef<HTMLElement>;
    newMap: GoogleMap;
    center: any = {
        lat: -33.59849273312327, 
        lng: -70.57904954640443,
    };

    markerId: string;
    notes: Note[] = [];
    noteSub!: Subscription;
    notes2: Nota2[] = [];
  

    ngAfterViewInit() {
      
     

        this.createMap();
        this.getMyLocation();


       

    }
    // Crear Un Marcador para Mostrar posicion
    async addMarker(lat, lng) {

        this.markerId = await this.newMap.addMarker({

            iconUrl:"assets/images/marcador-p.png",

            iconSize: 
            {
                width: 35,
                height: 48,
            },

            coordinate: {
                lat: -33.598404937702256, 
                lng: -70.57849669848787,
            },
            draggable: false

        });

    }

    async addMarker2(lati,longe) {

        this.markerId = await this.newMap.addMarker({

            iconUrl:"assets/images/marcador-p.png",

            iconSize: 
            {
                width: 35,
                height: 48,
            },

            coordinate :{  lat: lati, 
                           lng: longe},

            draggable: false

        });

    }

    

    async createMap() {
        this.newMap = await GoogleMap.create({
            id: 'capacitor-google-maps',
            element: this.mapRef.nativeElement,
            apiKey: environment.google_maps_api_key,
            config: {
                styles: environment.styles,
                center: this.center,
                zoom: 17,disableDefaultUI: true,


            },
        });

        this.note.getNotes();
        this.noteSub = this.note.notes.subscribe({
          next: (notes) => {
            this.notes= notes;
            this.notes.forEach((notes) => {
              const lati = notes.Latd; 
              const longe = notes.Long;
              this.addMarker2(lati,longe);
              console.log('esto es lati  ' + lati+' esto es longe '+longe)
            
          })},
          
          error: (e) => {
            console.log(e);
          }
        });

        this.addMarker(this.center.lat, this.center.Ing);
    }

    email :any
    constructor(private authService: AuthenticationService, private router: Router, private toastController: ToastController,private note:RegistrarUserService) { }
    
    async getMyLocation()
    {
      let locations = await Geolocation.getCurrentPosition();
  
      let textLocation = "Latitud: "+locations.coords.latitude+ " - Longitud: "+ locations.coords.longitude
  
      console.log(locations)
      this.showToast(textLocation)
  


    }
    async showToast(mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 1500,
        position: 'top',
      });
  
      await toast.present();
    }
  





    ngOnInit(): void {
     
      this.authService.getProfile().then((user) =>{
          this.email = user?.email
          console.log(user);
          
      })

    

     

    }

    
  
    SignOut(){
  
    this.authService.SignOut().then(() =>{
      this.router.navigate(['/login'])
    })
   }


   
async getMyLocation2(): Promise<{ latitude: number; longitude: number }> {
  try {
    const location = await Geolocation.getCurrentPosition();
    return { latitude: location.coords.latitude, longitude: location.coords.longitude };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

   
}
