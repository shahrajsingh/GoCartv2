import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean = false;
  mode: string = 'login';
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.AuthListener().subscribe((result: boolean) => {
      this.isAuthenticated = result;
      console.log(this.isAuthenticated);
      if (this.isAuthenticated) {
        this.dialogRef.close();
      } else {
        this.snackBar.open('Incorrect Details', 'ok', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
  Login(Form: NgForm) {
    if (Form.invalid) {
      return;
    } else {
      this.authService.Login(Form.value.username, Form.value.password);
      if (!this.isAuthenticated) {
        Form.resetForm();
      }
    }
  }
  openDialog() {
    this.mode = 'signup';
  }
  changeMode() {
    this.mode = 'login';
  }
}
