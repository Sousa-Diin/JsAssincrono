/* 
 *   Exercício 1: Callback Simples
 *   Escreva uma função imprimirMensagem que aceita uma mensagem e uma função de retorno de chamada
 *   (callback). A função deve imprimir a mensagem no console e, em seguida, invocar a função de retorno de
 *   chamada.
*/

function imprimirMensagem(msg, cb){
    console.log(msg);
    cb();
}

imprimirMensagem("Este é uma mensagem de teste de callbacks.", () => {
    console.log("callback invocada.");
});
