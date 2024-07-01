import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPaswordPage } from './reset-pasword.page';

describe('ResetPaswordPage', () => {
  let component: ResetPaswordPage;
  let fixture: ComponentFixture<ResetPaswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPaswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
