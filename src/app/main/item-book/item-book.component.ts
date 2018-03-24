import { Component, Input } from '@angular/core';

import { Ibook } from '../../interface/ibook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-book',
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.styl']
})
export class ItemBookComponent {

  @Input() book: Ibook;

  constructor(
    private router: Router
  ) { }

  onOpenBook(id): void {
    this.router.navigate(['card-book'], { queryParams: { id }});
  }
}
