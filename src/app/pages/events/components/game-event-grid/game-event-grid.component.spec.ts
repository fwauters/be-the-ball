import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEventGridComponent } from './game-event-grid.component';

describe('GameEventGridComponent', () => {
  let component: GameEventGridComponent;
  let fixture: ComponentFixture<GameEventGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameEventGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameEventGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
