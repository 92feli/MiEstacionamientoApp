import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro-duenio',
  templateUrl: './registro-duenio.page.html',
  styleUrls: ['./registro-duenio.page.scss'],
})
export class RegistroDuenioPage implements OnInit {

  Regisform: FormGroup

  constructor(private toastController: ToastController,private alertController: AlertController,private loadingController: LoadingController,private authService: AuthenticationService, private router: Router, public formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    // this.signUP()
    this.Regisform = this.formBuilder.group({
      fullname:[''
    ],
      email: [
        '',
      ],
      password: ['', 
    ],
    });
  }
  get errorControl() {
    return this.Regisform.controls;
  }
 
  async signUP(){
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.Regisform.valid) {

      const user = await this.authService.registerUser(this.Regisform.value.email, this.Regisform.value.password).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/homes'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }
  async presentToast(message: undefined) {
    console.log(message);
    
    const toast = await this.toastController.create({
      message: "Creacion de cuenta Erronea",
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
