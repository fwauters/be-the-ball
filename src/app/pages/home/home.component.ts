import { Component } from '@angular/core';
import { DocumentReference } from 'firebase/firestore';
import { map } from 'rxjs';
import { ECollection } from 'src/app/models/enums';

import { FirestoreService, Item } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  items$ = this.firestore.items$;
  collections = ECollection;

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

  constructor(private firestore: FirestoreService) {
    this.items$.subscribe(console.log);
    console.log('HomeComponent constructor');
  }

  create() {
    this.firestore.createDocument(ECollection.Test, {
      date: new Date().getTime(),
      test: this.testItem,
    });
  }

  deleteItem(id: string) {
    this.firestore.deleteDocument(id);
    console.log('DELETE');
  }

  filter() {
    this.items$ = this.items$.pipe(map((i) => i.filter((i) => i?.test)));
  }

  removeFilter() {
    this.items$ = this.firestore.items$;
  }
}
