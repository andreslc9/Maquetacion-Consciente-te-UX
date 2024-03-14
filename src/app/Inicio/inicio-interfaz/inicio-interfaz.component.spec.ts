/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InicioInterfazComponent } from './inicio-interfaz.component';

describe('InicioInterfazComponent', () => {
  let component: InicioInterfazComponent;
  let fixture: ComponentFixture<InicioInterfazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioInterfazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
