import { Component, Inject } from '@angular/core';
import {
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

  gameForms: FormGroup<{
    [frame: string]: FormControl<number | string>;
  }>[] = this.setGameForms();

  players: IPlayer[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data);
  }

  setGameForms() {
    const gameForms = [];

    for (let roll = 1; roll <= 10; roll++) {
      const frame: { [key: string]: FormControl } = {};

      frame['roll1'] = new FormControl(['', Validators.required]);
      frame['roll2'] = new FormControl(['', Validators.required]);

      if (roll === 10) {
        frame['roll3'] = new FormControl(['', Validators.required]);
      }

      gameForms.push(this.fb.group(frame));
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
}
