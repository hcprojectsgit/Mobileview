import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsclubComponent } from './rewardsclub.component';

describe('RewardsclubComponent', () => {
  let component: RewardsclubComponent;
  let fixture: ComponentFixture<RewardsclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
