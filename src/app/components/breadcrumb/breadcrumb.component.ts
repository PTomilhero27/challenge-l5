import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface BreadCrumb {
  title: string,
  route?: string,
  tipo?: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() breadCrumb: BreadCrumb[]  = []

  constructor(private router: Router) {}

  ngOnInit() {}

  route(bread: BreadCrumb) {
    if(!bread.route) return
    if(bread.tipo) {
      this.router.navigate([bread.route], { queryParams: {type: bread.tipo}});
    } else this.router.navigate([bread.route])
  }

}
