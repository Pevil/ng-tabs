import { QueryList } from '@angular/core';
import { TabDirective } from '../index';
import { TabStateService } from '../lib/tab-state.service';

export const createQueryList = (state: TabStateService, ids: string[]): QueryList<TabDirective> => {
    let ql = new QueryList<TabDirective>();
    let tabs: TabDirective[] = ids.map(id => {
        let tab: TabDirective = new TabDirective(state);
        tab.id = id;
        return tab;
    });
    ql.reset(tabs)
    return ql;
} 