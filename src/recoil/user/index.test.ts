import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import key from "./key";

import { useSetUser, useUser } from ".";
import { generateMockUserModel } from "~/lib/models/User/index.mock";

function useMockHooks() {
  return {
    ...useUser(),
    ...useSetUser(),
  };
}

describe(key, () => {
  it("set value", () => {
    const user = generateMockUserModel({
      id: "1",
      name: "mojo",
      address: "123 main st",
    });
    const { result } = renderHook(useMockHooks, { wrapper: RecoilRoot });
    act(() => {
      result.current.setUser(user);
    });
    expect(result.current.user).toStrictEqual(user);
  });
});
