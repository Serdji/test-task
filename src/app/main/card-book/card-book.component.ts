import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { timer } from 'rxjs/observable/timer';

import { BookService } from '../../services/book.service';
import { Ibook } from '../../interface/ibook';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.styl']
})
export class CardBookComponent implements OnInit {

  private bookId: number;
  public book: Ibook;
  public deleteOk: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initBook();

  }

  initBook() {
    this.route.params.subscribe((params) => this.bookId = params.id);
    this.bookService.getBook(this.bookId).subscribe((book: Ibook) => this.book = book);
  }

  goBack(): void{
    this.router.navigate(['/']);
  }

  delete(id): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.deleteOk = true;
      timer(1000).subscribe(() => this.router.navigate(['/']));
    });
  }

}
