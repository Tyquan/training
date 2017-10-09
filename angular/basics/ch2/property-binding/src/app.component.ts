import { Component } from '@angular/core';

@Component({
	selector: 'display',
	template: `<h1>{{message}}</h1><br><input type="text" [(ngModel)]="message" /><hr><h1><u>*ngFor="let framework of frameworks"</u></h1><ol><li *ngFor="let framework of frameworks" [ngStyle]="getInlineStyles(framework)">{{framework}}</li></ol><br><hr><h1><u>[ngSwitch]="selectedCar"</u></h1><br><div [ngSwitch]="selectedCar"><template [ngSwitchCase]="'Bugatti'">I am Bugatti</template><template [ngSwitchCase]="'Mustang'">I am Mustang</template><template [ngSwitchCase]="'Ferrari'">I am Ferrari</template><template ngSwitchDefault>I am somebody else (ngSwitchDefault)</template></div>`
})

export class AppComponent {
	public message: string = 'Data Binding in Angular - Interpolation Syntax';

	public frameworks: string[] = ['Angular', 'React', 'Ember'];

	getInlineStyles(framework){
		let styles = {
			'color': framework.length > 3 ? 'red' : 'green',
			'text-decoration': framework.length > 3 ? 'underline': 'none'
		};
		return styles;
	}
}