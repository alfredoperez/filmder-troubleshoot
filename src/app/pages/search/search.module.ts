import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [ 
    CommonModule,
    ComponentsModule,
    SearchRoutingModule
  ],
  exports: [],
  providers: [],
})
export class SearchModule {}