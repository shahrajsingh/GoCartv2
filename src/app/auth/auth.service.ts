import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Authinticated: boolean = false;
  AuthListenerSub = new Subject();
  constructor(private dialog: MatDialog) {}
  Login(username: string, password: string) {
    this.Authinticated = false;
    this.AuthListenerSub.next(false);
  }
  Signup() {}
  AuthListener() {
    return this.AuthListenerSub.asObservable();
  }
}
