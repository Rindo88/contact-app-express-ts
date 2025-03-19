import { z, ZodType } from "zod";

class AddressValidation {
  static CREATE: ZodType = z.object({
    city: z.string().min(1).optional(),
    street: z.string().min(1).optional(),
    province: z.string().min(1).optional(),
    country: z.string().min(1),
    postal_code: z.string().min(1).max(8),
    contact_id: z.number().positive()
  });

  static GET: ZodType = z.object({
    id: z.number().min(1).positive(),
    contact_id: z.number().min(1).positive()
  });

  static DELETE = z.object({
    id: z.number().min(1).positive(),
    contact_id: z.number().min(1).positive()
  });

  static UPDATE: ZodType = z.object({
    id: z.number().positive(),
    city: z.string().min(1).optional(),
    street: z.string().min(1).optional(),
    province: z.string().min(1).optional(),
    country: z.string().min(1).optional(),
    postal_code: z.string().min(1).max(8).optional(),
    contact_id: z.number().positive()
  });

}

export default AddressValidation;