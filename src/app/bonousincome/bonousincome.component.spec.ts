import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonousincomeComponent } from './bonousincome.component';

describe('BonousincomeComponent', () => {
  let component: BonousincomeComponent;
  let fixture: ComponentFixture<BonousincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonousincomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonousincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
