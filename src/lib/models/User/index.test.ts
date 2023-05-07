import { UserModelSchema } from "~/lib/models/User";

describe("UserModelSchema", () => {
  it("should validate a valid user", () => {
    const user = {
      id: "123",
      name: "John Doe",
      address: "123 Main St.",
    };
    expect(UserModelSchema.safeParse(user).success).toBe(true);
  });
  it("should not validate an invalid user", () => {
    const user = {
      id: "123",
      name: "John Doe",
      address: 123,
    };
    expect(UserModelSchema.safeParse(user).success).toBe(false);
  });
});
