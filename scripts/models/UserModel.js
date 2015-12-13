var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
///<reference path='../../bower_components/angular2/angular2.d.ts' />
var angular2_1 = require('angular2/angular2');
var BaseResource_1 = require('./BaseResource');
var http_1 = require('angular2/http');
var UserModel = (function () {
    function UserModel(modelData) {
        this.setData(modelData);
    }
    UserModel.prototype.setData = function (modelData) {
        if (modelData) {
            this.firstName = modelData.firstName;
            this.lastName = modelData.lastName;
            this.email = modelData.email;
            this.id = modelData.id;
        }
    };
    return UserModel;
})();
exports.UserModel = UserModel;
var UserResource = (function (_super) {
    __extends(UserResource, _super);
    function UserResource(http) {
        _super.call(this, http);
        this.modelName = 'user';
        this.model = function (construct) {
            return new UserModel(construct);
        };
        this.http = http;
    }
    UserResource = __decorate([
        __param(0, angular2_1.Inject(http_1.Http))
    ], UserResource);
    return UserResource;
})(BaseResource_1.BaseResource);
exports.UserResource = UserResource;
