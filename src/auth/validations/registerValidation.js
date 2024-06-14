import { loginValidation } from "./loginValidation";
import { z } from "zod";

export const registerValidation = z.object({
  first_name: z
    .string({
      message: "Invalid name",
    })
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(200, {
      message: "Name must be at most 200 characters long",
    }),
  last_name: z
    .string()
    .min(3, {
      message: "Lastname must be at least 3 characters long",
    })
    .max(200, {
      message: "Lastname must be at most 200 characters long",
    }),
    ...loginValidation.shape,
});