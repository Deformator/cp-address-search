import { Action } from '@ngrx/store';
import { AddressModel, AddressResponseModel } from '../../models/address.model';

export const SEARCH_ADDRESSES = 'SEARCH_ADDRESSES';
export const SEARCH_ADDRESSES_SUCCESS = 'SEARCH_ADDRESSES_SUCCESS';
export const GET_ADDRESS_BY_ID = 'GET_ADDRESS_BY_ID';
export const GET_ADDRESS_BY_ID_SUCCESS = 'GET_ADDRESS_BY_ID_SUCCESS';
export const ERROR = 'ERROR';

export class SearchAddresses {
  readonly type = SEARCH_ADDRESSES;
  constructor(public payload: { searchItem: string }) {}
}

export class SearchAddressesSuccess implements Action {
  readonly type = SEARCH_ADDRESSES_SUCCESS;
  constructor(public payload: { addresses: AddressResponseModel[] }) {}
}

export class GetAddressById implements Action {
  readonly type = GET_ADDRESS_BY_ID;
  constructor(public payload: { id: string }) {}
}

export class GetAddressByIdSuccess implements Action {
  readonly type = GET_ADDRESS_BY_ID_SUCCESS;
  constructor(public payload: { address: AddressModel }) {}
}

export class Error implements Action{
  readonly type = ERROR;
  constructor(public payload: { error: string }) {}
}

export type AddressAcction =
  | SearchAddresses
  | SearchAddressesSuccess
  | GetAddressById
  | GetAddressByIdSuccess
  | Error;
