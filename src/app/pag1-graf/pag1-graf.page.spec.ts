import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pag1GrafPage } from './pag1-graf.page';

describe('Pag1GrafPage', () => {
  let component: Pag1GrafPage;
  let fixture: ComponentFixture<Pag1GrafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag1GrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
