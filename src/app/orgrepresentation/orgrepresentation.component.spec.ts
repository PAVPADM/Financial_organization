import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgrepresentationComponent } from './orgrepresentation.component';

describe('OrgrepresentationComponent', () => {
  let component: OrgrepresentationComponent;
  let fixture: ComponentFixture<OrgrepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgrepresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgrepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
