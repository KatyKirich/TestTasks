const fs = require('fs')
const path=require('path')
const zlib = require('zlib')

const inpPath = './input'

function getFileName(path, callback) {
    fs.readdir(path, function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

getFileName(inpPath, function (err, files) {

    const readStream = fileNames.forEach((i)=>{
        fs.createReadStream(path.join(inpPath, i)
    )})
    
    const writeStream = fileNames.forEach((i)=>{
        fs.createWriteStream(path.join(inpPath, i)
    )})

    const compressStream = zlib.createGzip()

    readStream.pipe(compressStream).pipe(writeStream)
    fileNames = files
    console.log('File Names:')
    console.log(fileNames)
})



 
    

    


