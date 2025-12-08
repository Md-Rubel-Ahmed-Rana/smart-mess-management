import z from 'zod';

export const resetPasswordValidation = z.object({
  body: z
    .object({
      phone_number: z.string({
        error: 'Phone number is required',
      }),
      password: z
        .string({
          error: 'Password is required',
        })
        .min(6, 'Password must be at least 6 characters')
        .max(15, 'Password must be less than 15 characters'),
    })
    .strict(),
});
