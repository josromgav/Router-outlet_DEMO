import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { InicioComponent } from './inicio/inicio.component';
import { FacturasComponent } from './facturas/facturas.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { FacturaComponent } from './facturas/factura/factura.component';
import { ProductoComponent } from './facturas/factura/producto/producto.component';

const routes: Routes = [
  { path: '', component: LoginPanelComponent },
  { path: 'inicio', component: InicioComponent , children:
      [{path: 'facturas', component: FacturasComponent, children:
          [{ path: ':facturaid', component: FacturaComponent, children:
              [{path: ':productoid', component: ProductoComponent}
            ]}
        ]},
      {path: 'presupuestos', component: PresupuestosComponent},
      {path: 'ayuda', component: AyudaComponent}]
  },
  { path:'**', component: LoginPanelComponent}
  // { path: 'nuevaMaquina', component: NuevaMaquinaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    InicioComponent,
    FacturasComponent,
    PresupuestosComponent,
    AyudaComponent,
    FacturaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
