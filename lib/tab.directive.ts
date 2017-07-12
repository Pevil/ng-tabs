import {
    ContentChild,
    Directive,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { TabStateService } from './tab-state.service';

@Directive({ selector: '[pvlTab]' })
export class TabDirective implements OnInit, OnDestroy {
    @HostBinding('class.active-tab') active = false;
    @ContentChild(TemplateRef) ref: TemplateRef<any>;
    @Input('tabId') id: string;

    private stateSub: Subscription;

    constructor(private tabState: TabStateService) { }

    ngOnInit() {
        this.id = this.id || 'tab-' + Math.floor(Math.random() * 1000);
        this.stateSub = this.tabState.activeTab.subscribe((id: string) => this.active = this.id === id);
    }

    @HostListener('click')
    onClick() {
        this.tabState.update(this.id);
    }

    ngOnDestroy() {
        if (this.stateSub) {
            this.stateSub.unsubscribe();
        }
    }
}
