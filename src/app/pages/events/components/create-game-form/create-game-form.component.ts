import { Component, Inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from 'src/app/models/interfaces';
import { arrayContainsDuplicates } from 'src/app/utils/utils';

@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
})
export class CreateGameFormComponent {
  scores = ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, '/', 'X'];
  playersValidated = false;
  playerChosenTwice = false;
  players: IPlayer[] = [];

  gameForms: FormGroup<{
    [key: string]: FormControl<any>;
  }>[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data);
  }

  setGameForms() {
    const gameForms = [];

    for (let frame = 1; frame <= 10; frame++) {
      const rolls: { [key: string]: FormControl } = {};

      for (const player of this.players) {
        rolls[player.id + '_1'] = new FormControl(['', Validators.required]);
        rolls[player.id + '_2'] = new FormControl(['', Validators.required]);

        if (frame === 10) {
          rolls[player.id + '_3'] = new FormControl(['', Validators.required]);
        }
      }
      gameForms.push(this.fb.group(rolls));
    }
    return gameForms;
  }

  saveGame() {
    console.log('SAVE GAME !');
  }

  addPlayer(data: { index: number; player: IPlayer }) {
    console.log(data);
    if (this.players?.[data.index]) {
      this.players[data.index] = data.player;
    } else {
      this.players.push(data.player);
    }
    this.playerChosenTwice = arrayContainsDuplicates(this.players);

    console.log(this.players);
  }

  removePlayer() {
    this.players.pop();
    console.log(this.players);
    this.playerChosenTwice = arrayContainsDuplicates(this.players);
  }

  approvePlayers(event: any) {
    console.log(event);
    this.playersValidated = true;
  }

  approvePlayersAndSetForm() {
    this.playersValidated = true;
    this.gameForms = this.setGameForms();
  }
}
