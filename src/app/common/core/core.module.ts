import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from '../core/store/app.reducer';
import { HttpService } from './services/http.service';
import { AddressEffects } from 'src/app/features/address-form/store/address.effects';
import { StoreService } from './services/store.service';

const EFFECTS = [AddressEffects];

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([...EFFECTS]),
  ],
  providers: [HttpService, StoreService],
  exports: [],
})
export class CoreModule {}
