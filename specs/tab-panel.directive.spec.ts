import { TabPanelDirective } from '../index';

describe('TabPanel', () => {
    let panel: TabPanelDirective;
    let viewContainerRef: any = {
        createEmbeddedView: (_template) => undefined, 
        clear: () => undefined
    };
    let changeDetectorRef: any = {detectChanges: () => undefined}

    beforeEach(() => {
        panel = new TabPanelDirective(viewContainerRef, changeDetectorRef);
    });

    describe('swapInTemplate()', () => {
        it('should clear, create, and finally detect changes', () => {
            let clearSpy = spyOn(viewContainerRef, 'clear');
            let createSpy = spyOn(viewContainerRef, 'createEmbeddedView').and.returnValue({destroy: () => undefined})
            let cdrSpy = spyOn(changeDetectorRef, 'detectChanges');
           
            panel.swapInTemplate(null);
            expect(clearSpy.calls.count()).toBe(1);
            expect(createSpy.calls.count()).toBe(1);
            expect(cdrSpy.calls.count()).toBe(1);

            panel.swapInTemplate(null);
            expect(clearSpy.calls.count()).toBe(2);
            expect(createSpy.calls.count()).toBe(2);
            expect(cdrSpy.calls.count()).toBe(2);
        });
    })
});