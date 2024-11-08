import { Component } from '@angular/core';

@Component({
  selector: 'app-cyber-report',
  templateUrl: './cyber-report.page.html',
  styleUrls: ['./cyber-report.page.scss'],
})
export class CyberReportPage {
  reports = [
    {
      title: 'Phishing Attack Trends',
      date: '2024-10-01',
      description: 'An overview of the latest phishing attacks and their impact on businesses.',
    },
    {
      title: 'Ransomware Threats',
      date: '2024-10-05',
      description: 'Understanding the rise of ransomware and how to protect your data.',
    },
    {
      title: 'Data Breaches in 2024',
      date: '2024-10-10',
      description: 'A report on major data breaches and lessons learned from them.',
    },
    // Add more reports as needed
  ];
}
