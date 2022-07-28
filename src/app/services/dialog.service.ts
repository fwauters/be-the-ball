import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CreateGameFormComponent } from '../pages/events/components/create-game-form/create-game-form.component';
import { CreatePlayerFormComponent } from '../pages/events/components/create-player-form/create-player-form.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  defaultOptions = {
    width: '',
    height: '',
    maxWidth: '800px',
    maxHeight: '96vh',
    panelClass: '',
    data: {},
  };

  constructor(private dialog: MatDialog) {}

  openCreateGameDialog() {
    // const options = this.defaultOptions;
    const dialogRef: MatDialogRef<CreateGameFormComponent> = this.dialog.open(
      CreateGameFormComponent,
      this.defaultOptions
    );
    return dialogRef.afterClosed();
  }

  openCreatePlayerDialog() {
    const dialogRef: MatDialogRef<CreatePlayerFormComponent> = this.dialog.open(
      CreatePlayerFormComponent,
      this.defaultOptions
    );
    return dialogRef.afterClosed();
  }
}
