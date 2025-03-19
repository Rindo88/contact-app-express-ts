import { number, z, ZodType } from "zod";

class ContactValidation {
  static readonly CREATE: ZodType = z.object({
    first_name: z.string().min(1).max(100),
    last_name: z.string().min(1).max(100).optional(),
    email: z.string().min(1).max(100).optional(),
    phone: z.string().max(15).regex(/^\d+$/, {
      message: "Phone number must contain only digits"
    }).optional()
  });

  static readonly UPDATE: ZodType = z.object({
    first_name: z.string().min(1).max(100).optional(),
    last_name: z.string().min(1).max(100).optional(),
    email: z.string().min(1).max(100).optional(),
    phone: z.string().max(15).regex(/^\d+$/, {
      message: "Phone number must contain only digits"
    }).optional()
  });

  static SEARCH: ZodType = z.object({
    name: z.string().min(1).max(100).optional(),
    email: z.string().min(1).max(100).optional(),
    phone: z.string().max(15).regex(/^\d+$/, {
      message: "Phone number must contain only digits"
    }).optional(),
    page: z.number().min(1).positive(),
    size: z.number().min(1).max(100).positive()
  })
}

export default ContactValidation;