var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require('angular2/http');
var Config_1 = require('../Config');
var angular2_1 = require('angular2/angular2');
require('rxjs/add/operator/map');
var BaseResource = (function () {
    function BaseResource(http) {
        this.http = http;
        this.config = new Config_1.Config();
    }
    BaseResource.prototype.search = function (searchFor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.config.apiUrl + '/api/' + _this.modelName + '/search/' + searchFor)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                if (res.error) {
                    reject(res.error);
                }
                else {
                    resolve(_this.mapListToModelList(res));
                }
            });
        });
    };
    BaseResource.prototype.mapListToModelList = function (list) {
        var _this = this;
        list.forEach(function (item, index) {
            list[index] = _this.mapModel(item);
        });
        return list;
    };
    BaseResource.prototype.mapModel = function (model) {
        return this.model(model);
    };
    BaseResource.prototype.findById = function (id, filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        return new Promise(function (resolve, reject) {
            var url = _this.config.apiUrl + '/api/' + _this.modelName + '/get/' + id;
            // if (filter) {
            //     url = url + "?filter=" + JSON.stringify(filter);
            //     console.log("URL", url);
            // }
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                if (res.error) {
                    reject(res.error);
                }
                else {
                    resolve(_this.mapModel(res));
                }
            });
        });
    };
    BaseResource.prototype.find = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        return new Promise(function (resolve, reject) {
            var url = _this.config.apiUrl + '/api/' + _this.modelName;
            if (filter) {
                url = url + "?filter=" + JSON.stringify(filter);
            }
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                if (res.error) {
                    reject(res.error);
                }
                else {
                    resolve(_this.mapListToModelList(res));
                }
            });
        });
    };
    BaseResource.prototype.upsert = function (model) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = _this.config.apiUrl + '/api/' + _this.modelName;
            // if (filter) {
            //     url = url + "?filter=" + JSON.stringify(filter);
            //     console.log("URL", url);
            // }
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            _this.http.put(url, JSON.stringify(model), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log(res);
                if (res.error) {
                    reject(res.error);
                }
                else {
                    resolve(_this.mapModel(res));
                }
            });
        });
    };
    BaseResource = __decorate([
        __param(0, angular2_1.Inject(http_1.Http))
    ], BaseResource);
    return BaseResource;
})();
exports.BaseResource = BaseResource;
