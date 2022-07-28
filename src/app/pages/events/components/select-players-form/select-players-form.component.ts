import { Component } from '@angular/core';
import { map } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-select-players-form',
  templateUrl: './select-players-form.component.html',
  styleUrls: ['./select-players-form.component.scss'],
})
export class SelectPlayersFormComponent {
  players$ = this.firestore.players$.pipe(
    map((players) =>
      players.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    )
  );

  constructor(
    private firestore: FirestoreService,
    private dialogService: DialogService
  ) {}

  addPlayer() {
    console.log('ADD PLAYER !');
  }

  openCreatePlayerForm() {
    this.dialogService.openCreatePlayerDialog();
  }
}
