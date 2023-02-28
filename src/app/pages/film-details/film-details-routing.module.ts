import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FilmDetailsComponent } from './film-details.component';

const routes: Routes = [{ path: '', component: FilmDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmDetailsRoutingModule {}
