import { generateRecoilKey } from "~/recoil"
import parentKey from "../key"

const key = "address"
export default generateRecoilKey(parentKey, key)
