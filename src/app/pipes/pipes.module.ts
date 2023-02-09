import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { FlagPipe } from './flag.pipe';



@NgModule({
  declarations: [
    PosterPipe,
    FlagPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PosterPipe,
    FlagPipe
  ]
})
export class PipesModule { }
