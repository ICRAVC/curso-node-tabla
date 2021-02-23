const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();


// const [,,a3 = 'base = 5'] = process.argv;
// const[,base = 5] = a3.split('=');
// console.log(a3, base);
// console.log(argv);
// console.log('base: yargs', argv.base);
const base = argv.b;
const listar = argv.l;
const hasta = argv.h;


crearArchivo(base, listar, hasta)
  .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));
