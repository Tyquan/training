"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Books } from './mock-books';
var AppComponent = (function () {
    function AppComponent() {
        this.bookList = [
            {
                "isbn": 9781786462084,
                "title": "Laravel 5.x Cookbook",
                "authors": "Alfred Nutile",
                "published": "September 2016",
                "description": "A recipe-based book to help you efficiently create amazing PHP-based applications with Laravel 5.x",
                "coverImage": "https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B05517_MockupCover_Cookbook_0.jpg"
            },
            {
                "isbn": 9781784396527,
                "title": "Sitecore Cookbook for Developers",
                "authors": "Yogesh Patel",
                "published": "April 2016",
                "description": "Over 70 incredibly effective and practical recipes to get you up and running with Sitecore development",
                "coverImage": "https://d255esdrn735hr.cloudfront.net/sites/'default/files/imagecache/ppv4_main_book_cover/6527cov_.jpg"
            },
            {
                "isbn": 9781783286935,
                "title": "Sass and Compass Designers Cookbook",
                "authors": "Bass Jobsen",
                "published": "April 2016",
                "description": "Over 120 practical and easy-to-understand recipes that explain how to use Sass and Compass to write efficient, maintainable, and reusable CSS code for your web development projects",
                "coverImage": "https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/I6935.jpg"
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'book-list',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map