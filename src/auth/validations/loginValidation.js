import { z } from "zod";
import { regularExpressions } from "../../utilities";

const { EMAIL, PASSWORD } = regularExpressions;

export const loginValidation = z.object({
    email: z.string().refine((value) => EMAIL.test(value), {
        message: "Email invalid, must be a valid email address",
    }),
    password: z.string().refine((value) => PASSWORD.test(value), {
        message: "Password invalid, must be at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    }),
});
