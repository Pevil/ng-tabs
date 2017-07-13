import { TabStateService } from '../lib/tab-state.service';

describe('TabState', () => {
    let state: TabStateService;

    beforeEach(() => {
        state = new TabStateService();
    });

    describe('initial()', () => {
        it('should set the first active tab', () => {
            state.activeTab.subscribe(id => {
                expect(id).toBe('cba');
            });
            state.initial('cba');
        });
    });

    describe('update()', () => {
        it('should update the active tab', () => {
            let ids = ['abc', 'def'];
            state.activeTab.subscribe(id => {
                expect(id).toBe(ids.shift());
            });

            state.initial('abc');
            state.update('def');
        });
    });
});
