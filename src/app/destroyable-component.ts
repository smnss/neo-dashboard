import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class DestroyAction implements OnDestroy {

    destroyableObservable = new Subject<void>();

    constructor() {
    }

    ngOnDestroy(): void {
        this.destroyableObservable.next();
        this.destroyableObservable.complete();
    }

}
