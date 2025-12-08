import z from "zod";

export const changePasswordValidation = z.object({
  body: z
    .object({
      old_password: z
        .string({
          error: "Old Password is required",
        })
        .min(1, "Old Password couldn't be empty"),
      new_password: z
        .string({
          error: "New Password is required",
        })
        .min(6, "New Password must be at least 6 characters")
        .max(15, "New Password must be less than 15 characters"),
    })
    .strict(),
});
