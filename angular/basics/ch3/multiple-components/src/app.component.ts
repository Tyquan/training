import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Component({
	selector: 'books',
	templateUrl: 'src/app.component.html'
})

export class AppComponent {
	bookList: Book[] = BOOKS;
	selectedBook: Book;

	getBookDetails(isbn: number){
		var selectedBook = this.bookList.filter(book => book.isbn === isbn);
		this.selectedBook = selectedBook[0];
	}

	deleteBook(isbn: number) {
		this.selectedBook = null;
		this.bookList = this.bookList.filter(book => book.isbn !== isbn);
	}
}