import { Component, ContentChild } from '@angular/core';

import { TabPanelDirective } from '../index';

@Component({
    selector: 'test-comp',
    template: `
    <div pvlTabGroup [tabPanel]="panel">
        <div pvlTab [tabId]="'a'">
            A
            <ng-template>Content of A</ng-template>
        </div>

        <div pvlTab [tabId]="'b'">
            <ng-template>Content of B</ng-template>
        </div>
    </div>

    <ng-template pvlTabPanel #panel="pvlTabPanel"></ng-template>
    `
})
export class TestComponent {
    @ContentChild(TabPanelDirective) panelRef;
}