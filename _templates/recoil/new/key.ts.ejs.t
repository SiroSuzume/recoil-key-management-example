---
to: <%= path %>/<%= key %>/key.ts
---
import { generateRecoilKey } from "~/recoil"
import parentKey from "../key"

const key = "<%= key %>"
export default generateRecoilKey(parentKey, key)
