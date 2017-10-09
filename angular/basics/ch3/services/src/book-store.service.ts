// BookStoreService contains logic for fetching the books list, filtering a single book, and deleting a book. 

import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKS } from './mock-books';
import {ConsoleLoggerService} from './console-logger.service'

//  The @Injectable() decorator is used by TypeScript to emit metadata about our service, metadata that Angular needs to inject other dependencies into this service
@Injectable()
export class BookStoreService {

    bookList: Book[] = BOOKS;

    constructor(private loggerService: ConsoleLoggerService) {}
    getBooks(){
        return this.bookList;
    }

    getBook(isbn: number) {
        var selectedBook = this.bookList.filter(book => book.isbn === isbn);
    }

    deleteBook(isbn: number) {
        this.bookList = this.bookList.filter(book => book.isbn !== isbn);
        return this.bookList;
    }
}