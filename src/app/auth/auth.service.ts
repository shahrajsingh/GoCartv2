import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Authinticated: boolean = false;
  AuthListenerSub = new Subject();
  constructor() {}
  Login(username: string, password: string) {
    this.Authinticated = true;
    this.AuthListenerSub.next(true);
  }
  Signup() {}
  AuthListener() {
    return this.AuthListenerSub.asObservable();
  }
}
