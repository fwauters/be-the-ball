import { Component } from '@angular/core';

import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items$ = this.firestore.items$;

  constructor(private firestore: FirestoreService) {
    this.items$.subscribe(console.log);
  }
}
