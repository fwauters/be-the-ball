import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { map, of } from 'rxjs';
import { IPlayer } from 'src/app/models/interfaces';
import { DialogService } from 'src/app/services/dialog.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-select-players-form',
  templateUrl: './select-players-form.component.html',
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
  ) /* of(null) */;
  selectPlayersForm = new FormArray<FormControl<IPlayer | null>>([
    new FormControl(null, Validators.required),
  ]);
  selectedPlayers: { [i: number]: IPlayer } = {};

  @Input() alreadyChosenError: boolean = false;

  @Output() selectPlayer = new EventEmitter<{
    index: number;
    player: IPlayer;
  }>();
  @Output() takeOffPlayer = new EventEmitter();
  @Output() validatePlayers = new EventEmitter();

  constructor(
    private firestore: FirestoreService,
    private dialogService: DialogService
  ) {}

  choosePlayer(index: number, player: IPlayer) {
    this.selectPlayersForm.controls[index].patchValue(player);
    this.selectPlayer.emit({ index, player });
  }

  addPlayer() {
    this.selectPlayersForm.push(new FormControl(null, Validators.required));
    console.log(this.selectedPlayers);
    console.log(this.selectPlayersForm.value);
  }

  removePlayer(index: number) {
    this.selectPlayersForm.removeAt(-1);
    this.takeOffPlayer.emit();
    delete this.selectedPlayers[index];
    console.log(this.selectPlayersForm.value);
  }

  openCreatePlayerForm() {
    this.dialogService.openCreatePlayerDialog();
  }
}
