import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { CreateGameFormComponent } from '../pages/events/components/create-game-form/create-game-form.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  defaultOptions = {
    width: '',
    height: '',
    maxWidth: '96vw',
    maxHeight: '96vh',
    panelClass: '',
    data: {},
  };

  constructor(private dialog: MatDialog) {}

  openCreateGameDialog() {
    const options = this.defaultOptions;
    const dialogRef: MatDialogRef<CreateGameFormComponent> = this.dialog.open(
      CreateGameFormComponent,
      options
    );
    return dialogRef.afterClosed();
  }
}
