/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GennextComponent } from './gennext.component';

describe('GennextComponent', () => {
  let component: GennextComponent;
  let fixture: ComponentFixture<GennextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GennextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GennextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
