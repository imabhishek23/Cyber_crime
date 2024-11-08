import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyberReportPageRoutingModule } from './cyber-report-routing.module';

import { CyberReportPage } from './cyber-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyberReportPageRoutingModule
  ],
  declarations: [CyberReportPage]
})
export class CyberReportPageModule {}
