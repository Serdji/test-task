import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Ibook } from '../interface/ibook';
import { timer } from 'rxjs/observable/timer';

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
    this.loadingSorting();
  }

  initBook() {
    this.bookService.getBooks().subscribe((value: Ibook[]) => this.books = value);
  }

  sorting(property) {
    localStorage.setItem('sorting', property);
    timer(100).subscribe(() => this.books.sort(this.dynamicSort(property)));
  }

  private dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return (a, b) => {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

  private loadingSorting() {
    if (localStorage.getItem('sorting')) {
      this.sorting(localStorage.getItem('sorting'));
    }
  }
}
