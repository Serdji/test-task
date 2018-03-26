import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.styl']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  revers() {
    const htmlElem = document.querySelector('html');
    if (htmlElem.hasAttribute('dir')){
      htmlElem.removeAttribute('dir');
      return;
    }
    htmlElem.setAttribute('dir', 'rtl');
  }

}
