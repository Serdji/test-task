import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks() {
    return this.http.get('https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book');
  }

  sendBook(body) {
    return this.http.post('https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book', body);
  }

}
