import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { LoaderService } from 'src/app/services/loader.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.show();

    return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
  }
}
