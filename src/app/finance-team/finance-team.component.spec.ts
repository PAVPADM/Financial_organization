import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTeamComponent } from './finance-team.component';

describe('FinanceTeamComponent', () => {
  let component: FinanceTeamComponent;
  let fixture: ComponentFixture<FinanceTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
