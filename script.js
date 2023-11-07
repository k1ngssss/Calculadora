function calcular() {
    let valor = parseFloat(document.getElementById('valor').value);
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let idadea = parseFloat(document.getElementById('idadea').value);
    let idaded = parseFloat(document.getElementById('idaded').value);
    let valorp = parseFloat(document.getElementById('valorp').value);
    let numero = parseFloat(document.getElementById('numero').value);
    let raio = parseFloat(document.getElementById('raio').value);

// Verificar se algum campo está vazio ou não é um número
if (isNaN(valor) || isNaN(base) || isNaN(altura) || isNaN(idadea) || isNaN(idaded) || isNaN(valorp) || isNaN(numero) || isNaN(raio)) {
    alert("Por favor preencha todos os campos.");
    return;
}    

//Sucessor/ antecessor
let sucessor = valor + 1
let antecessor = valor - 1

//Área e perímetro
let area = base * altura
let perímetro = (base * 2) + (altura * 2)

//Idade (anos para dias)
let idadeDias = idadea * 365

//Idade (dias para anos)
let idadeAnos = idaded / 365

//10% desconto
let valorP = valorp * 0.9 

//Operações numéricas
let metade = numero / 2
let dobro = numero * 2
let quadrado = numero * numero
let cubo = numero * numero * numero

//Área e perímetro do círculo
let perímetroc = 2 * raio * Math.PI
perímetroc = perímetroc.toFixed(2);
let areac = Math.PI * raio * raio
areac = areac.toFixed(2);

//Calculadora HTML
document.getElementById('outputHTML').innerHTML = `
<p>Sucessor | Antecessor: Sucessor = ${sucessor}, Antecessor = ${antecessor}</p>
<p>Área | Perímetro: Área = ${area}, Perímetro = ${perímetro}</p>
<p>Idade (dias):  = ${idadeDias}</p>
<p>Idade (anos):  = ${idadeAnos}</p>
<p>Desconto 10%: Valor com desconto = ${valorP}</p>
<p>Metade | Dobro | Quadrado | Cubo: Metade = ${metade}, Dobro = ${dobro}, Quadrado = ${quadrado}, Cubo = ${cubo}</p>
<p>Perímetro e área do círculo: Perímetro= ${perímetroc}, Área = ${areac}</p>
`;
}

