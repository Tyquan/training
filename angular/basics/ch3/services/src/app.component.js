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
// import { BOOKS } from './mock-books';
var console_logger_service_1 = require("./console-logger.service");
var book_store_service_1 = require("./book-store.service");
var AppComponent = (function () {
    function AppComponent(BookStoreService) {
        this.BookStoreService = BookStoreService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getBooksList();
    };
    AppComponent.prototype.getBooksList = function () {
        this.bookList = this.BookStoreService.getBooks();
    };
    AppComponent.prototype.getBookDetails = function (isbn) {
        var selectedBook = null;
        selectedBook = this.BookStoreService.getBook(isbn);
    };
    AppComponent.prototype.deleteBook = function (isbn) {
        this.selectedBook = null;
        this.bookList = this.BookStoreService.deleteBook(isbn);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'books',
        templateUrl: 'src/app.component.html',
        providers: [book_store_service_1.BookStoreService, console_logger_service_1.ConsoleLoggerService]
    }),
    __metadata("design:paramtypes", [book_store_service_1.BookStoreService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map