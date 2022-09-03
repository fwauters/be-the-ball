import { Component } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  date: Date | null = null;

  constructor(private dialogService: DialogService) {}

  createNewGame() {
    if (this.date) {
      this.dialogService.openCreateGameDialog(this.date);
    }
  }
}
