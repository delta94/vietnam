import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AuthSignInComponent } from './pages/auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './pages/auth-sign-up/auth-sign-up.component';

import { DocsHomeComponent } from './pages/docs-home/docs-home.component';
import { DocsAboutComponent } from './pages/docs-about/docs-about.component';

import { AppsSummaryComponent } from './pages/apps-summary/apps-summary.component';
import { AppsTransactionsComponent } from './pages/apps-transactions/apps-transactions.component';
import { AppsTransferComponent } from './pages/apps-transfer/apps-transfer.component';
import { AppsTransferPayComponent } from './pages/apps-transfer-pay/apps-transfer-pay.component';
import { AppsTransferRequestComponent } from './pages/apps-transfer-request/apps-transfer-request.component';
import { AppsTransferContactsComponent } from './pages/apps-transfer-contacts/apps-transfer-contacts.component';
import { AppsWalletComponent } from './pages/apps-wallet/apps-wallet.component';
import { AppsSettingsComponent } from './pages/apps-settings/apps-settings.component';

const routes: Routes = [
  { path: '', component: DocsHomeComponent },
  { path: 'about', component: DocsAboutComponent },
  { path: 'sign-in', component: AuthSignInComponent },
  { path: 'sign-up', component: AuthSignUpComponent },
  { path: 'summary', canActivate: [AuthGuard], component: AppsSummaryComponent },
  { path: 'transactions', canActivate: [AuthGuard], component: AppsTransactionsComponent },
  {
    path: 'transfer',
    canActivate: [AuthGuard],
    component: AppsTransferComponent,
    children: [
      {
        path: 'request',
        canActivate: [AuthGuard],
        component: AppsTransferRequestComponent
      },
      {
        path: 'pay',
        canActivate: [AuthGuard],
        component: AppsTransferPayComponent
      },
      {
        path: 'contacts',
        canActivate: [AuthGuard],
        component: AppsTransferContactsComponent
      },
      {
        path: '**',
        canActivate: [AuthGuard],
        component: AppsTransferRequestComponent
      }
    ]
  },
  { path: 'wallet', canActivate: [AuthGuard], component: AppsWalletComponent },
  { path: 'settings', canActivate: [AuthGuard], component: AppsSettingsComponent },
  { path: '**', component: DocsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
