const fs = require('fs');
const path = require('path')
const {start} = require('./index')
const process = require('process')

function printInBox(str){
    console.log(`┌-${'-'.repeat(str.length)}-┐`)
    console.log(`| ${str} |`)
    console.log(`└-${'-'.repeat(str.length)}-┘`)
}

function printDocumentation(){
    // usage
    console.log('\n} * '+"=".repeat(process.stdout.columns-8)+' * {\n\n')
    
    console.log(printInBox('caval <opt.> <filename>'))

    // commands??
    

    // help
    console.log('\n\n\nHELP: at github(https://github.com/toastack/cavalir)\nor our Homepage(https://cavalir.dev/docs)')
}

module.exports = (args) => {
    switch (args[1]) {
        case "help":
            printDocumentation()
            break;
    
        default:
            if (fs.existsSync(
                path.join(process.cwd(), args[1])
            )) {
                start(
                    fs.readFileSync(path.join(process.cwd(), args[1]))
                )
            }
            break;
    }
}