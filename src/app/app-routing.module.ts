import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: 'home', title:'Home', component: HomeComponent },
  { 
    path: 'film/:id', 
    title:'Film Details',
    loadChildren: ()=> import('./pages/film-details/film-details.module').then(m => m.FilmDetailsModule)
  },
  { 
    path: 'search/:text', 
    title:'Search Film', 
    loadChildren: ()=> import('./pages/search/search.module').then(m => m.SearchModule) 
  },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { 
    path: '**', 
    component: NotFoundComponent
    //loadComponent: ()=> import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

