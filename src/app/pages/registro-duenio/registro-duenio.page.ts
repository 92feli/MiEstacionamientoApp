import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RegistrarUserService } from 'src/app/registrar-user.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-registro-duenio',
  templateUrl: './registro-duenio.page.html',
  styleUrls: ['./registro-duenio.page.scss'],
})
export class RegistroDuenioPage implements OnInit {

  Regisform: FormGroup
  Regisform2: FormGroup

  constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private authService: AuthenticationService, private router: Router, public formBuilder: FormBuilder, private registrarUserService: RegistrarUserService) {

  }

  ngOnInit() {
    // this.signUP()
    this.Regisform = this.formBuilder.group({
      fullname: [''],
      email: [''],
      Rut: [''],
      tarjeta: [''],
      password: [''],
      direccion: [''],
      modelo: ['--'],
      Patente: ['--'],
      tip_cli: ['Dueno'],
    });

    this.Regisform2 = this.formBuilder.group({
      email: [this.Regisform.value.email],
      Rut: [this.Regisform.value.Rut],
      Nombre_esta: [''],
      direccion_es: [''],
      latitud: [''],
      longitud: [''],
      alto: [''],
      ancho: [''],
      largo: [''],
      tarifa: [''],
    });
  }
  get errorControl() {
    return this.Regisform.controls;
  }

  async signUP() {
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
        this.router.navigate(['/home'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }
  async regis() {
    console.log(this.Regisform.value)
    const response = this.registrarUserService.addcliente(this.Regisform.value);
    console.log(response);

  }

  async Estacionamiento() {
    this.Regisform2 = this.formBuilder.group({
      email: [this.Regisform.value.email],
      Rut: [this.Regisform.value.Rut],
      Nombre_esta: [this.Regisform2.value.Nombre_esta],
      direccion_es: [this.Regisform2.value.direccion_es],
      Latd: [this.getMyLatitude()],
      Long: [this.getMyLongitude()],
      alto: [this.Regisform2.value.alto],
      ancho: [this.Regisform2.value.ancho],
      largo: [this.Regisform2.value.largo],
      tarifa: [this.Regisform2.value.tarifa],
    })
    console.log(this.Regisform2.value)
    const response = await this.registrarUserService.addEstacionamiento(this.Regisform2.value);
    console.log(response);

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

  async showToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  async getMyLatitude() {
    let locations = await Geolocation.getCurrentPosition();


    return locations.coords.latitude
  }

  async getMyLongitude() {
    let locations = await Geolocation.getCurrentPosition();

    return locations.coords.longitude
  }
}



