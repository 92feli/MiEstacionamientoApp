import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuenioHomePage } from './duenio-home.page';

describe('DuenioHomePage', () => {
  let component: DuenioHomePage;
  let fixture: ComponentFixture<DuenioHomePage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(DuenioHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
