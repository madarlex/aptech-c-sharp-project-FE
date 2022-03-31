import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { ActiveComponent } from './components/account/active.component';
import { ChangePassComponent } from './components/account/changepass.component';
import { EditComponent } from './components/account/edit.component';
import { ForgotComponent } from './components/account/forgot.component';
import { LoginComponent } from './components/account/login.component';
import { RegisterComponent } from './components/account/register.component';
import { SuccessComponent } from './components/account/success.component';
import { CodeConfirmComponent } from './components/codeConfirm/codeConfirm.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SuccessfulFeedbackComponent } from './components/feedback/successfulfeedback.component';
import { HomeComponent } from './components/home/home.component';
import { PayComponent } from './components/pay/pay.component';
import { PostPaidComponent } from './components/postpaid/postpaid.component';
import { PrepaidComponent } from './components/prepaid/prepaid.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { AdminService } from './services/admin.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'prepaid', component: PrepaidComponent },
  { path: 'postpaid', component: PostPaidComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pay', component: PayComponent },
  { path: 'edit', component: EditComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'changepass', component: ChangePassComponent },
  { path: 'confirm', component: CodeConfirmComponent },
  { path: 'successfulfeedback', component: SuccessfulFeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
