import { z } from "zod";

export const UserModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
});

export type UserModel = z.infer<typeof UserModelSchema>;
