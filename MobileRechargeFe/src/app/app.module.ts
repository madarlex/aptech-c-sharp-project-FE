import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';
import { PrepaidComponent } from './components/prepaid/prepaid.component';
import { PostPaidComponent } from './components/postpaid/postpaid.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LoginComponent } from './components/account/login.component';
import { RegisterComponent } from './components/account/register.component';
import { PayComponent } from './components/pay/pay.component';
import { EditComponent } from './components/account/edit.component';
import { AccountService } from './services/account.service';
import { ActiveComponent } from './components/account/active.component';
import { SuccessComponent } from './components/account/success.component';
import { ForgotComponent } from './components/account/forgot.component';
import { ChangePassComponent } from './components/account/changepass.component';
import { RechargeService } from './services/recharge.service';
import { CodeConfirmComponent } from './components/codeConfirm/codeConfirm.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    PrepaidComponent,
    PostPaidComponent,
    AboutUsComponent,
    ContactComponent,
    FeedbackComponent,
    SitemapComponent,
    LoginComponent,
    RegisterComponent,
    PayComponent,
    EditComponent,
    ActiveComponent,
    SuccessComponent,
    ForgotComponent,
    ChangePassComponent,
    CodeConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [
    AccountService
  ],

  providers: [
    RechargeService
  ],

  bootstrap: [MainComponent]
})
export class AppModule { }
