import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { publicationValidator } from '../validatot/publicationValidator';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.styl']
})
export class FormBookComponent implements OnInit {

  public formBook: FormGroup;
  public isbn: any[] = [/\d/, /\d/, /\d/, '-', /\d/, '-', /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
  public date: any[] = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, ];
  public formOk: boolean = false;

  constructor(
    private fd: FormBuilder,
    private router: Router,
    private bookService: BookService
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
      publication: ['', [ Validators.pattern(/[0-9]/), Validators.minLength(4), publicationValidator] ],
      circulation: ['', [ Validators.pattern(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](18|00)\d\d/)] ],
      isbn: ['', [ Validators.pattern(/[0-9]/)] ],
    });
  }

  sendForm(): void {
    for (const inner of Object.keys(this.formBook.controls)) {
      this.formBook.get(inner).markAsTouched();
    }
    if (this.formBook.valid) {
      console.log(this.formBook.value);
      this.bookService.sendBook(this.formBook.value).subscribe(() => {
        this.formOk = true;
        setTimeout(() => { this.router.navigate(['/']) }, 1000);
      });
    }
  }

  goBack(): void{
    this.router.navigate(['/']);
  }

}
