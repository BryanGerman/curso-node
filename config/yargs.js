const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base a multiplicar'
}).option('l',{
    alias: 'listar',
    type: 'boolean',
    default: false
}).option('h',{
    alias: "hasta",
    type: 'number',
    demandOption: false,
    describe: 'Es el número límite'
}).check((args, option) => {
    if (isNaN(args.b)){
        throw 'La base debe ser un número'
    }
    return true
}).argv

module.exports = argv