import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookDetailsComponent } from './book-details/book-details.component';
import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, BookDetailsComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}