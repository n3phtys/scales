/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormulacardComponent } from './formulacard.component';

describe('FormulacardComponent', () => {
  let component: FormulacardComponent;
  let fixture: ComponentFixture<FormulacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
