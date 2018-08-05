import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrderModule } from 'ngx-order-pipe';


import { WineListComponent } from './wine-list/wine-list.component';
import { Notapplicable } from './wine-list/notaplicable';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    OrderModule,
    RouterModule.forChild([
      { path: 'account/:userId', component: WineListComponent}]
    )
  ],
  exports : [
    Notapplicable
  ],
  declarations: [WineListComponent, Notapplicable]
})
export class WineModule { }
