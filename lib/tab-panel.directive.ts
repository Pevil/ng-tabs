import { ChangeDetectorRef, Directive, EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[pvlTabPanel]', exportAs: 'pvlTabPanel' })
export class TabPanelDirective {
    private viewRef: EmbeddedViewRef<any>;

    constructor(private vcr: ViewContainerRef, private cdr: ChangeDetectorRef) { }

    swapInTemplate(template: TemplateRef<any>) {
        this.vcr.clear();
        if (this.viewRef) {
            this.viewRef.destroy();
        }
        this.viewRef = this.vcr.createEmbeddedView(template);
        this.cdr.detectChanges();
    }
}
