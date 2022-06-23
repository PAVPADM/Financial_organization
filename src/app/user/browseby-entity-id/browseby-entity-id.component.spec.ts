import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsebyEntityIDComponent } from './browseby-entity-id.component';

describe('BrowsebyEntityIDComponent', () => {
  let component: BrowsebyEntityIDComponent;
  let fixture: ComponentFixture<BrowsebyEntityIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsebyEntityIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsebyEntityIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
