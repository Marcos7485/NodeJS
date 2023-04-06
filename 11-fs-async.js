const { readFile, writeFile } = require('fs');

readFile('./content/first.xt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-sync.txt'
                `Here is the result: ${first}, ${second}`
            , (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result);
            })
    })
})
