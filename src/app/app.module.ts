import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDataComponent } from './request-data/request-data.component';
import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
      RequestListComponent,
      RequestDataComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
