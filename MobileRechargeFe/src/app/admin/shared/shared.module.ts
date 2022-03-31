import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  AccountComponent,
  DialogContentExampleDialog,
} from './widgets/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogAccountDetailComponent } from './widgets/dialog-account-detail/dialog-account-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { RechargeComponentComponent } from './widgets/recharge-component/recharge-component.component';
import { CreateRechagreComponent } from './widgets/recharge-component/create-rechagre/create-rechagre.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { AboutusComponent } from './widgets/aboutus/aboutus.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import { PostpaidComponent } from './widgets/postpaid/postpaid.component';
import { CreatePostpaidComponent } from './widgets/postpaid/create-postpaid/create-postpaid.component';
import { FeedbackComponent } from './widgets/feedback/feedback.component';
import { ViewFeedbackComponent } from './widgets/feedback/view-feedback/view-feedback.component';
import { ViewAccountRechargeHistoryComponent } from './widgets/account/view-recharge-history/view-recharge-history.component';
import { ViewRechargeHistoryComponent } from './widgets/recharge-component/view-recharge-history/view-recharge-history.component';
import { ViewAccountPostpaidHistoryComponent } from './widgets/account/view-postpaid-history/view-postpaid-history.component';
import { RechargeHistoryComponent } from './widgets/recharge-history/recharge-history.component';
import { PostpaidHistoryComponent } from './widgets/postpaid-history/postpaid-history.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    AccountComponent,
    DialogAccountDetailComponent,
    DialogContentExampleDialog,
    RechargeComponentComponent,
    CreateRechagreComponent,
    AboutusComponent,
    PostpaidComponent,
    CreatePostpaidComponent,
    FeedbackComponent,
    ViewFeedbackComponent,
    ViewAccountRechargeHistoryComponent,
    ViewRechargeHistoryComponent,
    ViewAccountPostpaidHistoryComponent,
    RechargeHistoryComponent,
    PostpaidHistoryComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTreeModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    AccountComponent,
    DialogAccountDetailComponent,
    DialogContentExampleDialog,
    RechargeComponentComponent,
    CreateRechagreComponent,
    AboutusComponent,
    PostpaidComponent,
    CreatePostpaidComponent,
    FeedbackComponent,
    ViewFeedbackComponent,
    ViewAccountRechargeHistoryComponent,
    ViewRechargeHistoryComponent,
    ViewAccountPostpaidHistoryComponent,
    RechargeHistoryComponent,
    PostpaidHistoryComponent,
  ],
})
export class SharedModule {}
