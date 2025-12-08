import z from 'zod';

export const loginValidation = z.object({
  body: z
    .object({
      phone_number: z.string({
        error: 'Phone number is required',
      }),
      password: z.string({
        error: 'Password must be provided',
      }),
    })
    .strict(),
});
