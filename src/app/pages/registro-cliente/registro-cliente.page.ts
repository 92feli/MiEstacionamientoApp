import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RegistrarUserService } from 'src/app/registrar-user.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {

  Regisform: FormGroup
  formulario: FormGroup;

  constructor(private toastController: ToastController,private alertController: AlertController,private loadingController: LoadingController,private authService: AuthenticationService, private router: Router, public formBuilder: FormBuilder, private registrarUserService:RegistrarUserService) { 

  }



  ngOnInit() {
    // this.signUP()
    this.Regisform = this.formBuilder.group({
      fullname:[''],
      email: [ ''],
      Rut:[ ''],
      tarjeta: [''],
      password: [''],
      direccion:[''],
      modelo: [''],
      Patente:[''],   
      Nombre_esta: ['--'],
      direccion_es: ['--'],
      alto: ['--'],
      ancho: ['--'],
      largo: ['--'],
      tip_cli:['Cliente'],
      tarifa:['--']
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
        this.router.navigate(['/home'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }

async regis(){
  console.log(this.Regisform.value)
  const response = this.registrarUserService.addcliente(this.Regisform.value);
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



}
