import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RequestDataComponent } from './request-data/request-data.component';
import { MainService } from './main.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { NgArrayPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    RequestDataComponent
   ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgArrayPipesModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
