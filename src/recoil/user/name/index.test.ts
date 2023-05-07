import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import key from "./key";

import { useName } from ".";
import { useSetUser } from "~/recoil/user";
import { generateMockUserModel } from "~/lib/models/User/index.mock";

function useMockHooks() {
  return {
    ...useName(),
    ...useSetUser(),
  };
}

describe(key, () => {
  it("set value", () => {
    const user = generateMockUserModel({
      name: "foo",
    });
    const { result } = renderHook(useMockHooks, { wrapper: RecoilRoot });
    act(() => {
      result.current.setUser(user);
    });
    expect(result.current.name).toBe("foo");
  });
});
