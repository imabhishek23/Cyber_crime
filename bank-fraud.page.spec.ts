import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankFraudPage } from './bank-fraud.page';

describe('BankFraudPage', () => {
  let component: BankFraudPage;
  let fixture: ComponentFixture<BankFraudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankFraudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
