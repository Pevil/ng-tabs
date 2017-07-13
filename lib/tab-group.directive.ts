import {
    AfterContentInit,
    ContentChildren,
    Directive,
    Input,
    OnDestroy,
    QueryList
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { TabDirective } from './tab.directive';
import { TabPanelDirective } from './tab-panel.directive';
import { TabStateService } from './tab-state.service';

@Directive({ selector: '[pvlTabGroup]', providers: [TabStateService] })
export class TabGroupDirective implements AfterContentInit, OnDestroy {

    @Input() tabPanel: TabPanelDirective;
    @Input('initialTab') initialTabId: string;
    @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;

    private activeTab: TabDirective;
    private stateSub: Subscription;

    constructor(private tabState: TabStateService) { }

    ngAfterContentInit() {
        if (!this.idsAreUnique(this.tabs.map((tab: TabDirective) => tab.id))) {
            console.warn('tab ids must be unique!');
        }
        if (!this.tabPanel) {
            console.warn('[tabPanel] input is required!');
        }
        this.stateSub = this.tabState.activeTab.subscribe(this.setActiveTab.bind(this));
        this.tabState.initial(this.initialTabId || this.tabs.first.id);
    }

    setActiveTab (id: string) {
        if (this.activeTab && this.activeTab.id === id) {
            return;
        }
        const newTab: TabDirective = this.tabs.find((tab: TabDirective) => tab.id === id);

        this.tabPanel.swapInTemplate(newTab.ref);
        this.activeTab = newTab;
    }

    idsAreUnique(ids: string[]): boolean {
        const idMap: any = {};
        for (const id of ids) {
            if (idMap[id]) {
                return false;
            }
            idMap[id] = true;
        }
        return true;
    }

    ngOnDestroy() {
        if (this.stateSub) {
            this.stateSub.unsubscribe();
        }
    }
}
