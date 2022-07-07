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

export interface Item extends DocumentData {
  name: string;
  score: number;
  date: {
    nanoseconds: number;
    seconds: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  items$: Observable<any[]>;
  fs: Firestore;
  data: CollectionReference;

  constructor(firestore: Firestore) {
    const data = collection(firestore, 'test');
    this.data = data;
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(data.id);
    this.fs = firestore;
    this.items$ = collectionData(data, { idField: 'itemId' }) as Observable<Item[]>;
  }

  async createItem(/* collectionName: ECollection, data: Item | any */) {
    const test = collection(this.fs, 'test');
    return await addDoc(test, {
      date: new Date(),
      test: ECollection.Players,
    });
  }

  async deleteItem(id: string) {
    const docRef: DocumentReference = doc(this.data, id)
    return await deleteDoc(docRef);
  }
}
