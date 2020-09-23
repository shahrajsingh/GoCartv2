import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mimeType } from './mime-type.validator';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  imagePreview: string;
  isLoading: boolean = false;
  categories: string[] = ['Electronics', 'Education', 'Home Decor'];
  questions: string[] = [
    'What was you childhood name?',
    'What was the name of your first pet?',
    'What was the name of city you were born in?',
  ];
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      ProductName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      Category: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      Discription: new FormControl(null, { validators: [Validators.required] }),
      Price: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  onCreateProduct() {}
}
