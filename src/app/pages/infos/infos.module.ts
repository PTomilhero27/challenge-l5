import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    InfosComponent
  ],
  imports: [
    CommonModule,
    InfosRoutingModule,
    BreadcrumbModule,
    MatIconModule,
    FormsModule
  ]
})
export class InfosModule { }
