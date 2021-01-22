import { ActionReducerMap } from '@ngrx/store';

import * as fromAddress from '../../../features/address-form/store/address.reducer';

export interface AppState {
  addressState: fromAddress.State
}

export const appReducer: ActionReducerMap<AppState> = {
  addressState: fromAddress.reducer as any
}
