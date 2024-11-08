import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'report-incident',
    loadChildren: () => import('./report-incident/report-incident.module').then( m => m.ReportIncidentPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'suspect',
    loadChildren: () => import('./suspect/suspect.module').then( m => m.SuspectPageModule)
  },
  {
    path: 'cyber-report',
    loadChildren: () => import('./cyber-report/cyber-report.module').then( m => m.CyberReportPageModule)
  },
  {
    path: 'learn-cyber-security',
    loadChildren: () => import('./learn-cyber-security/learn-cyber-security.module').then( m => m.LearnCyberSecurityPageModule)
  },
  {
    path: 'bank-fraud',
    loadChildren: () => import('./bank-fraud/bank-fraud.module').then( m => m.BankFraudPageModule)
  },
  {
    path: 'online-scams',
    loadChildren: () => import('./online-scams/online-scams.module').then( m => m.OnlineScamsPageModule)
  },
  {
    path: 'emergency',
    loadChildren: () => import('./emergency/emergency.module').then( m => m.EmergencyPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  
  {
    path: 'view-user',
    loadChildren: () => import('./view-user/view-user.module').then( m => m.ViewUserPageModule)
  },
  
  
  
  
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
