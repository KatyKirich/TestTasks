const movingFiles = require("./modules/index");

const iPath = "./input";
const oPath = "./output";

console.log("Start");

movingFiles(iPath, oPath).then(() => console.log("job is done!"));
