import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrgRepComponent } from './delete-org-rep.component';

describe('DeleteOrgRepComponent', () => {
  let component: DeleteOrgRepComponent;
  let fixture: ComponentFixture<DeleteOrgRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteOrgRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOrgRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
