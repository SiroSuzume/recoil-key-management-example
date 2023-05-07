import { atom, useSetRecoilState, useRecoilValue } from "recoil";

import key from "./key";
import { UserModel } from "~/lib/models/User";

export const userAtom = atom<UserModel>({
  key,
  default: undefined,
});

export type UseUserResultType = {
  user: UserModel;
};
export function useUser(): UseUserResultType {
  const user = useRecoilValue(userAtom);
  return { user };
}

export type UseSetUserResultType = {
  setUser: (user: UserModel) => void;
};

export function useSetUser(): UseSetUserResultType {
  const setUser = useSetRecoilState(userAtom);
  return { setUser };
}
