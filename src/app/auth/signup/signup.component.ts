import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  imagePreview: string = 'https://picsum.photos/200?grayscale';
  file: File;
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  Signup(form: NgForm) {}
  onImagePicked(event: Event) {
    this.file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      if (this.imagePreview.charAt(5) != 'i') {
        this.snackBar.open('Only .jpeg, .png file types supported ', 'Ok', {
          duration: 1000,
        });
      }
    };
    reader.readAsDataURL(this.file);
  }
}
