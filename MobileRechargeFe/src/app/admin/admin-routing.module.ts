import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './shared/widgets/feedback/feedback.component';

import { AdminComponent } from './admin.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PagesComponent } from './modules/pages/pages.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RechargeComponent } from './modules/recharge/recharge.component';
import { PostpaidComponent } from './shared/widgets/postpaid/postpaid.component';
import { RechargeHistoryComponent } from './shared/widgets/recharge-history/recharge-history.component';
import { PostpaidHistoryComponent } from './shared/widgets/postpaid-history/postpaid-history.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DefaultComponent,
        children: [
          {
            path: '',
            component: PostsComponent,
          },
          {
            path: 'posts',
            component: PostsComponent,
          },
          {
            path: 'recharges',
            component: RechargeComponent,
          },
          {
            path: 'postpaid',
            component: PostpaidComponent,
          },
          {
            path: 'feedback',
            component: FeedbackComponent,
          },
          {
            path: 'recharge-history',
            component: RechargeHistoryComponent,
          },
          {
            path: 'postpaid-history',
            component: PostpaidHistoryComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
