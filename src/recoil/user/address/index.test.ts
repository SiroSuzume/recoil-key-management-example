import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import key from "./key";

import { useSetUser } from "~/recoil/user";
import { useAddress } from ".";
import { generateMockUserModel } from "~/lib/models/User/index.mock";

function useMockHooks() {
  return {
    ...useAddress(),

    ...useSetUser(),
  };
}

describe(key, () => {
  it("set value", () => {
    const user = generateMockUserModel({
      address: "foo",
    });
    const { result } = renderHook(useMockHooks, { wrapper: RecoilRoot });
    act(() => {
      result.current.setUser(user);
    });
    expect(result.current.address).toBe("foo");
  });
});
