import { AddressModel, AddressResponseModel } from '../../models/address.model';
import * as AddressActions from './address.actions';

export interface State {
  loading: boolean;
  addresses: AddressResponseModel[];
  selectedAddress: AddressModel | null;
  error: string | null;
}

const initialState: State = {
  loading: false,
  addresses: [],
  selectedAddress: null,
  error: null,
};

export function reducer(
  state = initialState,
  action: AddressActions.AddressAcction
) {
  switch (action.type) {
    case AddressActions.SEARCH_ADDRESSES: {
      return {
        ...state,
        error: null,
        loading: true,
        addresses: [],
      };
    }
    case AddressActions.SEARCH_ADDRESSES_SUCCESS: {
      return {
        ...state,
        loading: false,
        addresses: action.payload.addresses,
      };
    }
    case AddressActions.GET_ADDRESS_BY_ID: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case AddressActions.GET_ADDRESS_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        addresses: [],
        selectedAddress: action.payload.address,
      };
    }
    case AddressActions.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
