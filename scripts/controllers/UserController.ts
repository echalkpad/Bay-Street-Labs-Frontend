///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, Inject} from 'angular2/angular2';
import {UserModel, UserResource} from '../models/UserModel';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    providers: [UserResource]
})

@View({
    templateUrl: 'scripts/controllers/UserController.html',
    directives: [[FORM_DIRECTIVES]]
})

export class UserController {
    userModel: UserModel;
    userResource: UserResource;
    userList: Array<UserModel> = [];

    constructor(@Inject(UserResource) userResource: UserResource) {
        this.userModel = new UserModel({});
        this.userResource = userResource;

        this.refreshUserList();
    }

    refreshUserList() {
        this.userResource.find()
            .then(userList => {
                this.userList = userList;
            });
    }

    addModel() {
        this.userResource.upsert(this.userModel)
            .then(res => {
                this.userModel = new UserModel({});
                this.refreshUserList();
            })
            .catch(err => {
                console.log(err);
            });
    }
}
