const movingFiles = require("./modules/index");
const folderCheck = require("./modules/folderCheck");

const iPath = "./input";
const oPath = "./output";

folderCheck(oPath);
console.log("Start");

movingFiles(iPath, oPath).then(() => console.log("job is done!"));
