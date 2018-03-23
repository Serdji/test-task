import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks() {
    return this.http.get('http://localhost:3000/book');
  }

  sendBook(body) {
    return this.http.post('http://localhost:3000/book', body);
  }

}
