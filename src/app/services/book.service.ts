import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks() {
    return this.http.get('https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book/');
  }

  getBook(id) {
    return this.http.get(`https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book/${id}`);
  }

  postBook(body) {
    return this.http.post('https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book/', body);
  }

  putBook(id, body) {
    return this.http.put(`https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book/${id}`, body);
  }

  deleteBook(id) {
    return this.http.delete(`https://my-json-server.typicode.com/Serdji/test-task/blob/demo/book/${id}`);
  }

}
