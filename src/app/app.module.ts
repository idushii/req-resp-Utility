import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RequestDataComponent} from './request-data/request-data.component';
import {MainService} from './main.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AppRoutingModule} from './app-routing.module';
import {RequestListComponent} from './request-list/request-list.component';
import { RequestHeadersComponent } from './request-headers/request-headers.component';
import { PrettyPrintPipe } from './pretty-print.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RequestDataComponent,
    RequestListComponent,
    RequestHeadersComponent,
    PrettyPrintPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
