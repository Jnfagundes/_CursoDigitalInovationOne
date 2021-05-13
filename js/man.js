
 let nome = "José Nilton";
alert("Bem vindo " + nome); //O sinal de + está concatenando a string com a variável

var lista = ["maçã", "pêra", "uva"]; /*Criação de uma estrutura do tipo lista*/
lista.push("laranja"); /*Com esse comando acrescentamos itens na lista*/
//lista.pop(); /*Com esse comando excluimos o ultimo item da lista*/
console.log(lista); /*Apresentação dessa estrutura dentro do console*/
console.log(lista.length); //Esse comando mostra o tamanho da lista.
console.log(lista.reverse()); // Esse comando mostra a lista de forma inversa.
console.log(lista.toString()); // Mostra a lista como string
console.log(lista.join("  -  ")); //Faz a mesma coisa do toString, porém permite escolher o que vai separar cada item
alert(lista); /*Apresentação dessa estrutura dentro do navegador*/

var fruta = {nome:"maçã", cor:"vermelha"}; //Criação do discionário
console.log(fruta); // Apresentação dentro do console
alert(fruta.nome); //Apresentação dentro da página

let idade = prompt("Qual a sua idade? "); //Esse comando pergunta, via página, qual a idade do usuário

if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("menor de idade");
}

let count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++
}

let contador = 0;
for (contador = 0; contador <= 5; contador++) {
    alert("Contagem com for: " +  contador );
}

let d = new Date();
alert(d);