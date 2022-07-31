import { Component } from '@angular/core';
import { IPlayer } from 'src/app/models/interfaces';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  twoPlayersNeededMsg = 'You need at least two players to create a games';
  players: IPlayer[] = [];

  constructor(private dialogService: DialogService) {}

  createNewGame() {
    this.dialogService.openCreateGameDialog(this.players);
  }

  selectedPlayer(event: any) {
    console.log(event);
  }
}
