import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Datos from './interface/datos'; 


@Injectable({
  providedIn: 'root'
})
export class RegistrarUserService {

  constructor(private firestore: Firestore) { }

addcliente(datos:Datos){
  const cliref = collection(this.firestore, 'Clientes');
  return addDoc(cliref, datos);
}


}
