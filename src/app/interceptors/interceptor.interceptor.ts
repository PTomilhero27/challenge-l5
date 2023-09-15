import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingStateService } from '../services/loading-state.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private loadingStateService: LoadingStateService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingStateService.startLoading();
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingStateService.stopLoading();
      })
    );
  }
}
