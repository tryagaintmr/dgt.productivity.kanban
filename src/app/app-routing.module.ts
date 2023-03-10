import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from './shared/pages/page-error/page-error.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kanban',
    pathMatch: 'full'
  },
  {
    path: 'kanban',
    loadChildren: () => import('./kanban/kanban.module').then( m => m.KanbanPageModule)
  },
  {
    path: 'error',
    component: PageErrorComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, enableTracing: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
