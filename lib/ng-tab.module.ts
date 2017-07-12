import { NgModule } from '@angular/core';

import { TabDirective } from './tab.directive';
import { TabGroupDirective } from './tab-group.directive';
import { TabPanelDirective } from './tab-panel.directive';


@NgModule({
    exports: [TabDirective, TabGroupDirective, TabPanelDirective],
    declarations: [TabDirective, TabGroupDirective, TabPanelDirective],
})
export class NgTabModule { }
