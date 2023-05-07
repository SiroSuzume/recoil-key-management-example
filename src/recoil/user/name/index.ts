import { selector, useRecoilValue } from "recoil";

import key from "./key";
import { userAtom } from "~/recoil/user";

export const nameSelector = selector<string | undefined>({
  key,
  get: ({ get }) => {
    return get(userAtom)?.name;
  },
});

export type UseNameResultType = {
  name: string | undefined;
};
export function useName(): UseNameResultType {
  const name = useRecoilValue(nameSelector);
  return { name };
}
