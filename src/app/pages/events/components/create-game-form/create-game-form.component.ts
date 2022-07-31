import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.scss'],
})
export class CreateGameFormComponent {
  scores = ['-', 1, 2, 3, 4, 5, 6, 7, 8, 9, '/', 'X'];

  gameForms: FormGroup<{
    [frame: string]: FormControl<any>;
  }>[] = this.setGameForms();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data);
  }

  setGameForms() {
    const gameForms = [];

    for (let i = 0; i < 10; i++) {
      const frame: { [key: string]: any[] } = {};

      frame['roll1'] = ['', Validators.required];
      frame['roll2'] = ['', Validators.required];

      if (i === 9) {
        frame['roll3'] = ['', Validators.required];
      }

      gameForms.push(this.fb.group(frame));
    }

    return gameForms;
  }

  saveGame() {
    console.log('SAVE GAME !');
  }
}
