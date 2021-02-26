const argv = require('yargs')
  .option('b',{
    alias: 'base',
    type : 'number',
    demandOption: true,
    describe: "Es la base sobre la cual se calculará la tabla"
  })
  .option('l',{
    alias: 'listar',
    type : 'boolean',
    default:false ,
    describe:"Muestra tabla en consola"
  })
  .option('h',{
    alias: 'hasta',
    type : 'number',
    default : 10,
    describe : "Valor hasta el que se desea realizar la tabla, default 10"
  })
  .check((argv,options)=>{
    console.log('yargs',argv);
    if (isNaN(argv.base)){
      throw "La base debe ser un número";
    }
    if (isNaN(argv.hasta)){
      throw "El valor hasta debe ser un número";
    }
    return true;
  })
  
  .argv;

  module.exports = argv;