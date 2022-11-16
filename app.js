const yargs = require('yargs');
const { number } = require('yargs');
const {crearArchivoTabla} = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h).then(nombreDelArchivo => {console.log(`${nombreDelArchivo} creada`)}).catch(err => { console.log(err)})

