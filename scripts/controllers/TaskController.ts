///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, Inject, ControlGroup, Control, Validators} from 'angular2/angular2';
import {TaskModel, TaskResource} from '../models/TaskModel';
import {UserModel, UserResource} from '../models/UserModel';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    providers: [TaskResource, UserResource]
})

@View({
    templateUrl: 'scripts/controllers/TaskController.html',
    directives: [[FORM_DIRECTIVES]]
})

export class TaskController {
    taskModel: TaskModel;
    taskResource: TaskResource;
    taskList: Array<TaskModel> = [];
    userResource: UserResource;
    userList: Array<UserModel> = [];
    form: ControlGroup;
    completeList = [
        {
            id: false,
            name: 'Not completed'
        },
        {
            id: true,
            name: 'Completed'
        },
    ];

    constructor( @Inject(TaskResource) taskResource: TaskResource, @Inject(UserResource) userResource: UserResource) {
        this.taskModel = new TaskModel({});
        this.taskResource = taskResource;
        this.userResource = userResource;

        this.form = new ControlGroup({
            name: new Control('name', Validators.required),
            completed: new Control('completed', Validators.required),
            assignedId: new Control('assignedId', Validators.required)
        });

        this.refreshUserList();
        this.refreshTaskList();
    }

    refreshTaskList() {
        this.taskResource.find({
            include: ["assigned"]
        })
            .then(taskList => {
                this.taskList = taskList;
            });
    }

    refreshUserList() {
        this.userResource.find()
            .then(userList => {
                this.userList = userList;
            });
    }

    ngAfterViewInit() {
        this.refreshUserList();
    }

    addModel() {
        this.taskResource.upsert(this.taskModel)
            .then(res => {
                this.taskModel = new TaskModel({});
                this.refreshTaskList();
            })
            .catch(err => {
                console.log(err);
            });
    }
}
