import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdnjsComponent } from './cdnjs.component';

describe('CdnjsComponent', () => {
  let component: CdnjsComponent;
  let fixture: ComponentFixture<CdnjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdnjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdnjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
