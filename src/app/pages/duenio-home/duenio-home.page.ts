import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import Estacionamiento from 'src/app/interface/estacionamiento';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrarUserService, Note} from 'src/app/registrar-user.service';

@Component({
  selector: 'app-duenio-home',
  templateUrl: './duenio-home.page.html',
  styleUrls: ['./duenio-home.page.scss'],
})
export class DuenioHomePage implements OnInit {

  email :any
  notes: Note[] = [];
  notes2: Note[] = [];
  noteSub!: Subscription;
  Regisform: FormGroup;
  valorInput: string = '';
  idInput: string = '';

  onInputChange(event: any) {
    this.valorInput = event.target.value;
  }

  obtenerValor() {
    console.log('Valor del input:', this.valorInput);
    // Puedes hacer lo que necesites con this.valorInput
    this.notes2.forEach((notes2, index) => {
      this.notes2[index].tarifa = this.valorInput;
      this.idInput=this.notes2[index].id
    this.note.updateNote(this.idInput,notes2)
    

  })
  }

  constructor(private authService: AuthenticationService,private router: Router, public formBuilder: FormBuilder, private note:RegistrarUserService) { }

  ngOnInit() {

    this.authService.getProfile().then((user) =>{
      this.email = user?.email
      console.log(user);
  })

  this.Regisform = this.formBuilder.group({
    tar:['']
  });


  this.note.getNotes();
  this.noteSub = this.note.notes.subscribe({
    next: (notes) => {
      this.notes = notes;
    
      notes.sort((a, b)=> {
        if (a.email === this.email){
          return a.Nombre_esta < b.Nombre_esta ? -1 : 1
        } else {
          return a.Nombre_esta < b.Nombre_esta ? -1 : 1
        }
      }
      
      )

      this.filtrarYAgregar();
    }
    
    ,
    error: (e) => {
      console.log(e);
    }
  });
}


filtrarYAgregar() {
  // Limpiar notes2 antes de agregar nuevos elementos
  this.notes2 = [];

  // Filtrar y agregar elementos a notes2
  this.notes.forEach((note) => {
    // Agregar la condición que desees para filtrar
    this.notes2 = this.notes.filter((note) => note.email === this.email);
  });
}


SignOut(){
  
  this.authService.SignOut().then(() =>{
    this.router.navigate(['/login'])
  })
 }


  }


