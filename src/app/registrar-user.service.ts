import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc,getDocs, deleteDoc } from '@angular/fire/firestore';
import { Observable,BehaviorSubject} from 'rxjs';
import Datos from './interface/datos'; 
import Estacionamiento from './interface/estacionamiento';

export interface Note  {
  Nombre_esta: string;
  direccion_es: string;
  alto: string;
  ancho: string;
  largo: string;
  tarifa: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrarUserService {

  private _notes = new BehaviorSubject<Note[]>([]);

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

getEstacionamiento(): Observable<Estacionamiento[]> {
  const placeRef = collection(this.firestore, 'Estacionamientos');
  return collectionData(placeRef, { idField: 'id' }) as Observable<Estacionamiento[]>;
}

get notes() {
  return this._notes.asObservable();
}

async getNotes() {
  try {
    const dataRef: any = collection(this.firestore, 'Estacionamientos');
    const querySnapshot = await getDocs(dataRef);
    const notes: Note[] = await querySnapshot.docs.map((doc) => {
      let item: any = doc.data();
      item.id = doc.id;
      return item;
    });
    console.log('notes: ', notes);
    this._notes.next(notes);
    return notes;
  } catch(e) {
    throw(e);
  }
}



deleteCliente(datos: Datos) {
  const cliref = doc(this.firestore, `Clientes/${datos.id}`);
  return deleteDoc(cliref);
}

deleteEstacionamiento(datos: Estacionamiento) {
  const cliref = doc(this.firestore, `Clientes/${datos.id}`);
  return deleteDoc(cliref);
}

}
