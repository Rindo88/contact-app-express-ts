import { z, ZodType } from "zod";

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
}

export default ContactValidation;