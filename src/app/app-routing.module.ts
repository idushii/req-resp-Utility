import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDataComponent } from './request-data/request-data.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  {path: '', component: RequestListComponent},
  {path: 'request', component: RequestDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
