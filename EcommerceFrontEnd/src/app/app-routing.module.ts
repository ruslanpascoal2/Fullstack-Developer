import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NovoPedidoComponent } from './components/pedido/novo-pedido/novo-pedido.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultaPedidoComponent } from './components/pedido/consulta-pedido/consulta-pedido.component';
import { PedidoConcluidoComponent } from './components/pedido/pedido-concluido/pedido-concluido.component';
import { CheckoutGuard } from './guards/checkout.guard';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pedido/novoPedido', component: NovoPedidoComponent },
  { path: 'pedido/consultarPedidos', component: ConsultaPedidoComponent },
  { path: 'pedido/pedidoConcluido', component: PedidoConcluidoComponent, canActivate: [CheckoutGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
