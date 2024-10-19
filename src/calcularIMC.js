function EfetuarCalculoIMC(peso, altura) { 
  let imc = peso / (altura * altura);

  return imc;
};

function EetornarStatusIMC(imc) {
  let status;

  if(imc < 18.5) {
    status = 'Abaixo do peso';
  } else if(imc >= 18.5 && imc <= 24.9) {
    status = 'Peso normal';
  } else if(imc >= 24.9 && imc < 30) {
    status = 'Acima do peso';
  } else {
    status = 'Com obesidade';
  }

  return status;
};
function ValidarParametro(parametro) {
  if(isNaN(parametro)) {
    return false;
  } else {
    return true;
  }
};

exports.EfetuarCalculoIMC = EfetuarCalculoIMC;
exports.EetornarStatusIMC = EetornarStatusIMC;
exports.ValidarParametro = ValidarParametro;
