const express =  require('express');
const app = express();

const {EfetuarCalculoIMC, EetornarStatusIMC, ValidarParametro} = require('./calcularIMC');

app.get('/', (req, res) => {
  let peso = req.query.peso;
  let altura = req.query.altura;

  if(ValidarParametro(peso) && ValidarParametro(altura)) {
    let imc = EfetuarCalculoIMC(peso, altura);
    let status = EetornarStatusIMC(imc);
  
    let json = {imc: imc, status: status}
    res.status(200).json(json);
  } else {
    res.status(400).json({messagem: 'O peso ou a altura não é um número!'});
  }

  
});

app.listen(3333, () => {
  let data = new Date();
  console.log("Servidor funcionamento desde: " + data);
})
