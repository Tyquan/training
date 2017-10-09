import { Component, OnInit } from '@angular/core';
import { Book } from './book';
// import { BOOKS } from './mock-books';

import {ConsoleLoggerService} from './console-logger.service'
import {BookStoreService} from './book-store.service';

@Component({
	selector: 'books',
	templateUrl: 'src/app.component.html',
	providers: [BookStoreService, ConsoleLoggerService]
})

export class AppComponent implements OnInit {
	bookList: Book[];
	selectedBook: Book;

	constructor(private BookStoreService: BookStoreService){}

	ngOnInit() {
		this.getBooksList();
	}

	getBooksList() {
		this.bookList = this.BookStoreService.getBooks();
	}

	getBookDetails(isbn: number){
		var selectedBook = null;
		selectedBook = this.BookStoreService.getBook(isbn);
	}

	deleteBook(isbn: number) {
		this.selectedBook = null;
		this.bookList = this.BookStoreService.deleteBook(isbn);
	}
}