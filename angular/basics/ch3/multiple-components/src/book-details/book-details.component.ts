import { Component, Input} from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'book-details',
    templateUrl: 'src/book-details/book-details.component.html'
})

export class BookDetailsComponent {
    @Input() book: Book;
}