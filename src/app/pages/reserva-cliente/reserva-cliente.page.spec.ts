import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaClientePage } from './reserva-cliente.page';

describe('ReservaClientePage', () => {
  let component: ReservaClientePage;
  let fixture: ComponentFixture<ReservaClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
