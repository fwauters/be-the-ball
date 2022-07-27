import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlayersFormComponent } from './select-players-form.component';

describe('SelectPlayersFormComponent', () => {
  let component: SelectPlayersFormComponent;
  let fixture: ComponentFixture<SelectPlayersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPlayersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPlayersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
