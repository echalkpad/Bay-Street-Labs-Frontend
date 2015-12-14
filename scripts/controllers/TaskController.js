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
var TaskModel_1 = require('../models/TaskModel');
var UserModel_1 = require('../models/UserModel');
var common_1 = require('angular2/common');
var TaskController = (function () {
    function TaskController(taskResource, userResource) {
        this.taskList = [];
        this.userList = [];
        this.completeList = [
            {
                id: false,
                name: 'Not completed'
            },
            {
                id: true,
                name: 'Completed'
            },
        ];
        this.taskModel = new TaskModel_1.TaskModel({});
        this.taskResource = taskResource;
        this.userResource = userResource;
        this.form = new angular2_1.ControlGroup({
            name: new angular2_1.Control('name', angular2_1.Validators.required),
            completed: new angular2_1.Control('completed', angular2_1.Validators.required),
            assignedId: new angular2_1.Control('assignedId', angular2_1.Validators.required)
        });
        this.refreshUserList();
        this.refreshTaskList();
    }
    TaskController.prototype.refreshTaskList = function () {
        var _this = this;
        this.taskResource.find({
            include: ["assigned"]
        })
            .then(function (taskList) {
            _this.taskList = taskList;
        });
    };
    TaskController.prototype.refreshUserList = function () {
        var _this = this;
        this.userResource.find()
            .then(function (userList) {
            _this.userList = userList;
        });
    };
    TaskController.prototype.ngAfterViewInit = function () {
        this.refreshUserList();
    };
    TaskController.prototype.addModel = function () {
        var _this = this;
        this.taskResource.upsert(this.taskModel)
            .then(function (res) {
            _this.taskModel = new TaskModel_1.TaskModel({});
            _this.refreshTaskList();
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TaskController = __decorate([
        angular2_1.Component({
            providers: [TaskModel_1.TaskResource, UserModel_1.UserResource]
        }),
        angular2_1.View({
            templateUrl: 'scripts/controllers/TaskController.html',
            directives: [[common_1.FORM_DIRECTIVES]]
        }),
        __param(0, angular2_1.Inject(TaskModel_1.TaskResource)),
        __param(1, angular2_1.Inject(UserModel_1.UserResource))
    ], TaskController);
    return TaskController;
})();
exports.TaskController = TaskController;
