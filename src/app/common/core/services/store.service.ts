import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class StoreService {
  constructor(private store: Store<fromApp.AppState>) {}
  getStoreInstance() {
    return this.store;
  }
}
