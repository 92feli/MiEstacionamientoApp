import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroDuenioPage } from './registro-duenio.page';

describe('RegistroDuenioPage', () => {
  let component: RegistroDuenioPage;
  let fixture: ComponentFixture<RegistroDuenioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroDuenioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
