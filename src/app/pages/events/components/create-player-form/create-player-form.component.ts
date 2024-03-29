import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { REGEX_NO_WHITE_SPACE } from 'src/app/models/constants';
import { ECollection } from 'src/app/models/enums';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-create-player-form',
  templateUrl: './create-player-form.component.html',
  styleUrls: ['./create-player-form.component.scss'],
})
export class CreatePlayerFormComponent {
  collection = ECollection.Players;
  playerForm = new FormControl('', [
    Validators.pattern(REGEX_NO_WHITE_SPACE),
    Validators.minLength(3),
  ]);

  constructor(
    private firestore: FirestoreService,
    private dialogRef: MatDialogRef<CreatePlayerFormComponent>
  ) {}

  createPlayer() {
    const newPlayer = { name: this.playerForm.value };
    this.firestore.createDocument(this.collection, newPlayer);
    this.dialogRef.close();
  }
}
