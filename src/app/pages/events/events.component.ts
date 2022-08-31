import { Component } from '@angular/core';
import { IPlayer } from 'src/app/models/interfaces';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  constructor(private dialogService: DialogService) {}

  createNewGame() {
    this.dialogService.openCreateGameDialog();
  }
}
