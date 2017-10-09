import { Component } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: "./app.component.html",
  styles: [
  	`h1 { font-weight: bold; color: blue}`
  ]
})
export class AppComponent {
  title = 'My First Angular App';
}
