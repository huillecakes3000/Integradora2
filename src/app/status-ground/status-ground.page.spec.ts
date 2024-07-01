import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusGroundPage } from './status-ground.page';

describe('StatusGroundPage', () => {
  let component: StatusGroundPage;
  let fixture: ComponentFixture<StatusGroundPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
