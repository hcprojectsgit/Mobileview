import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipclubComponent } from './leadershipclub.component';

describe('LeadershipclubComponent', () => {
  let component: LeadershipclubComponent;
  let fixture: ComponentFixture<LeadershipclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
