/* 
    Exercício 2: Leitura de Arquivo com Callback
    Escreva uma função lerArquivo que aceita um nome de arquivo e uma função de retorno de chamada
    (callback). A função deve ler o conteúdo do arquivo e passá-lo para a função de retorno de chamada. Por fim,
    chame a função lerArquivo() usando um callback que faça o conteúdo do arquivo ser exibido no console.
 */

const fs = require('fs');

//o método readFile lê o conteúdo de um arquivo identificado
//por filename (coloque o nome do arquivo e o caminho dele,
// ex: './textoExercicio2.txt' ) e entrega esse conteúdo dentro //do objeto "data"

const filename = "src/exersicepromises/textoExercicio.txt";

function lerArquivo(arquivo, cb){
    
    fs.readFile(arquivo,'utf-8',(err, data) => {
     if (err) {
     //Aqui escrevemos um tratamento para um erro na tentativa de leitura do aquivo
        console.log("sorry! Não foi possivél ler o arquivo.");
        console.error(err.message);
        return;
     }

     //Aqui escrevemos o que deve ser feito com o objeto "data"
    cb(data);
    });
    
}

lerArquivo(filename, (content) =>{
    console.log(content);
})
