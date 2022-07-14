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

  testItem = [
    {
      a: 'a',
      b: 1,
      c: false,
      d: [
        {
          sqdsdsd: 452453,
          dsfdsf: 64,
        },
        {
          sqdsdsd: 452453,
          dsfdsf: 64,
        },
      ],
    },
    {
      a: 'a',
      b: 1,
      c: false,
    },
    {
      a: 'a',
      b: 1,
      c: false,
    },
  ];

  //-----------------------------------------------
  // * https://firebase.google.com/docs/firestore/manage-data/delete-data
  //-----------------------------------------------

  constructor(firestore: Firestore) {
    console.time("firestore request");
    const data = collection(firestore, 'test');
    this.data = data;
    console.log(data.id);
    console.log('FirestoreService constructor');
    this.fs = firestore;
    this.items$ = collectionData(data, { idField: 'id' }) as Observable<Item[]>;
    console.timeEnd("firestore request");
  }

  async createItem(/* collectionName: ECollection, data: Item | any */) {
    const test = collection(this.fs, 'test');
    return await addDoc(test, {
      date: new Date().getTime(),
      test: this.testItem,
    });
  }

  async deleteItem(id: string) {
    const docRef: DocumentReference = doc(this.data, id);
    return await deleteDoc(docRef);
  }
}
