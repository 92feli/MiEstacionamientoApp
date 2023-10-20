import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center : any = {
    lat: -33.6016069,
    lng: -70.5824042,
  };


  constructor() {}

  ngOnInit(){

  }

  ngAfterViewInit() {

    this.createMap();

  }
  

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom : 17,
        
      
      },
    });
  }


}
