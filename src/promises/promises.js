const isJesusFaithful = true;

const promise = new Promise((resolve, reject) => {
    console.log('Criando o Mundo...');
    setTimeout(()=> {
        if (isJesusFaithful){
            resolve("At the beging God create the world and...\n Genises 1:1");
        }else {
            reject("What's your problem? ")
        }
    },2000);
});

/* promise.then((response) => {
    console.log(response);
    console.log("Jesus is Faithful!");
}); */

//promise.catch( error => console.error(error));

console.log(promise);

promise.then((response) => {
    console.log(response);
    console.log("Jesus is Faithful!");
})
.catch( error => console.error(error));