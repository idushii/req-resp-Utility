import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestDataComponent} from './request-data/request-data.component';
import {RequestListComponent} from './request-list/request-list.component';
import {DevicesComponent} from './devices/devices.component';
import {SessionsComponent} from './sessions/sessions.component';

const routes: Routes = [
  {path: '', component: DevicesComponent},
  {path: 'device/:device', component: RequestListComponent},
  {path: 'device/:device/request/:id', component: RequestDataComponent},
  {path: 'device/:device/session', component: SessionsComponent},
  {path: 'device/:device/session/:sessionId', component: RequestListComponent},
  {path: 'device/:device/session/:sessionId/request/:id', component: RequestDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
