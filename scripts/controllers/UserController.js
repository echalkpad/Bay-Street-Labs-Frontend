///<reference path="../../bower_components/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angular2_1 = require('angular2/angular2');
var UserModel_1 = require('../models/UserModel');
var UserController = (function () {
    function UserController() {
        this.userModel = new UserModel_1.UserModel({});
    }
    UserController = __decorate([
        angular2_1.Component({}),
        angular2_1.View({
            template: "\n        <div>\n            <form class=\"uk-form uk-width-medium-1-3\">\n                <fieldset>\n                    <legend>Add a user</legend>\n                    <div class=\"uk-form-row\">\n                        <input type=\"text\" name=\"userModel.firstName\" placeholder=\"First Name\">\n                    </div>\n                    <div class=\"uk-form-row\">\n                        <input type=\"text\" name=\"userModel.lastName\" placeholder=\"Last Name\">\n                    </div>\n                    <div class=\"uk-form-row\">\n                        <input type=\"text\" name=\"userModel.email\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"uk-form-row\">\n                        <button class=\"uk-button\">Add</button>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    ",
            directives: []
        })
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
