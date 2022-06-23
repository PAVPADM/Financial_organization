import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByEntityComponent } from './browse-by-entity.component';

describe('BrowseByEntityComponent', () => {
  let component: BrowseByEntityComponent;
  let fixture: ComponentFixture<BrowseByEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseByEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
