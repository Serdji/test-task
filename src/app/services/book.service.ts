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

  getBook(id) {
    return this.http.get(`http://localhost:3000/book/${id}`);
  }

  postBook(body) {
    return this.http.post('http://localhost:3000/book', body);
  }

  putBook(id, body) {
    return this.http.put(`http://localhost:3000/book/${id}`, body);
  }

  deleteBook(id) {
    return this.http.delete(`http://localhost:3000/book/${id}`);
  }

}
