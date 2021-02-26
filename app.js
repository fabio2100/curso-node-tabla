
const { options } = require('yargs');
const {crearArchivoTabla} = require('./helpers/multiplicar.js')
const argv = require('./config/yargs.js');
const colors = require('colors')

console.clear()


//console.log(process.argv)
console.log('base:yargs',argv.base,argv.listar,argv.hasta)

//console.log(process.argv)

//const [, , arg3='base=5'] = process.argv          //la ventaja de la desestructuración es que puedo predefinir un valor
//console.log(arg3)

//const [,base=10]=arg3.split('=')

//console.log(base)


crearArchivoTabla(argv.base,argv.listar,argv.hasta)
.then(nombreArchivoTabla => console.log(nombreArchivoTabla.rainbow,'creado'))
  .catch(err => console.log(err))

