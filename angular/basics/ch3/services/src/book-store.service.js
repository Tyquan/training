// BookStoreService contains logic for fetching the books list, filtering a single book, and deleting a book. 
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_books_1 = require("./mock-books");
var console_logger_service_1 = require("./console-logger.service");
//  The @Injectable() decorator is used by TypeScript to emit metadata about our service, metadata that Angular needs to inject other dependencies into this service
var BookStoreService = (function () {
    function BookStoreService(loggerService) {
        this.loggerService = loggerService;
        this.bookList = mock_books_1.BOOKS;
    }
    BookStoreService.prototype.getBooks = function () {
        this.loggerService.log('Fetching all books...');
        return this.bookList;
    };
    BookStoreService.prototype.getBook = function (isbn) {
        this.loggerService.log('Fetching book information...');
        var selectedBook = this.bookList.filter(function (book) { return book.isbn === isbn; });
    };
    BookStoreService.prototype.deleteBook = function (isbn) {
        this.bookList = this.bookList.filter(function (book) { return book.isbn !== isbn; });
        return this.bookList;
    };
    return BookStoreService;
}());
BookStoreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [console_logger_service_1.ConsoleLoggerService])
], BookStoreService);
exports.BookStoreService = BookStoreService;
//# sourceMappingURL=book-store.service.js.map