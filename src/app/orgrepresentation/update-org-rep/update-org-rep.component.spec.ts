import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrgRepComponent } from './update-org-rep.component';

describe('UpdateOrgRepComponent', () => {
  let component: UpdateOrgRepComponent;
  let fixture: ComponentFixture<UpdateOrgRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrgRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrgRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
