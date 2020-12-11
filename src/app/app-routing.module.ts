import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RequestDataComponent } from './request-data/request-data.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'request/{id}', component: RequestDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
