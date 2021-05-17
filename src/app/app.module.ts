import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AddressFormComponent } from './features/address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CanadaPostService } from './features/services/canadaPost.service';
import { CanadaPostStoreService } from './features/services/canadaPost-store.service';
import { AppCommonModule } from './common/common.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const DEV_TOOLS = environment ? [StoreDevtoolsModule.instrument()] : [];

@NgModule({
  declarations: [AppComponent, AddressFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    AppCommonModule,
    [...DEV_TOOLS],
  ],
  providers: [CanadaPostService, CanadaPostStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
