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
    styles: [`
        ul {
            display: flex;
            justify-content: space-around;
            width: 100%;
            list-style: none;
            padding: 0;
        }

        li {
            width: 20%;
            text-align: center;
            height: 48px;
            line-height: 48px;
            border: 1px solid grey;
            border-radius: 12px;
            cursor: pointer;
        }

        li.pvl-active-tab {
            background-color: darkgrey;
        }

        li:hover {
            background-color: grey;
        }

        .banner, .container {
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
    `]
})
export class DemoComponent {
    bannerSrc: string = 'http://i.imgur.com/c7pfis6.jpg';
    junkrat: string = 'http://i.imgur.com/CY8afha.png';
    soldier: string = 'http://i.imgur.com/7Y4QGmx.png';
    ana: string = 'http://i.imgur.com/suYfDOU.png';
}