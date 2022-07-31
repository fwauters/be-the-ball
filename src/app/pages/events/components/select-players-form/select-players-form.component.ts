import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { IPlayer } from 'src/app/models/interfaces';
import { DialogService } from 'src/app/services/dialog.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-select-players-form',
  templateUrl: './select-players-form.component.html',
  styleUrls: ['./select-players-form.component.scss'],
})
export class SelectPlayersFormComponent {
  allPlayers$ = this.firestore.players$.pipe(
    map((players) =>
      players.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    )
  );
  selectPlayersForm = new FormArray([new FormControl('', Validators.required)]);
  selectedPlayers: { [i: number]: IPlayer } = {};

  @Output() selectedPlayer = new EventEmitter<any>();

  constructor(
    private firestore: FirestoreService,
    private dialogService: DialogService
  ) {}

  addPlayer() {
    this.selectPlayersForm.push(new FormControl('', Validators.required));
  }

  removePlayer() {
    this.selectPlayersForm.removeAt(-1);
  }

  openCreatePlayerForm() {
    this.dialogService.openCreatePlayerDialog();
  }
}
