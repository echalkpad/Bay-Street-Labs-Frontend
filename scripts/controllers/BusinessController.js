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
var BusinessModel_1 = require('../models/BusinessModel');
var common_1 = require('angular2/common');
var BusinessController = (function () {
    function BusinessController(businessResource) {
        this.businessList = [];
        this.businessModel = new BusinessModel_1.BusinessModel({});
        this.businessResource = businessResource;
        this.form = new angular2_1.ControlGroup({
            name: new angular2_1.Control('name', angular2_1.Validators.required),
            address: new angular2_1.Control('address', angular2_1.Validators.required),
            phone: new angular2_1.Control('phone', angular2_1.Validators.required),
            userId: new angular2_1.Control('userId', angular2_1.Validators.required)
        });
        this.refreshBusinessList();
    }
    BusinessController.prototype.refreshBusinessList = function () {
        var _this = this;
        this.businessResource.find()
            .then(function (businessList) {
            _this.businessList = businessList;
        });
    };
    BusinessController.prototype.addModel = function () {
        var _this = this;
        this.businessResource.upsert(this.businessModel)
            .then(function (res) {
            _this.businessModel = new BusinessModel_1.BusinessModel({});
            _this.refreshBusinessList();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BusinessController = __decorate([
        angular2_1.Component({
            providers: [BusinessModel_1.BusinessResource]
        }),
        angular2_1.View({
            templateUrl: 'scripts/controllers/BusinessController.html',
            directives: [[common_1.FORM_DIRECTIVES]]
        }),
        __param(0, angular2_1.Inject(BusinessModel_1.BusinessResource))
    ], BusinessController);
    return BusinessController;
})();
exports.BusinessController = BusinessController;
