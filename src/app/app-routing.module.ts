import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authguard.guard';
import { NotFoundComponent } from './guards/not-found/not-found.component';
import { PrincipalComponent } from './modules/principal/principal.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }
  , { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  , {
    path: '', children: [
      {
        path: '', component: PrincipalComponent, canActivate: [AuthGuard], children: [
          { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
          { path: 'conta', loadChildren: () => import('./modules/conta/conta.module').then(m => m.ContaModule) }
          // outras rotas para componentes com sidebar e navbar
        ]
      }
    ]
  }
  , { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
  , { path: 'not-found', component: NotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
