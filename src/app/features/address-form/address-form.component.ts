import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, take, takeUntil } from 'rxjs/operators';
import { AddressModel, AddressResponseModel } from '../models/address.model';
import { CanadaPostStoreService } from '../services/canadaPost-store.service';
import { CanadaPostService } from '../services/canadaPost.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnDestroy {
  componentDestroyed$: Subject<boolean> = new Subject();

  addressSearch = new FormGroup({
    search: new FormControl('', [Validators.required]),
    company: new FormControl('', []),
    address1: new FormControl('', []),
    address2: new FormControl('', []),
    city: new FormControl('', []),
    province: new FormControl('', []),
    postalCode: new FormControl('', [Validators.pattern('')]),
  });

  addresses: AddressResponseModel[] = [];
  selectedAddress: AddressModel | null = null;

  constructor(
    public cpStoreService: CanadaPostStoreService
  ) {}

  ngOnInit(): void {
    this.initWatchers();
  }

  initWatchers() {
    this.addressSearch
      .get('search')!
      .valueChanges.pipe(debounceTime(500))
      .subscribe((searchedItem: string) => {
        this.cpStoreService.searchAddresses(searchedItem);
      });

    this.cpStoreService
      .getAddresses()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((addresses: AddressResponseModel[]) => {
        this.addresses = addresses;
      });

    this.cpStoreService
      .getSelectedAddress()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((address: AddressModel | null) => {
        this.patchAddressForm(address);
      });
  }

  patchAddressForm(address: AddressModel | null) {
    this.addressSearch.patchValue({
      company: address?.company,
      address1: address?.address1,
      address2: address?.address2,
      city: address?.city,
      province: address?.province,
      postalCode: address?.postalCode,
    });
  }

  populateAddress(addressId: string) {
    this.cpStoreService.getAddressById(addressId);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
