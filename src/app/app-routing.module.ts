import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import {FormBookComponent} from './form-book/form-book.component';
import {CardBookComponent} from './main/card-book/card-book.component';
import {InputComponent} from './input/input.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'card-book', component: CardBookComponent },
  { path: 'form-book', component: FormBookComponent },
  { path: 'input', component: InputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
