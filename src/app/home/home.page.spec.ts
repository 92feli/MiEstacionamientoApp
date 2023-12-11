import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
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
import { HomePage } from './home.page';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
