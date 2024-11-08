import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-fraud',
  templateUrl: './bank-fraud.page.html',
  styleUrls: ['./bank-fraud.page.scss'],
})
export class BankFraudPage {
  fraudTypes = [
    {
      title: 'Phishing Scams',
      description: 'Fraudsters impersonate legitimate institutions via emails or texts to steal personal information.',
      link: 'https://www.fbi.gov/scams-and-safety/common-scams-and-crimes/phishing-scams',
    },
    {
      title: 'Identity Theft',
      description: 'When someone uses your personal information without permission to commit fraud.',
      link: 'https://www.identitytheft.gov/',
    },
    {
      title: 'Advance Fee Fraud',
      description: 'Victims are promised a large sum of money in exchange for an upfront payment.',
      link: 'https://www.consumer.ftc.gov/articles/0215-advance-fee-loans',
    },
    {
      title: 'Credit Card Fraud',
      description: 'Unauthorized use of someone’s credit card information to make purchases.',
      link: 'https://www.consumerfinance.gov/ask-cfpb/what-is-credit-card-fraud-en-1915/',
    },
    // Add more fraud types as needed
  ];

  viewMore(link: string) {
    window.open(link, '_blank');
  }
}
