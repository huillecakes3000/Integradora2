import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddgroundPage } from './addground.page';

describe('AddgroundPage', () => {
  let component: AddgroundPage;
  let fixture: ComponentFixture<AddgroundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
