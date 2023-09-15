import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingStateService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  startLoading() {
    this.loadingSubject.next(true);
  }

  stopLoading() {
    this.loadingSubject.next(false);
  }

  isLoading(): boolean{
    return this.loadingSubject.value;
  }
}
