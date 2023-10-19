import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import Estacionamiento from 'src/app/interface/estacionamiento';
import { Subscription } from 'rxjs';
import { RegistrarUserService, Note} from 'src/app/registrar-user.service';


@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.page.html',
  styleUrls: ['./transacciones.page.scss'],
})
export class TransaccionesPage implements OnInit {

  email :any
  notes: Note[] = [];
  noteSub!: Subscription;

  constructor(private authService: AuthenticationService,private router: Router,private note:RegistrarUserService) { }

  ngOnInit(): void {
   
    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
    })


    this.note.getNotes();
    this.noteSub = this.note.notes.subscribe({
      next: (notes) => {
        this.notes = notes;
      },
      error: (e) => {
        console.log(e);
      }
    });

  }

  SignOut(){

  this.authService.SignOut().then(() =>{
    this.router.navigate(['/login'])
  })
 }
}


