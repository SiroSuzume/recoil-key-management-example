import { generateRecoilKey } from "~/recoil";
import parentKey from "../key";

const key = "user";
export default generateRecoilKey(parentKey, key);
