import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankFraudPage } from './bank-fraud.page';

const routes: Routes = [
  {
    path: '',
    component: BankFraudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankFraudPageRoutingModule {}
