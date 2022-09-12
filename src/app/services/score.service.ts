import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {

  scores$ = of(this.getScore());

  getScore() {

  }
}
