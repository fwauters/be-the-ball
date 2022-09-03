import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-frame',
  templateUrl: './game-frame.component.html'
})
export class GameFrameComponent {

  @Input() rolls: number[] = [];

}
