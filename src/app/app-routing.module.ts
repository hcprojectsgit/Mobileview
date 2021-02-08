import { LeadershipclubComponent } from './leadershipclub/leadershipclub.component';
import { MyteamComponent } from './myteam/myteam.component';
import { MydirectComponent } from './mydirect/mydirect.component';
import { RewardsclubComponent } from './rewardsclub/rewardsclub.component';
import { BonousincomeComponent } from './bonousincome/bonousincome.component';
import { ReferalincomeComponent } from './referalincome/referalincome.component';
import { TeamComponent } from './team/team.component';
import { SendfreelinkComponent } from './sendfreelink/sendfreelink.component';
import { IncomeComponent } from './income/income.component';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent,
  },
{
  path: "login",
  component: LoginComponent,
},

{
  path:"register",
  component: RegisterComponent,
},
{
  path:"dashboard",
  component: DashboardComponent,
},

{
  path:"sendfreelink",
  component: SendfreelinkComponent,
},

{
  path:"active-account",
  component: ActiveAccountComponent,
},

{
  path: "team",
  component: TeamComponent,
},

{
  path: "mydirect",
  component: MydirectComponent,
},

{
  path: "myteam",
  component: MyteamComponent,
},

{
  path:"income",
  component: IncomeComponent,
},

{
  path: "referalincome",
  component: ReferalincomeComponent,
},

{
  path: "bonousincome",
  component: BonousincomeComponent,
},

{
  path: "rewardsclub",
  component: RewardsclubComponent,
},

{
  path: "leadershipclub",
  component: LeadershipclubComponent,
},


{
  path:"payment-history",
  component: PaymentHistoryComponent,
},


{
  path:"contact-us",
  component: ContactUsComponent,
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
