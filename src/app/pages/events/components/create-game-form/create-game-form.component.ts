import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    @Inject(MAT_DIALOG_DATA) public data: { date: Date; name?: string },
    private fb: FormBuilder
  ) {
    console.log(data);
  }

  setGameForms() {
    const gameForms = [];

    for (let frame = 1; frame <= 10; frame++) {
      const rolls: { [key: string]: FormControl } = {};

      for (const player of this.players) {
        rolls[player.id + '_1'] = new FormControl<string>('');
        rolls[player.id + '_2'] = new FormControl<string>('');

        if (frame === 10) {
          rolls[player.id + '_3'] = new FormControl<string>('');
        }
      }
      gameForms.push(this.fb.group(rolls));
    }
    return gameForms;
  }

  saveGame() {
    console.log('SAVE GAME !');
    console.log(this.gameForms);

    const fromData = [];

    for (const form of this.gameForms) {
      for (const key in form.value) {
        const data = form.value[key];

        const k = key.split('_');
        // k[0] === playerId
        // k[1] === roll number (1 -> 3)

        const player = this.players.find((player) => {
          player.id === k[0];
        });


      }
    }

    const event = {
      date: this.data.date,
      name: this.data?.name,
      game: {},
    };
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
