import { TabDirective } from '../index';
import { TabStateService } from '../lib/tab-state.service';

describe('Tab', () => {
    let tab: TabDirective;
    let state: TabStateService;

    beforeEach(() => {
        state = new TabStateService();
        tab = new TabDirective(state);
    });

    describe('onInit()', () => {
        it('should init with given id', () => {
            tab.id = 'abc';
            tab.ngOnInit();
            expect(tab.id).toBe('abc');
        });

        it('should init with generated id', () => {
            tab.ngOnInit();
            expect(tab.id.startsWith('tab-')).toBeTruthy();
        });
    });

    describe('onClick()', () => {
        it('should update active tab', () => {
            tab.id = 'abc';
            let spy = spyOn(state, 'update');
            tab.onClick();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0]).toBe('abc');
        });
    });

    describe('active', () => {
        it('should initially be not active', () => {
            expect(tab.active).toBeFalsy();
        });

        it('should set tab to active', () => {
            tab.id = 'abc';
            tab.ngOnInit();
            state.initial('abc');
            expect(tab.active).toBeTruthy();
        });

        it('should set tab to inactive', () => {
            tab.id = 'abc';
            tab.ngOnInit();
            state.update('def');
            expect(tab.active).toBeFalsy();
        });
    });
});
