import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../../modules/dashboard.service';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountService } from '../../services/account.service';
import { NotificationService } from '../../services/notification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RechargeComponent } from '../../modules/recharge/recharge.component';
import { RechargeService } from '../../services/recharge.service';
import { RechargeTypeService } from '../../services/recharge-type.service';
import { PagesComponent } from '../../modules/pages/pages.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsService } from '../../services/aboutus.service';
import { PostpaidService } from '../../services/postpaid.service';
import { FeedbackService } from '../../services/feedback.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    RechargeComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
  ],
  providers: [
    DashboardService,
    AccountService,
    NotificationService,
    RechargeService,
    RechargeTypeService,
    AboutUsService,
    PostpaidService,
    FeedbackService,
  ],
})
export class DefaultModule {}
