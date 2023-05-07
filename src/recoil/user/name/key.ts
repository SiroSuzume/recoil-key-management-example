import { generateRecoilKey } from "~/recoil"
import parentKey from "../key"

const key = "name"
export default generateRecoilKey(parentKey, key)
