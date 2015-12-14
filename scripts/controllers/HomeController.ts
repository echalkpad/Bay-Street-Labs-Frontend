///<reference path="../../bower_components/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
})

@View({
    template: `
        <div>
            <p>Please click on links in the menu to see functionality.</p>

            <p>Frontend is implemented by using Angular 2, as Single Page Application. On backend it is just static HTML, CSS, JS files serverd by Nginx</p>

            <p>Backend is node.js application using Loopback.IO framework. Served by Nginx proxy and "forever" as application runner backed by MongoDB database</p>

            <p><a href="https://api.webit.work/explorer/" target=_blank>Api Explorer</a> - Browsser based API client</p>

            <p>Everything is hosted at AWS, Behind Cloud Flare hosting with enabled HTTPS</p>
        </div>
    `,
    directives: []
})

export class HomeController {
    constructor() {
    }
}
