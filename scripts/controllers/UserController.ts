///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, Inject, ControlGroup, Control, Validators} from 'angular2/angular2';
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
    form: ControlGroup;

    constructor(@Inject(UserResource) userResource: UserResource) {
        this.userModel = new UserModel({});
        this.userResource = userResource;

        this.form = new ControlGroup({
            email: new Control('email', this.emailValidator),
            firstName: new Control('firstName', Validators.required),
            lastName: new Control('lastName', Validators.required)
        });

        this.refreshUserList();
    }

     emailValidator(control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (!EMAIL_REGEXP.test(control.value)) {
            return { invalidEmail: true };
        }
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
