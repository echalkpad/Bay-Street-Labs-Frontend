///<reference path="../../bower_components/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var UserModel_1 = require('../models/UserModel');
var common_1 = require('angular2/common');
var UserController = (function () {
    function UserController(userResource) {
        this.userList = [];
        this.userModel = new UserModel_1.UserModel({});
        this.userResource = userResource;
        this.form = new angular2_1.ControlGroup({
            email: new angular2_1.Control('email', this.emailValidator),
            firstName: new angular2_1.Control('firstName', angular2_1.Validators.required),
            lastName: new angular2_1.Control('lastName', angular2_1.Validators.required)
        });
        this.refreshUserList();
    }
    UserController.prototype.emailValidator = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { invalidEmail: true };
        }
    };
    UserController.prototype.refreshUserList = function () {
        var _this = this;
        this.userResource.find()
            .then(function (userList) {
            _this.userList = userList;
        });
    };
    UserController.prototype.addModel = function () {
        var _this = this;
        this.userResource.upsert(this.userModel)
            .then(function (res) {
            _this.userModel = new UserModel_1.UserModel({});
            _this.refreshUserList();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    UserController = __decorate([
        angular2_1.Component({
            providers: [UserModel_1.UserResource]
        }),
        angular2_1.View({
            templateUrl: 'scripts/controllers/UserController.html',
            directives: [[common_1.FORM_DIRECTIVES]]
        }),
        __param(0, angular2_1.Inject(UserModel_1.UserResource))
    ], UserController);
    return UserController;
})();
exports.UserController = UserController;
