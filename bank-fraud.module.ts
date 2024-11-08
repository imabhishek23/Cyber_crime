import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankFraudPageRoutingModule } from './bank-fraud-routing.module';

import { BankFraudPage } from './bank-fraud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankFraudPageRoutingModule
  ],
  declarations: [BankFraudPage]
})
export class BankFraudPageModule {}
