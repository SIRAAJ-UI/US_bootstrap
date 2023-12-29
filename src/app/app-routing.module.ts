import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

const routes: Routes = [
   // { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { 
      path: '', 
      loadChildren: () => import('./pages/pages.module').then( m =>  m.PagesModule)
    },
  //  { path: '', loadChildren: 'app/pages/pages.module#PagesModule' },
  //  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
   // { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
   { path: '**', component: NotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
