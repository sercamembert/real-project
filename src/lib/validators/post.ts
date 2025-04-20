import { z } from "zod";

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(128, { message: "Title cant be longer than 128 characters" }),
  content: z.any(),
});

export type PostCreationRequest = z.infer<typeof PostValidator>;
