///<reference path="../../bower_components/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var HomeController = (function () {
    function HomeController() {
    }
    HomeController = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            template: "\n        <div>\n            <p>Please click on links in the menu to see functionality.</p>\n\n            <p>Frontend is implemented by using Angular 2, as Single Page Application. On backend it is just static HTML, CSS, JS files serverd by Nginx</p>\n\n            <p>Backend is node.js application using Loopback.IO framework. Served by Nginx proxy and \"forever\" as application runner backed by MongoDB database</p>\n\n            <p><a href=\"http://..../explorer\" target=_blank>Api Explorer</a> - Browsser based API client</p>\n\n            <p>Everything is hosted at AWS</p>\n        </div>\n    ",
            directives: []
        })
    ], HomeController);
    return HomeController;
})();
exports.HomeController = HomeController;
