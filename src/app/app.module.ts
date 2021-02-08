import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SendfreelinkComponent } from './sendfreelink/sendfreelink.component';
import { TeamComponent } from './team/team.component';
import { IncomeComponent } from './income/income.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ReferalincomeComponent } from './referalincome/referalincome.component';
import { BonousincomeComponent } from './bonousincome/bonousincome.component';
import { RewardsclubComponent } from './rewardsclub/rewardsclub.component';
import { LeadershipclubComponent } from './leadershipclub/leadershipclub.component';
import { MydirectComponent } from './mydirect/mydirect.component';
import { MyteamComponent } from './myteam/myteam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    ActiveAccountComponent,
    ContactUsComponent,
    SendfreelinkComponent,
    TeamComponent,
    IncomeComponent,
    PaymentHistoryComponent,
    ReferalincomeComponent,
    BonousincomeComponent,
    RewardsclubComponent,
    LeadershipclubComponent,
    MydirectComponent,
    MyteamComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
