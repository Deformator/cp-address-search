export interface AddressResponseModel {
  description: string;
  id: string;
}

export interface AddressModel {
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  province: string;
  postalCode: string;
}
