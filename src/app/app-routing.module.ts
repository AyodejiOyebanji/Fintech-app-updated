import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTransferComponent } from './child-transfer/child-transfer.component';
import { CongratComponent } from './congrat/congrat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { PickComponent } from './pick/pick.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SuccessfulComponent } from './successful/successful.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path:"", component:LandingPageComponent},
  {path:"signup" ,component:SignUpComponent},
  {path:"pick", component:PickComponent}, 
  {path: "login", component:LogInComponent},
  {path: "congrat", component:CongratComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "history", component:HistoryComponent},
  {path: "transfer", component:TransferComponent},
  {path:"definition", component:ChildTransferComponent},
  {path:"successful", component:SuccessfulComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
