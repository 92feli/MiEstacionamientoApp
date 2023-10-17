import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.page.html',
  styleUrls: ['./homes.page.scss'],
})
export class HomesPage implements OnInit {

  email :any
  constructor(private authService: AuthenticationService,private router: Router) { }

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
