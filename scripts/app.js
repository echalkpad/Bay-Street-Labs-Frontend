///<reference path='../bower_components/angular2/angular2.d.ts' />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var HomeController_1 = require('./controllers/HomeController');
var UserController_1 = require('./controllers/UserController');
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', as: 'HomeController', component: HomeController_1.HomeController },
            { path: '/users', as: 'UserController', component: UserController_1.UserController }
        ]),
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'views/app.html',
            directives: [[router_1.ROUTER_DIRECTIVES]]
        })
    ], App);
    return App;
})();
exports.App = App;
