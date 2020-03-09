import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';


import { NovoPedidoComponent } from './components/pedido/novo-pedido/novo-pedido.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultaPedidoComponent } from './components/pedido/consulta-pedido/consulta-pedido.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FilterCustomerPipe } from './pipes/filter-customer.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { PedidoConcluidoComponent } from './components/pedido/pedido-concluido/pedido-concluido.component';



@NgModule({
  declarations: [
    AppComponent,
    NovoPedidoComponent,
    HomeComponent,
    ConsultaPedidoComponent,
    NavBarComponent,
    FilterCustomerPipe,
    FilterProductPipe,
    PedidoConcluidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
