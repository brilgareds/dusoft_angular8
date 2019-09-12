import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ModalComponent } from './components/modal/modal.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { TabModule } from 'angular-tabs-component';
import { DocumentosGeneradosComponent } from './components/documentosBodega/documentos-generados/documentos-generados.component';
import { AjusteCostoComponent } from './components/documentosBodega/ajuste-costo/ajuste-costo.component';
import { AjustarPrecioComponent } from './components/documentosBodega/ajustar-precio/ajustar-precio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    DocumentosGeneradosComponent,
    AjusteCostoComponent,
    AjustarPrecioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    StorageServiceModule,
    TabModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AjusteCostoComponent]
})
export class AppModule { }
