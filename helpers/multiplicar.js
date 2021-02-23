const fs = require('fs');
const crearArchivo = async(multiplier = 5, listar = false, hasta = 10) =>{
  if(listar){
    console.log('=====================');
    console.log(`   Tabla del ${multiplier} ` );
    console.log('=====================');

    let salida ='';
    for(let i = 0; i < hasta; i++){
      salida += `${multiplier} X ${i+1} = ${multiplier*(i+1)}\n`;
    }
    console.log(salida);
    try{
      fs.writeFileSync(`./salida/${multiplier}-multiplier-table.txt`, salida);
      return `${multiplier}-multiplier-table.txt`;  
    } catch(error){
      throw(error);
    }
  }else{
    let  max = 10;
    let salida ='';
    for(let i = 0; i < max; i++){
      salida += `${multiplier} X ${i+1} = ${multiplier*(i+1)}\n`;
    }
    try{
      fs.writeFileSync(`./${multiplier}-multiplier-table.txt`, salida);
      return `${multiplier}-multiplier-table.txt`;  
    } catch(error){
      throw(error);
    }
  }
  // fs.writeFile(`./${multiplier}-multiplier-table.txt`, salida, (err) =>{
  //   if (err) throw err;
  //   console.log('file was created!');
  // })
  
  
}

module.exports = {
  crearArchivo: crearArchivo
}