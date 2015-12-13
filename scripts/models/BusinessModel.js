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
var UserModel_1 = require('./UserModel');
var BusinessModel = (function () {
    function BusinessModel(modelData) {
        this.setData(modelData);
    }
    BusinessModel.prototype.setData = function (modelData) {
        if (modelData) {
            this.name = modelData.name;
            this.address = modelData.address;
            this.phone = modelData.phone;
            this.user = new UserModel_1.UserModel(modelData.user);
            this.id = modelData.id;
        }
    };
    return BusinessModel;
})();
exports.BusinessModel = BusinessModel;
var BusinessResource = (function (_super) {
    __extends(BusinessResource, _super);
    function BusinessResource(http) {
        _super.call(this, http);
        this.modelName = 'business';
        this.model = function (construct) {
            return new BusinessModel(construct);
        };
        this.http = http;
    }
    BusinessResource = __decorate([
        __param(0, angular2_1.Inject(http_1.Http))
    ], BusinessResource);
    return BusinessResource;
})(BaseResource_1.BaseResource);
exports.BusinessResource = BusinessResource;
