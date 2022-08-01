import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
  addDoc,
  DocumentReference,
  deleteDoc,
  doc,
  CollectionReference,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ECollection } from '../models/enums';
import { IPlayer } from '../models/interfaces';

export interface Item extends DocumentData {
  date: number;
  test: any[];
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  fs: Firestore;

  data: CollectionReference;
  items$: Observable<any[]>;

  playersData: CollectionReference;
  players$: Observable<IPlayer[]>;

  //-----------------------------------------------
  // * https://firebase.google.com/docs/firestore/manage-data/delete-data
  //-----------------------------------------------

  constructor(firestore: Firestore) {
    this.fs = firestore;

    const data = collection(firestore, 'test');
    this.data = data;
    console.log('firestore.collection("test") ID :', data.id);
    this.items$ = collectionData(data, { idField: 'id' }) as Observable<Item[]>;

    this.playersData = collection(firestore, 'players');
    console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    this.players$ = collectionData(this.playersData, {
      idField: 'id',
    }) as Observable<IPlayer[]>;
  }

  async createDocument(
    reference: ECollection,
    data: Partial<Item> | Partial<IPlayer>
  ) {
    const coll = collection(this.fs, reference);
    return await addDoc(coll, data);
  }

  async deleteDocument(id: string) {
    const docRef: DocumentReference = doc(this.data, id);
    return await deleteDoc(docRef);
  }
}
