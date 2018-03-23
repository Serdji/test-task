import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormBookComponent } from './form-book/form-book.component';
import { ItemBookComponent } from './main/item-book/item-book.component';

import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CardBookComponent } from './main/card-book/card-book.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormBookComponent,
    ItemBookComponent,
    CardBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
