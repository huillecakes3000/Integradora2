import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorfilePage } from './porfile.page';

describe('PorfilePage', () => {
  let component: PorfilePage;
  let fixture: ComponentFixture<PorfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
