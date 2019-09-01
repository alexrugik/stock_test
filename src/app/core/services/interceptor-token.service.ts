import { Injectable } from '@angular/core';
import { TokenService } from '@app/core/services/token.service';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpSentEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorTokenService {
  constructor(private readonly token: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpSentEvent>> {
    const tokenMethods = ['POST', 'PUT', 'DELETE', 'GET'];

    if (tokenMethods.includes(req.method)) {
      req = req.clone({params: req.params.set('apikey', this.token.getToken())});
    }

    return next.handle(req);
  }
}
