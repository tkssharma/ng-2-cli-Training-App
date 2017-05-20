/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavContainersComponent } from './nav-containers.component';

describe('NavContainersComponent', () => {
  let component: NavContainersComponent;
  let fixture: ComponentFixture<NavContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
