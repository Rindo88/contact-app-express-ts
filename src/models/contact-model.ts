import { Contact } from "@prisma/client";

interface ContactResponse {
  readonly id: number;
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

interface ContactCreateRequest {
  first_name: string;
  last_name?: string;
  email?: string;
  phone: string;
}

interface ContactUpdateRequest {
  readonly id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}


const toContactResponse = (contact: Contact): ContactResponse => {
  return {
    id: contact.id,
    first_name: contact.first_name,
    last_name: contact.last_name || undefined,
    email: contact.email || undefined,
    phone: contact.phone || undefined
  }
}


export type {ContactCreateRequest, ContactResponse, ContactUpdateRequest}
export {toContactResponse}