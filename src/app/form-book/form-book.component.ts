import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { timer } from 'rxjs/observable/timer';

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
  public year: any[] = [/\d/, /\d/, /\d/, /\d/, ];
  public formOk: boolean = false;
  private bookId: number;

  constructor(
    private fd: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.route.queryParams.subscribe((params) => this.bookId = params.id);
    this.formBook = this.fd.group({
      title: ['', [ Validators.required, Validators.maxLength(30) ]],
      name: ['', [Validators.required, Validators.maxLength(20) ]],
      surname: ['', [Validators.required, Validators.maxLength(20) ]],
      pages: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10000), Validators.pattern(/[0-9]/)] ],
      edition: ['', [Validators.maxLength(30) ]],
      publication: ['', [Validators.pattern(/[0-9]/), publicationValidator] ],
      circulation: ['', [Validators.pattern(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](18|20)\d\d/)]],
      isbn: ['', [Validators.required, Validators.pattern(/[0-9]/)] ],
    });
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe((value) => this.formBook.patchValue(value));
    }
  }

  addItemBook(fomBookValue) {
    this.bookService.postBook(fomBookValue).subscribe(() => {
      this.formOk = true;
      timer(1000).subscribe(() => { this.router.navigate(['/']) });
    });
  }

  removeItemBook(id, fomBookValue) {
    this.bookService.putBook(id, fomBookValue).subscribe(() => {
      this.formOk = true;
      timer(1000).subscribe(() => { this.router.navigate(['/']) });
    });
  }

  sendForm(): void {
    for (const inner of Object.keys(this.formBook.controls)) {
      this.formBook.get(inner).markAsTouched();
    }
    if (this.formBook.valid) {
      if (this.bookId) {
        this.removeItemBook(this.bookId, this.formBook.value);
      } else {
        this.addItemBook(this.formBook.value);
      }
    }
  }

  goBack(): void{
    this.router.navigate(['/']);
  }

}
