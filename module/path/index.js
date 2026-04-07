import path from "path"
import { fileURLToPath } from "url"
const _fileName = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_fileName)
const fullpath = path.join(_dirname,'ex','output.txt')
console.log("Full path",fullpath)
// console.log(_fileName)
console.log("BaseName",path.basename('/foo/bar/baz/asdf/quux.html'))

