import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
  children: [
    {
      path: 'inicio',
      loadChildren: () => import('./../../page/inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'balance',
      loadChildren: () => import('./../../page/balance/balance.module').then( m => m.BalancePageModule)
    },
    {
      path: 'progreso',
      loadChildren: () => import('./../../page/progreso/progreso.module').then( m => m.ProgresoPageModule)
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
