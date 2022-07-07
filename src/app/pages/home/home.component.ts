import { Component } from '@angular/core';
import { DocumentReference } from 'firebase/firestore';
import { ECollection } from 'src/app/models/enums';

import { FirestoreService, Item } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items$ = this.firestore.items$;
  collections = ECollection;

  constructor(private firestore: FirestoreService) {
    this.items$.subscribe(console.log);
  }

  create() {
    this.firestore.createItem();
  }

  test(id: string) {
    /* const test = this.firestore.createItem();
    console.log(test); */

    this.firestore.deleteItem(id);
  }
}
