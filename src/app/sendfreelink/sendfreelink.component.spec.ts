import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfreelinkComponent } from './sendfreelink.component';

describe('SendfreelinkComponent', () => {
  let component: SendfreelinkComponent;
  let fixture: ComponentFixture<SendfreelinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendfreelinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendfreelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
