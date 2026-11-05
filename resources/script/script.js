
// function somar() {
//     let n1 = parseFloat(document.getElementById("numero1").value);
//     let n2 = parseFloat(document.getElementById("numero2").value);

//     if (isNaN(n1) || isNaN(n2)) {
//         document.getElementById("resultado").innerHTML =
//             "Digite os dois números!";
//     } else {
//         let soma = n1 + n2;

//         document.getElementById("resultado").innerHTML =
//             "Resultado: " + soma;
//     }
// }



// function alterarCor() {

//     let cor = document.getElementById("cores").value;

//     let texto = document.getElementById("texto");

//     if (cor == "red") {
//         texto.style.color = "red";

//     } else if (cor == "blue") {
//         texto.style.color = "blue";

//     } else if (cor == "green") {
//         texto.style.color = "green";

//     } else {
//         texto.style.color = "black";
//     }

// }



// function verificar() {

//     let numero = Number(document.getElementById("numero").value);

//     let resultado = document.getElementById("resultado");

//     if (document.getElementById("numero").value === "") {
//         resultado.innerHTML = "Digite um número!";
//     }

//     else if (numero % 2 == 0) {
//         resultado.innerHTML = "O número é PAR!";
//         resultado.style.color = "green";
//     }

//     else {
//         resultado.innerHTML = "O número é ÍMPAR!";
//         resultado.style.color = "red";
//     }

// }



// function calcularMedia() {

//     let nome = document.getElementById("nome").value;

//     let nota1 = Number(document.getElementById("nota1").value);
//     let nota2 = Number(document.getElementById("nota2").value);
//     let nota3 = Number(document.getElementById("nota3").value);

//     let resultado = document.getElementById("resultado");

//     if (nome.trim() === "" ||
//         document.getElementById("nota1").value === "" ||
//         document.getElementById("nota2").value === "" ||
//         document.getElementById("nota3").value === "") {

//         resultado.innerHTML = "Preencha todos os campos!";
//         resultado.style.color = "black";

//     } else if (
//         nota1 < 0 || nota1 > 10 ||
//         nota2 < 0 || nota2 > 10 ||
//         nota3 < 0 || nota3 > 10
//     ) {

//         resultado.innerHTML = "As notas devem estar entre 0 e 10!";
//         resultado.style.color = "red";

//     } else {

//         let media = (nota1 + nota2 + nota3) / 3;

//         if (media >= 7) {

//             resultado.innerHTML =
//                 "Olá, " + nome + ", você passou! Média: " + media.toFixed(2);

//             resultado.style.color = "green";

//         } else {

//             resultado.innerHTML =
//                 "Olá, " + nome + ", você reprovou! Média: " + media.toFixed(2);

//             resultado.style.color = "red";

//         }
//     }
// }



// function calcular() {

//     let numero = Number(document.getElementById("numero").value);

//     let resultado = document.getElementById("resultado");

//     if (document.getElementById("numero").value === "") {

//         resultado.innerHTML = "Digite um número!";

//     } else {

//         let antecessor = numero - 1;

//         let sucessor = numero + 1;

//         resultado.innerHTML =
//             "Antecessor: " + antecessor +
//             "<br> Sucessor: " + sucessor;

//     }

// }
 


// let numero = 0;

// function incrementar() {

//     numero = numero + 1;

//     document.getElementById("numero").innerHTML = numero;

// }

// function decrementar() {

//     numero = numero - 1;

//     document.getElementById("numero").innerHTML = numero;

// }



// function sortear() {

//     let numero = Number(document.getElementById("numero").value);

//     let resultado = document.getElementById("resultado");

//     if (document.getElementById("numero").value === "") {

//         resultado.innerHTML = "Digite um número!";

//         resultado.style.color = "red";

//     } else if (numero < 1 || numero > 100 || !Number.isInteger(numero)) {

//         resultado.innerHTML = "Digite um número inteiro entre 1 e 100!";

//         resultado.style.color = "red";

//     } else {

//         let sorteado = Math.floor(Math.random() * 100) + 1;

//         if (numero == sorteado) {

//             resultado.innerHTML =
//                 "Número Sorteado: " + sorteado +
//                 ". Parabéns, você acertou!";

//             resultado.style.color = "green";

//         } else {

//             resultado.innerHTML =
//                 "Número Sorteado: " + sorteado +
//                 ". Infelizmente, você errou. Tente novamente!";

//             resultado.style.color = "red";

//         }

//     }

// }



function calcularIMC() {

    let peso = Number(document.getElementById("peso").value);

    let altura = Number(document.getElementById("altura").value);

    let resultado = document.getElementById("resultado");

    if (peso <= 0 || altura <= 0 ||
        document.getElementById("peso").value === "" ||
        document.getElementById("altura").value === "") {

        resultado.innerHTML = "Digite um peso e uma altura válidos!";

        resultado.style.color = "red";

    } else {

        let imc = peso / (altura * altura);

        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(1);

        resultado.style.color = "green";

    }

}
