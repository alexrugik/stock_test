import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private token = 'A29C42XC80L61GPN';

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
