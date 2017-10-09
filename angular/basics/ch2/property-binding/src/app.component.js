"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Data Binding in Angular - Interpolation Syntax';
        this.frameworks = ['Angular', 'React', 'Ember'];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'display',
        template: "<h1>{{message}}</h1><br><input type=\"text\" [(ngModel)]=\"message\" /><hr><h1><u>*ngFor=\"let framework of frameworks\"</u></h1><ol><li *ngFor=\"let framework of frameworks\">{{framework}}</li></ol><br><hr><h1><u>[ngSwitch]=\"selectedCar\"</u></h1><br><div [ngSwitch]=\"selectedCar\"><template [ngSwitchCase]=\"'Bugatti'\">I am Bugatti</template><template [ngSwitchCase]=\"'Mustang'\">I am Mustang</template><template [ngSwitchCase]=\"'Ferrari'\">I am Ferrari</template><template ngSwitchDefault>I am somebody else (ngSwitchDefault)</template></div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map