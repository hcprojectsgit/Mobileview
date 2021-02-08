import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydirectComponent } from './mydirect.component';

describe('MydirectComponent', () => {
  let component: MydirectComponent;
  let fixture: ComponentFixture<MydirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
