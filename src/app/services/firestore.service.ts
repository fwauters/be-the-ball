import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item extends DocumentData {
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
  items$: Observable<Item[]>;

  constructor(firestore: Firestore) {
    const data = collection(firestore, 'test');
    this.items$ = collectionData(data) as Observable<Item[]>;
  }
}
