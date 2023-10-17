import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Loginform: FormGroup

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController,private authService: AuthenticationService, private router: Router, public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.Loginform = this.formBuilder.group({
      email: [
        ''
      ],
      password: [''
      ],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    // console.log(this.email + this.password);
    if (this.Loginform.valid) {

      //  await  loading.dismiss();
      const user = await this.authService.LoginUser(this.Loginform.value.email, this.Loginform.value.password).catch((err) => {
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
  get errorControl() {
    return this.Loginform.controls;
  }

  async presentToast(message: undefined) {
    console.log(message);

    const toast = await this.toastController.create({
      message: "Inicio de sesion incorrecto",
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}