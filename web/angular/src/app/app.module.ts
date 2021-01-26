import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavPillsComponent } from './components/nav-pills/nav-pills.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// Auth
import { AuthSignInComponent } from './pages/auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './pages/auth-sign-up/auth-sign-up.component';
// Docs
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
// Cards
import { CardAccountOptionsComponent } from './components/card-account-options/card-account-options.component';
import { CardAddressesComponent } from './components/card-addresses/card-addresses.component';
import { CardBalanceComponent } from './components/card-balance/card-balance.component';
import { CardEmailsComponent } from './components/card-emails/card-emails.component';
import { CardPhoneNumbersComponent } from './components/card-phone-numbers/card-phone-numbers.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { CardTransferPayComponent } from './components/card-transfer-pay/card-transfer-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavPillsComponent,
    FooterComponent,
    // Auth
    AuthSignInComponent,
    AuthSignUpComponent,
    // Docs
    DocsAboutComponent,
    DocsHomeComponent,
    AppsSummaryComponent,
    AppsTransactionsComponent,
    AppsTransferPayComponent,
    AppsTransferRequestComponent,
    AppsWalletComponent,
    AppsSettingsComponent,
    AppsTransferContactsComponent,
    AppsTransferComponent,
    // Cards
    CardBalanceComponent,
    CardProfileComponent,
    CardAddressesComponent,
    CardEmailsComponent,
    CardPhoneNumbersComponent,
    CardAccountOptionsComponent,
    CardTransferPayComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
