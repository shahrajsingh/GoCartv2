import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { SnackbarService } from 'src/app/snackbar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  imagePreview: string = 'https://picsum.photos/200?grayscale';

  file: File;
  constructor(
    private authService: AuthService,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {}
  Signup(form: NgForm) {
    if (form.invalid) {
      this.snackBarService.openSnackBar('Please fill the entire form');
      return;
    } else {
      let FirstName: string = this.capitalize(form.value.FirstName);
      let LastName: string = this.capitalize(form.value.LastName);
      if (FirstName.length < 2 || LastName.length < 2) {
        this.snackBarService.openSnackBar('Name must be 2 characters long');
        return;
      }
      let Email: string = form.value.Email;
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          Email
        )
      ) {
        this.snackBarService.openSnackBar('Enter a valid Email');
        return;
      }
      let Password: string = form.value.Password;
      if (!/^[a-zA-Z0-9]*$/.test(Password)) {
        this.snackBarService.openSnackBar(
          'Password should contain alphabets and numbers'
        );
        return;
      } else if (Password.length < 8) {
        this.snackBarService.openSnackBar('Password must be 8 chracters long');
        return;
      } else if (!(Password === form.value.Cpass)) {
        this.snackBarService.openSnackBar('Passwords does not match');
        return;
      }
      let DoB: number = form.value.DoB;
      let _id: string = null;
      let Image;
      if (this.file != null || this.file != undefined) {
        Image = this.file;
      } else {
        Image = this.imagePreview;
      }
      let Gender: string = this.capitalize(form.value.Gender);
      if (Gender == undefined || Gender == null) {
        this.snackBarService.openSnackBar('Please select a Gender');
        return;
      }
      let Address: string = form.value.Address;
      if (Address.length < 8) {
        this.snackBarService.openSnackBar('enter a valid addresss');
        return;
      }
      const SignUpData: User = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        DoB: DoB,
        _id: _id,
        Image: Image,
        Gender: Gender,
        Address: Address,
      };
      console.log(SignUpData);
      this.authService.Signup(SignUpData);
    }
  }
  onImagePicked(event: Event) {
    this.file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      if (this.imagePreview.charAt(5) != 'i') {
        this.snackBarService.openSnackBar(
          'Only .jpg, .jpeg, .png file types supported '
        );
      }
    };
    reader.readAsDataURL(this.file);
  }

  capitalize(str: string) {
    let res = str[0].toUpperCase();
    for (let a = 1; a < str.length; a++) {
      res += str[a].toLowerCase();
    }
    return res;
  }
}
