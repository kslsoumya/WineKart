import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrderModule } from 'ngx-order-pipe';

import { WineListComponent } from './wine-list/wine-list.component';


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
  declarations: [WineListComponent]
})
export class WineModule { }
