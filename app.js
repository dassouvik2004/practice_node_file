const fs = require('fs')

fs.readFile(__filename, () => {
    console.log("IO");

    setTimeout( () => console.log("Timeout"),0);
    setImmediate( () => console.log("Immediate"));
})

