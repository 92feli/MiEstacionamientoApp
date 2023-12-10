import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc,getDocs,getDoc, deleteDoc, updateDoc, GeoPoint } from '@angular/fire/firestore';
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
  email: string;
  id: string;
  Latd: number;
  Long: number;
}
export interface Nota2  {
  Nombre_esta: string;
  email: string;
  Latd: string;
  Long: string;
  geo:GeoPoint;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrarUserService {

  private _notes = new BehaviorSubject<Note[]>([]);
  private _notes2 = new BehaviorSubject<Nota2[]>([]);

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

get notes2() {
  return this._notes2.asObservable();
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

async getNotes2() {
  try {
    const dataRef: any = collection(this.firestore, 'cords');
    const querySnapshot = await getDocs(dataRef);
    const notes: Nota2[] = await querySnapshot.docs.map((doc) => {
      let item: any = doc.data();
      item.id = doc.id;
      return item;
    });
    console.log('notes: ', notes);
    this._notes2.next(notes);
    return notes;
  } catch(e) {
    throw(e);
  }
}


async getNoteById(id: string) {
  try {
    const dataRef: any = doc(this.firestore, `Estacionamientos/${id}`);
    const docSnap = await getDoc(dataRef);
    if (docSnap.exists()) {
      // return docSnap.data() as Note;
      let item: any = docSnap.data();
      item.id = docSnap.id;
      return {...item} as Note;
    } else {
      console.log("No such document!");
      throw("No such document!");
    }
  } catch(e) {
    throw(e);
  }
}

async updateNote(id: string, data: Note) {
  try {
    const dataRef: any = doc(this.firestore, `Estacionamientos/${id}`);
    await updateDoc(dataRef, data);
    let currentNotes = this._notes.value;
    const index = currentNotes.findIndex(x => x.id == id);
    const latestData = {id, ...data};
    currentNotes[index] = latestData;
    this._notes.next(currentNotes);
    return latestData;
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
