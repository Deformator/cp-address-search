import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CoreModule } from './common/core/core.module';
import { SharedModule } from './common/shared/shared.module';
import { AddressFormComponent } from './features/address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CanadaPostService } from './features/services/canadaPost.service';
import { CanadaPostStoreService } from './features/services/canadaPost-store.service';

@NgModule({
  declarations: [AppComponent, AddressFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  providers: [CanadaPostService, CanadaPostStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
