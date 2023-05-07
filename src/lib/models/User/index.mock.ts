import { UserModel } from ".";

export function generateMockUserModel(
  override: Partial<UserModel> = {}
): UserModel {
  return {
    id: "id",
    name: "name",
    address: "address",
    ...override,
  };
}
