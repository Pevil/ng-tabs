import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgTabModule } from '@pevil/ng-tabs';
import { DemoComponent } from './demo.component';

@NgModule({
    declarations: [DemoComponent],
    imports: [BrowserModule, NgTabModule],
    bootstrap: [DemoComponent]
})
export class DemoModule {}