import { Address } from "@prisma/client";

interface AddressResponse {
  readonly id: number;
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
}

interface AddressCreateRequest {
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
  contact_id: number;
}

interface AddressUpdateRequest {
  id: number;
  street?: string;
  city?: string;
  province?: string;
  country?: string;
  postal_code?: string;
  contact_id: number;
}

interface AddressGetRequest {
  id: number;
  contact_id: number;
}

interface AddressDeleteRequest extends AddressGetRequest {
}


const toAddressResponse = (address: Address): AddressResponse => {
  return {
    id: address.id,
    street: address.street || undefined,
    city: address.city|| undefined,
    province: address.province ||undefined,
    country: address.country,
    postal_code: address.postal_code
  }
}

export type {AddressResponse, AddressCreateRequest, AddressUpdateRequest, AddressGetRequest, AddressDeleteRequest}
export {toAddressResponse}