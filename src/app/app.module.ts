import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormBookComponent } from './form-book/form-book.component';
import { ItemBookComponent } from './main/item-book/item-book.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormBookComponent,
    ItemBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
