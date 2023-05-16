// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Qual a altura do retangulo ? "))
  const base = Number(prompt("Qual a base do retangulo ? "))
  calculaAreaRetangulo = base * altura
  console.log(calculaAreaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual o ano atual ? "))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento ? "))
  imprimeIdade = anoAtual - anoNascimento
  console.log(imprimeIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return (peso/(altura*altura)) 

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome ? ")
  const idade = Number(prompt("Qual o ano atual ? "))
  const email = prompt("Qual é o seu email ? ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua cor preferida")
  const cor2 = prompt("Qual sua segunda cor favorita")
  const cor3 = prompt("Qual sua terceira cor favorita")
  let arrayCores = []
  arrayCores.push(cor1, cor2, cor3)
  console.log(arrayCores)  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const retornaStringEmMaiuscula = string.toUpperCase()
  return retornaStringEmMaiuscula
 

}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   let valorLiquido = custo / valorIngresso
   return valorLiquido
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  verifica = (string1.length) === (string2.length)
  return verifica 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

  // implemente sua lógica aqui
 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanho = array.length
  return array[tamanho-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[array.length - 1]
  array[0] = ultimo
  array[array.length - 1] = primeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(" Ano atual"))
  const anoNascimento = Number(prompt("Ano nascimento"))
  const carteiraDeIdentidade = Number(prompt("Data emissão de identidade"))
  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - carteiraDeIdentidade

  if (idade <= 20 || idade === 20)
    if (tempoRG >= 5 || tempoRG === 5) 
      console.log(true)
   else 
    console.log(false)
  
    else if(( idade > 20 && idade <= 50) || idade ===50)
    if (tempoRG >= 10 || tempoRG === 10)
    console.log(true)
    else
    console.log(false)

    else
    if(tempoRG >=15)
    console.log(true)
    else 
    console.log(false)

  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 if (( ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !==0))
 return true
 else return false

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = (prompt("Você tem mais de 18 anos? "))
  const medio = prompt("Possui ensino médio completo? ")
  const disponibilidade = prompt("Disponibilidade para o horário do curso")
  const idade18 = idade === "sim"
  const medioSim = medio ==="sim"
  const disponibilidadeSim = disponibilidade ==="sim"
  const inscricaoOK = idade18 && medioSim && disponibilidadeSim
  console.log(inscricaoOK) 

}