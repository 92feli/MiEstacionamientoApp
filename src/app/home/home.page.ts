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
        this.newMap.setOnMarkerClickListener(async (markerId) => {
      console.log(markerId);
    });
    }

    

    async createMap() {
        this.newMap = await GoogleMap.create({
            id: 'capacitor-google-maps',
            element: this.mapRef.nativeElement,
            apiKey: environment.google_maps_api_key,
            config: {
              
                center: this.center,
                zoom: 17,disableDefaultUI: true,

                styles : [
                  {
                      "featureType": "administrative.province",
                      "elementType": "all",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.locality",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "lightness": "-8"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.locality",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#000000"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.locality",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.neighborhood",
                      "elementType": "all",
                      "stylers": [
                          {
                              "color": "#acacac"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.neighborhood",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "color": "#484848"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.neighborhood",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "color": "#ff0000"
                          },
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "administrative.land_parcel",
                      "elementType": "all",
                      "stylers": [
                          {
                              "lightness": "-3"
                          }
                      ]
                  },
                  {
                      "featureType": "landscape",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "lightness": "72"
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                  },
                  {
                      "featureType": "landscape",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "lightness": "23"
                          }
                      ]
                  },
                  {
                      "featureType": "poi",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "lightness": "30"
                          },
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "all",
                      "stylers": [
                          {
                              "lightness": "-19"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "lightness": "2"
                          },
                          {
                              "gamma": "1.21"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "geometry.stroke",
                      "stylers": [
                          {
                              "visibility": "off"
                          },
                          {
                              "saturation": "15"
                          },
                          {
                              "hue": "#ff0000"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "lightness": "-43"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels.text",
                      "stylers": [
                          {
                              "visibility": "on"
                          },
                          {
                              "lightness": "22"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "weight": "0.12"
                          },
                          {
                              "lightness": "-23"
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels.text.stroke",
                      "stylers": [
                          {
                              "visibility": "off"
                          },
                          {
                              "lightness": "71"
                          }
                      ]
                  },
                  {
                      "featureType": "road",
                      "elementType": "labels.icon",
                      "stylers": [
                          {
                              "visibility": "on"
                          }
                      ]
                  },
                  {
                      "featureType": "road.highway",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "visibility": "simplified"
                          }
                      ]
                  },
                  {
                      "featureType": "road.arterial",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "lightness": 30
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                  },
                  {
                      "featureType": "road.local",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "lightness": 40
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                  },
                  {
                      "featureType": "transit",
                      "elementType": "all",
                      "stylers": [
                          {
                              "saturation": -100
                          },
                          {
                              "visibility": "off"
                          }
                      ]
                  },
                  {
                      "featureType": "transit",
                      "elementType": "geometry.fill",
                      "stylers": [
                          {
                              "saturation": "5"
                          },
                          {
                              "visibility": "on"
                          },
                          {
                              "lightness": "5"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "geometry",
                      "stylers": [
                          {
                              "hue": "#226699"
                          },
                          {
                              "lightness": "10"
                          },
                          {
                              "saturation": 40
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "geometry.fill",
                      "stylers": [
                          {
                              "saturation": "0"
                          },
                          {
                              "lightness": "0"
                          },
                          {
                              "visibility": "on"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "labels",
                      "stylers": [
                          {
                              "visibility": "on"
                          },
                          {
                              "lightness": -25
                          },
                          {
                              "saturation": -100
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "labels.text",
                      "stylers": [
                          {
                              "weight": "0.01"
                          },
                          {
                              "lightness": "9"
                          }
                      ]
                  },
                  {
                      "featureType": "water",
                      "elementType": "labels.text.fill",
                      "stylers": [
                          {
                              "lightness": "-32"
                          },
                          {
                              "gamma": "2.99"
                          }
                      ]
                  }
              ],
              

                


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
