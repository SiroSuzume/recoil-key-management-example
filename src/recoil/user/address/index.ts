import { selector, useRecoilValue } from "recoil";

import key from "./key";
import { userAtom } from "~/recoil/user";

export const addressSelector = selector<string | undefined>({
  key,
  get: ({ get }) => {
    return get(userAtom)?.address;
  },
});

export type UseAddressResultType = {
  address: string | undefined;
};
export function useAddress(): UseAddressResultType {
  const address = useRecoilValue(addressSelector);
  return { address };
}
