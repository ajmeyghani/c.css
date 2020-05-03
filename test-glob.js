const glob = require('glob');

const r = glob.sync("./src/**/*.css", { ignore: "./src/header.css"})

console.log(r)
