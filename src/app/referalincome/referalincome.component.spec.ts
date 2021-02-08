import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalincomeComponent } from './referalincome.component';

describe('ReferalincomeComponent', () => {
  let component: ReferalincomeComponent;
  let fixture: ComponentFixture<ReferalincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalincomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
