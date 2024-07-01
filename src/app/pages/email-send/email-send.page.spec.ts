import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailSendPage } from './email-send.page';

describe('EmailSendPage', () => {
  let component: EmailSendPage;
  let fixture: ComponentFixture<EmailSendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
