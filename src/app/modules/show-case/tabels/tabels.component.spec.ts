/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabelsComponent } from './tabels.component';

describe('TabelsComponent', () => {
  let component: TabelsComponent;
  let fixture: ComponentFixture<TabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
