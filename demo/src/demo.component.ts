import { Component } from '@angular/core';

@Component({
    selector: 'demo-component',
    template: `
        <ul pvlTabGroup [tabPanel]="characterPanel">
            <li pvlTab [tabId]="'junkrat'">
                Junkrat
                <ng-template><img [src]="junkrat" /></ng-template>
            </li>
            <li pvlTab [tabId]="'soldier76'">
                Soldier 76
                <ng-template><img [src]="soldier" /></ng-template>
            </li>
            <li pvlTab [tabId]="'ana'">
                Ana
                <ng-template><img [src]="ana" /></ng-template>
            </li>
        </ul>

        <div class="banner">
            <img [src]="bannerSrc" />
        </div>

        <div class="container">
            <ng-template pvlTabPanel #characterPanel="pvlTabPanel"></ng-template>
        </div>
    `,
    styles: [``]
})
export class DemoComponent {
    bannerSrc: string = 'http://i.imgur.com/c7pfis6.jpg';
    junkrat: string = 'http://i.imgur.com/CY8afha.png';
    soldier: string = 'http://i.imgur.com/7Y4QGmx.png';
    ana: string = 'http://i.imgur.com/suYfDOU.png';
}