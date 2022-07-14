import { Component } from '@angular/core';
import { DocumentReference } from 'firebase/firestore';
import { map } from 'rxjs';
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
    console.log('HomeComponent constructor');
  }

  create() {
    this.firestore.createItem();
  }

  deleteItem(id: string) {
    this.firestore.deleteItem(id);
    console.log('DELETE');
  }

  filter() {
    this.items$ = this.items$.pipe(map((i) => i.filter((i) => i?.test)));
  }

  removeFilter() {
    this.items$ = this.firestore.items$;
  }
}
