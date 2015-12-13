///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, Inject, ControlGroup, Control, Validators} from 'angular2/angular2';
import {BusinessModel, BusinessResource} from '../models/BusinessModel';
import {UserModel, UserResource} from '../models/UserModel';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    providers: [BusinessResource, UserResource]
})

@View({
    templateUrl: 'scripts/controllers/BusinessController.html',
    directives: [[FORM_DIRECTIVES]]
})

export class BusinessController {
    businessModel: BusinessModel;
    businessResource: BusinessResource;
    businessList: Array<BusinessModel> = [];
    userResource: UserResource;
    userList: Array<UserModel> = [];
    form: ControlGroup;

    constructor( @Inject(BusinessResource) businessResource: BusinessResource, @Inject(UserResource) userResource: UserResource) {
        this.businessModel = new BusinessModel({});
        this.businessResource = businessResource;
        this.userResource = userResource;

        this.form = new ControlGroup({
            name: new Control('name',  Validators.required),
            address: new Control('address', Validators.required),
            phone: new Control('phone', Validators.required),
            userId: new Control('userId', Validators.required)
        });

        this.refreshUserList();
        this.refreshBusinessList();
    }

    refreshBusinessList() {
        this.businessResource.find({
            include: ["user"]
        })
        .then(businessList => {
            this.businessList = businessList;
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
        this.businessResource.upsert(this.businessModel)
            .then(res => {
                this.businessModel = new BusinessModel({});
                this.refreshBusinessList();
            })
            .catch(err => {
                console.log(err);
            });
    }
}
