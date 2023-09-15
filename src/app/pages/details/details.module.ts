import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';


@NgModule({
  declarations: [
    DetailsComponent,
    AdditionalInfoComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    BreadcrumbModule,
  ]
})
export class DetailsModule { }
