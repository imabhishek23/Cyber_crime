import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CyberReportPage } from './cyber-report.page';

describe('CyberReportPage', () => {
  let component: CyberReportPage;
  let fixture: ComponentFixture<CyberReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
