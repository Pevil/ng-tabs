import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabStateService {
    private subject: Subject<string> = new Subject();

    get activeTab(): Observable<string> {
        return this.subject.asObservable();
    }

    update(tabId: string) {
        this.subject.next(tabId);
    }

    initial(tabId: string) {
        this.update(tabId);
    }
}
