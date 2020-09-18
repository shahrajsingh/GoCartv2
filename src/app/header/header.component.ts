import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  openSnackBar() {
    this._snackBar.open('Please Login!', '', {
      duration: 700,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
