///<reference path='../bower_components/angular2/angular2.d.ts' />

import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeController} from './controllers/HomeController';
import {UserController} from './controllers/UserController';

@RouteConfig([
    { path: '/', as: 'HomeController', component: HomeController },
    { path: '/users', as: 'UserController', component: UserController }
])

@Component({
  selector: 'my-app'
})

@View({
    templateUrl: 'views/app.html',
    directives: [[ROUTER_DIRECTIVES]]
})

export class App {
    constructor() {}
}
