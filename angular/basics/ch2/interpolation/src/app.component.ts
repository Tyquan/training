import { Component } from '@angular/core';

@Component({
	selector: 'display',
	template: `<h1>{{message}}</h1> 
		<br> 
		<input type="text" value="{{message}}" />`
})

export class AppComponent {
	message: string = 'Data Binding in Angular - Interpolation Syntax';
}