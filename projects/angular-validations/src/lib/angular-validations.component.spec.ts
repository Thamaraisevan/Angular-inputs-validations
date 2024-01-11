import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularValidationsComponent } from './angular-validations.component';

describe('AngularValidationsComponent', () => {
  let component: AngularValidationsComponent;
  let fixture: ComponentFixture<AngularValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularValidationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
