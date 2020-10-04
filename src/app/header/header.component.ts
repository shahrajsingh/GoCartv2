import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from '../auth/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private _snackBar: MatSnackBar, private dialog: DialogService) {}

  ngOnInit(): void {}
  openSnackBar() {
    this._snackBar.open('Please Login!', '', {
      duration: 700,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  openDialog(): void {
    this.dialog.openDialog();
  }
}
