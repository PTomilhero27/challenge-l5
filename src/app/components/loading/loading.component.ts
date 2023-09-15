import { Component } from '@angular/core';
import { LoadingStateService } from 'src/app/services/loading-state.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  constructor(public loadingStateService: LoadingStateService) {}

}
