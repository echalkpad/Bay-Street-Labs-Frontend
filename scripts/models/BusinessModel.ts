///<reference path='../../bower_components/angular2/angular2.d.ts' />
import {Inject} from 'angular2/angular2';
import {BaseResource} from './BaseResource';
import {Http} from 'angular2/http';
import {UserModel} from './UserModel';

export class BusinessModel {
    name: string;
    address: string;
    phone: string;
    id: string;
    user: UserModel;

    constructor(modelData?: any) {
        this.setData(modelData);
    }

    setData(modelData?: any) {
        if (modelData) {
            this.name = modelData.name;
            this.address = modelData.address;
            this.phone = modelData.phone;
            this.user = new UserModel(modelData.user);
            this.id = modelData.id;
        }
    }
}

export class BusinessResource extends BaseResource {
    http: Http;
    model;
    modelName = 'business';

    constructor( @Inject(Http) http: Http) {
        super(http);

        this.model = (construct) => {
            return new BusinessModel(construct);
        };

        this.http = http;
    }
}
