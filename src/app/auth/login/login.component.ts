import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.AuthListener().subscribe((result: boolean) => {
      this.isAuthenticated = result;
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
  signup() {
    this.dialogRef.close();
  }
}
