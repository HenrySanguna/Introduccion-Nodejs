module.exports.info = function info(text) { //Exportacion parcial
    console.log('INFO', text);
    return text;
  }

function error(text) {
    console.log('ERROR', text);
    return text;
}
//Exportacion global
// module.exports={info, error};


