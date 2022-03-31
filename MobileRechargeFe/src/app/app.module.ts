import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
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
import { PostPaid } from './entities/postpaid.entity';
import { PostPaidService } from './services/postpaid.service';
import { MenuAccountComponent } from './components/menuaccount/menuaccount.component';
import { SuccessfulFeedbackComponent } from './components/feedback/successfulfeedback.component';
import { FeedbackService } from './services/feedback.service';

import { MatButtonModule } from '@angular/material/button';
import { AdminService } from './services/admin.service';
import { DefaultModule } from './admin/layouts/default/default.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

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
    CodeConfirmComponent,
    PostPaidComponent,
    MenuAccountComponent,
    SuccessfulFeedbackComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    MatButtonModule,
    DefaultModule,
    RouterModule,
    CalendarModule
  ],
  providers: [
    AccountService,
    RechargeService,
    PostPaidService,
    FeedbackService,
    AdminService
  ],  

  bootstrap: [AppComponent],
})
export class AppModule {}
