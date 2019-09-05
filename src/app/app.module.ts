import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ModalModule } from './components/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    ModalModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
