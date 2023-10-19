import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Datos from './interface/datos'; 
import Estacionamiento from './interface/estacionamiento';



@Injectable({
  providedIn: 'root'
})
export class RegistrarUserService {

  constructor(private firestore: Firestore) { }

addcliente(datos:Datos){
  const cliref = collection(this.firestore, 'Clientes');
  return addDoc(cliref, datos);
}

addEstacionamiento(esta:Estacionamiento){
  const cliref = collection(this.firestore, 'Estacionamientos');
  return addDoc(cliref, esta);
}

getCliente(): Observable<Datos[]> {
  const placeRef = collection(this.firestore, 'Clientes');
  return collectionData(placeRef, { idField: 'id' }) as Observable<Datos[]>;
}

deleteCliente(datos: Datos) {
  const cliref = doc(this.firestore, `Clientes/${datos.id}`);
  return deleteDoc(cliref);
}


}
