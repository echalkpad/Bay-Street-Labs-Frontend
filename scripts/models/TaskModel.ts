///<reference path='../../bower_components/angular2/angular2.d.ts' />
import {Inject} from 'angular2/angular2';
import {BaseResource} from './BaseResource';
import {Http} from 'angular2/http';
import {UserModel} from './UserModel';

export class TaskModel {
    name: string;
    completed: boolean;
    assigned: UserModel;
    assignedId: string;
    id: string;

    constructor(modelData?: any) {
        this.setData(modelData);
    }

    setData(modelData?: any) {
        if (modelData) {
            this.name = modelData.name;
            this.completed = modelData.completed;
            this.assigned = new UserModel(modelData.assigned);
            this.id = modelData.id;
        }
    }
}

export class TaskResource extends BaseResource {
    http: Http;
    model;
    modelName = 'task';

    constructor( @Inject(Http) http: Http) {
        super(http);

        this.model = (construct) => {
            return new TaskModel(construct);
        };

        this.http = http;
    }
}
