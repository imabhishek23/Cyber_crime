import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyberReportPage } from './cyber-report.page';

const routes: Routes = [
  {
    path: '',
    component: CyberReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberReportPageRoutingModule {}
