import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Ibook } from '../interface/ibook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {

  books: Ibook[] = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.initBook();
  }

  initBook() {
    this.bookService.getBooks().subscribe((value: Ibook[]) => this.books = value);
  }

}
