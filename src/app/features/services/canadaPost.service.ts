import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/common/core/services/http.service';
import { CANADA_POST_API_KEY } from '../../common/core/apis/api.keys';
import {
  BASE_URL,
  ROUTES,
} from '../../common/core/apis/routes/canadaPost.routes';
import { AddressModel, AddressResponseModel } from '../models/address.model';

@Injectable()
export class CanadaPostService {
  constructor(private httpService: HttpService) {}

  searchAddress(search: string): Observable<AddressResponseModel[]> {
    return this.httpService
      .GET(
        `${BASE_URL}${ROUTES.ADDRESS_SEARCH}?Key=${CANADA_POST_API_KEY}&SearchTerm=${search}&LanguagePreference=en`
      )
      .pipe(
        map((res: any) => {
          let addresses: AddressResponseModel[] = [];
          res.Items.forEach((item: any) => {
            addresses = [
              ...addresses,
              { id: item.Id, description: item.Description },
            ];
          });

          return addresses;
        })
      );
  }

  getAddressById(addressID: string): Observable<AddressModel> {
    return this.httpService
      .GET(
        `${BASE_URL}${ROUTES.RETRIEVE_FORMATTED}?Key=${CANADA_POST_API_KEY}&Id=${addressID}&Source=&$cache=true&field1format=%7BAddressLabel%7D`
      )
      .pipe(
        map((res: any) => {
          let address: AddressModel = {
            address1: res.Items[0].Line1,
            city: res.Items[0].City,
            province: res.Items[0].ProvinceName,
            postalCode: res.Items[0].PostalCode,
          };
          return address;
        })
      );
  }
}
