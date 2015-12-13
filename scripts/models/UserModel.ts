///<reference path='../../bower_components/angular2/angular2.d.ts' />
import {Inject} from 'angular2/angular2';
import {BaseResource} from './BaseResource';
import {Http} from 'angular2/http';

export class UserModel {
    firstName: string;
    lastName: string;
    email: string;
    id: string;

    constructor(modelData?: any) {
        this.setData(modelData);
    }

    setData(modelData?: any) {
        if (modelData) {
            this.firstName = modelData.firstName;
            this.lastName = modelData.lastName;
            this.email = modelData.email;
            this.id = modelData.id;
        }
    }
}

export class UserResource extends BaseResource {
    http: Http;
    model;
    modelName = 'user';

    constructor( @Inject(Http) http: Http) {
        super(http);

        this.model = (construct) => {
            return new UserModel(construct);
        };

        this.http = http;
    }
}
