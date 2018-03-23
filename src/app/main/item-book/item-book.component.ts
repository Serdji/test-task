import {Component, Input, OnInit} from '@angular/core';

import { Ibook } from '../../interface/ibook';

@Component({
  selector: 'app-item-book',
  templateUrl: './item-book.component.html',
  styleUrls: ['./item-book.component.styl']
})
export class ItemBookComponent implements OnInit {

  @Input() book: Ibook;

  constructor() { }

  ngOnInit() {
  }

}
