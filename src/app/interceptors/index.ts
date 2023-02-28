import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader/loader.interceptor';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
];
