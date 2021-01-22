import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/common/core/services/store.service';
import * as fromActions from '../address-form/store/address.actions';
import * as fromApp from '../../common/core/store/app.reducer';
import { State } from '../address-form/store/address.reducer';
import { AddressModel, AddressResponseModel } from '../models/address.model';
import { Store } from '@ngrx/store';

@Injectable()
export class CanadaPostStoreService {
  store: Store<fromApp.AppState>;
  addressStore: Observable<State>;

  constructor(private storeService: StoreService) {
    this.store = this.storeService.getStoreInstance();
    this.addressStore = this.storeService
      .getStoreInstance()
      .select('addressState');
  }

  getAddresses(): Observable<AddressResponseModel[]> {
    return this.addressStore.pipe(map((state: State) => state.addresses));
  }

  getSelectedAddress(): Observable<AddressModel | null> {
    return this.addressStore.pipe(map((state: State) => state.selectedAddress));
  }

  searchAddresses(searchItem: string) {
    this.store.dispatch(new fromActions.SearchAddresses({ searchItem }));
  }

  getAddressById(id: string) {
    this.store.dispatch(new fromActions.GetAddressById({ id }));
  }
}
