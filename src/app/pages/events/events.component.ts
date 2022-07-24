import { Component } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  constructor(private dialogService: DialogService) {}

  createNewGame() {
    this.dialogService.openCreateGameDialog();
  }
}
