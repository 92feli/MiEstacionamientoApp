
import { Component, ElementRef, ViewChild,OnInit} from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-reserva-cliente',
  templateUrl: './reserva-cliente.page.html',
  styleUrls: ['./reserva-cliente.page.scss'],
})
export class ReservaClientePage implements OnInit {

  

 
  email :any
  constructor(private authService: AuthenticationService, private router: Router, private toastController: ToastController) { }
  
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


  qrCodeString = 'Test haber si funciona el codigo QR'


}
