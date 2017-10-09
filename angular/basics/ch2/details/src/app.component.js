"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_books_1 = require("./mock-books");
var AppComponent = (function () {
    function AppComponent() {
        this.bookList = mock_books_1.BOOKS;
    }
    AppComponent.prototype.getBookDetails = function (isbn) {
        var selectedBook = this.bookList.filter(function (book) { return book.isbn === isbn; });
        this.selectedBook = selectedBook[0];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'books',
        templateUrl: 'src/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map