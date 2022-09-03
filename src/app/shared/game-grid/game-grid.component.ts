import { Component } from '@angular/core';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
})
export class GameGridComponent {
  data = [
    {
      player: {
        name: 'François',
        id: 'sdhtdhfdsgsdgds',
        pseudo: 'FRANCO'
      },
      frame1: [3, 2],
      frame2: [3, 2],
      frame3: [3, 2],
      frame4: [3, 2],
      frame5: [3, 2],
      frame6: [3, 2],
      frame7: [3, 2],
      frame8: [3, 2],
      frame9: [3, 2],
      frame10: [3, 2, 5],
      total: 666,
    },
    {
      player: {
        name: 'Mica',
        id: 'ljijoidshfuiqsgdqs',
        pseudo: 'MICA',
      },
      frame1: [3, 2],
      frame2: [3, 2],
      frame3: [3, 2],
      frame4: [3, 2],
      frame5: [3, 2],
      frame6: [3, 2],
      frame7: [3, 2],
      frame8: [3, 2],
      frame9: [3, 2],
      frame10: [3, 2, 5],
      total: 666,
    },
  ];

  displayedColumns: string[] = [
    'player',
    'frame1',
    'frame2',
    'frame3',
    'frame4',
    'frame5',
    'frame6',
    'frame7',
    'frame8',
    'frame9',
    'frame10',
    'total',
  ];
}
