import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {

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

 
}


