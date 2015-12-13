///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {UserModel} from '../models/UserModel';

@Component({
})

@View({
    template: `
        <div>
            <form class="uk-form uk-width-medium-1-3">
                <fieldset>
                    <legend>Add a user</legend>
                    <div class="uk-form-row">
                        <input type="text" name="userModel.firstName" placeholder="First Name">
                    </div>
                    <div class="uk-form-row">
                        <input type="text" name="userModel.lastName" placeholder="Last Name">
                    </div>
                    <div class="uk-form-row">
                        <input type="text" name="userModel.email" placeholder="Email">
                    </div>
                    <div class="uk-form-row">
                        <button class="uk-button">Add</button>
                    </div>
                </fieldset>
            </form>
        </div>
    `,
    directives: []
})

export class UserController {
    userModel: UserModel;

    constructor() {
        this.userModel = new UserModel({});
    }
}
