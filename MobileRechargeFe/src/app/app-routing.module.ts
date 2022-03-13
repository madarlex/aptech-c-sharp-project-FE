import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrepaidComponent } from './components/prepaid/prepaid.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'index', component: HomeComponent},
  {path:'prepaid', component: PrepaidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
