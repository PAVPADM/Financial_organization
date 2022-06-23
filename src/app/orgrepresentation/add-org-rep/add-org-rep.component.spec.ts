import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrgRepComponent } from './add-org-rep.component';

describe('AddOrgRepComponent', () => {
  let component: AddOrgRepComponent;
  let fixture: ComponentFixture<AddOrgRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrgRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrgRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
