///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View, Inject, ControlGroup, Control, Validators} from 'angular2/angular2';
import {BusinessModel, BusinessResource} from '../models/BusinessModel';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    providers: [BusinessResource]
})

@View({
    templateUrl: 'scripts/controllers/BusinessController.html',
    directives: [[FORM_DIRECTIVES]]
})

export class BusinessController {
    businessModel: BusinessModel;
    businessResource: BusinessResource;
    businessList: Array<BusinessModel> = [];
    form: ControlGroup;

    constructor( @Inject(BusinessResource) businessResource: BusinessResource) {
        this.businessModel = new BusinessModel({});
        this.businessResource = businessResource;

        this.form = new ControlGroup({
            name: new Control('name',  Validators.required),
            address: new Control('address', Validators.required),
            phone: new Control('phone', Validators.required),
            userId: new Control('userId', Validators.required)
        });

        this.refreshBusinessList();
    }

    refreshBusinessList() {
        this.businessResource.find()
            .then(businessList => {
                this.businessList = businessList;
            });
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
