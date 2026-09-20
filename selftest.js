// Runs the in-page self-tests (index.html#selftest) under node, for CI.
// ponytail: evaluating the page's own script beats maintaining a second copy.
const fs = require("fs");
const page = fs.readFileSync(__dirname + "/index.html", "utf8");
const script = page.split("<script>")[1].split("</scr" + "ipt>")[0];
const stub = () => ({addEventListener(){}, innerHTML:"", scrollIntoView(){},
                     reset(){}, querySelectorAll: () => []});
global.document = {getElementById: stub};
global.location = {hash: "#selftest"};
global.window = {scrollTo(){}, print(){}};
global.FormData = function(){ this.forEach = () => {}; };
global.localStorage = {getItem: () => null, setItem(){}, removeItem(){}};
eval(script);
