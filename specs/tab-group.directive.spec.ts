import { TabGroupDirective, TabPanelDirective } from '../index';
import { TabStateService } from '../lib/tab-state.service';
import { createQueryList } from './utils';

describe('TabGroup', () => {
    let tabGroup: TabGroupDirective;
    let tabState: TabStateService;

    beforeEach(() => {
        tabState = new TabStateService();
        tabGroup = new TabGroupDirective(tabState);
    });

    describe('afterContentInit()', () => {
        it('should error if tabs not defined', () => {
            let spy = spyOn(console, 'error');

            expect(tabGroup.tabs).not.toBeDefined();
            tabGroup.ngAfterContentInit();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0]).toEqual('You haven\'t defined any tabs for this tabGroup!');
        });

        it('should warn if tab id\'s not unique', () => {
            let spy = spyOn(console, 'warn');
            tabGroup.tabs = createQueryList(tabState, ['abc', 'abc']);

            expect(tabGroup.tabs.map(tab => tab.id)).toEqual(['abc', 'abc']);
            tabGroup.ngAfterContentInit();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args).toEqual(['Tab ids must be unique!', ['abc', 'abc']]);
        });

        it('should error if no panel provided', () => {
            let spy = spyOn(console, 'error');
            tabGroup.tabs = createQueryList(tabState, ['a', 'b']);

            tabGroup.ngAfterContentInit();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0]).toEqual('[tabPanel] input is required!');
        });

        it('should initialize with first tab as default', () => {
            let spy = spyOn(tabState, 'initial');
            tabGroup.tabs = createQueryList(tabState, ['a', 'b']);
            tabGroup.tabPanel = new TabPanelDirective(null, null);

            tabGroup.ngAfterContentInit();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0]).toBe('a');
        });

        it('should initialize with specified tab', () => {
            let spy = spyOn(tabState, 'initial');
            tabGroup.tabs = createQueryList(tabState, ['a', 'b']);
            tabGroup.tabPanel = new TabPanelDirective(null, null);

            tabGroup.ngAfterContentInit();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0]).toBe('a');
        });
    });

    describe('idsAreUnique()', () => {
        it('should indicate ids are unique', () => {
            expect(tabGroup.idsAreUnique(['a', 'b', 'c'])).toBeTruthy();
        });

        it('should indicate empty list as unique', () => {
            expect(tabGroup.idsAreUnique([])).toBeTruthy();
        });

        it('should indicate duplicate ids as not unique', () => {
            expect(tabGroup.idsAreUnique(['a', 'c', 'a'])).toBeFalsy();
        });
    });

    describe('setActiveTab()', () => {
        it('should set the next active tab', () => {
            tabGroup.tabs = createQueryList(tabState, ['a', 'b']);
            tabGroup.tabPanel = new TabPanelDirective(null, null);
            let spy = spyOn(tabGroup.tabPanel, 'swapInTemplate');

            tabGroup.setActiveTab('a');
            expect(spy.calls.count()).toBe(1);
        });

        it('should fail if id dne', () => {
            tabGroup.tabs = createQueryList(tabState, ['a', 'b']);
            tabGroup.tabPanel = new TabPanelDirective(null, null);
            let spy = spyOn(tabGroup.tabPanel, 'swapInTemplate');

            tabGroup.setActiveTab('c');
            expect(spy.calls.count()).toBe(0);
        });
    });
});
