import { FileBasedRouting } from "ziko";



FileBasedRouting(import.meta.glob("./src/pages/**/*{.js,.mdz}"))
// const pages = import.meta.glob("./src/pages/**/*.js")
// console.log(Object.keys(pages))
