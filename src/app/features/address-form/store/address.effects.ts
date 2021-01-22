import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AddressActions from './address.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CanadaPostService } from '../../services/canadaPost.service';
import { AddressModel, AddressResponseModel } from '../../models/address.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AddressEffects {
  @Effect()
  searchAddresses = this.actions$.pipe(
    ofType(AddressActions.SEARCH_ADDRESSES),
    switchMap((action: AddressActions.SearchAddresses) => {
      const searchTerm = action.payload.searchItem;

      return this.canadaPostService.searchAddress(searchTerm).pipe(
        switchMap((addresses: AddressResponseModel[]) => {
          return [new AddressActions.SearchAddressesSuccess({ addresses })];
        }),
        catchError((error) => {
          return [new AddressActions.Error({ error })];
        })
      );
    })
  );

  @Effect()
  getAddressById = this.actions$.pipe(
    ofType(AddressActions.GET_ADDRESS_BY_ID),
    switchMap((action: AddressActions.GetAddressById) => {
      return this.canadaPostService.getAddressById(action.payload.id).pipe(
        switchMap((address: AddressModel) => {
          return [new AddressActions.GetAddressByIdSuccess({ address })];
        }),
        catchError((error) => {
          return [new AddressActions.Error({ error })];
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private canadaPostService: CanadaPostService
  ) {}
}
