import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'book-details',
    templateUrl: 'src/book-details/book-details.component.html'
})

export class BookDetailsComponent {
    @Input() book: Book;

    @Output() onDelete = new EventEmitter<number>();

    deletedBook(){
        this.onDelete.emit(this.book.isbn);
    }
}