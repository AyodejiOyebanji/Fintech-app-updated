import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { PickComponent } from './pick/pick.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CheckService } from './check.service';
import { CongratComponent } from './congrat/congrat.component';
import { TransferComponent } from './transfer/transfer.component';
import { ChildTransferComponent } from './child-transfer/child-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LogInComponent,
    PickComponent,
    DashboardComponent,
    CongratComponent,
    TransferComponent,
    ChildTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
