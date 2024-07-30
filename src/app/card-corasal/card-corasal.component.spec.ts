import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCorasalComponent } from './card-corasal.component';

describe('CardCorasalComponent', () => {
  let component: CardCorasalComponent;
  let fixture: ComponentFixture<CardCorasalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCorasalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCorasalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
