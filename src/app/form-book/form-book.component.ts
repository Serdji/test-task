import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.styl']
})
export class FormBookComponent implements OnInit {

  formBook: FormGroup;

  constructor(
    private fd: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formBook = this.fd.group({
      title: ['', [ Validators.required, Validators.maxLength(30) ]],
      name: ['', [Validators.required, Validators.maxLength(20) ]],
      surname: ['', [Validators.required, Validators.maxLength(20) ]],
      pages: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10000), Validators.pattern(/[0-9]/)] ],
      edition: ['', [Validators.maxLength(30) ]],
      publication: ['', [ Validators.pattern(/[0-9]/)] ],
    });
  }

  sendForm(): void {
    for (const inner of Object.keys(this.formBook.controls)) {
      this.formBook.get(inner).markAsTouched();
    }
  }

  goBack(): void{
    this.router.navigate(['/']);
  }

}
