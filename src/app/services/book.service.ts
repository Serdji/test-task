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

  getBook(id) {
    return this.http.get(`http://localhost:3000/book/${id}`);
  }

  sendBook(body) {
    return this.http.post('https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book', body);
  }

  deleteBook(id) {
    return this.http.delete(`http://localhost:3000/book/${id}`)
  }

}
