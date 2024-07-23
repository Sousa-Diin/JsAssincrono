/* const promise1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve(1500);
    }, 2000);
});

const promise2 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve(3500);
    }, 2000);
});

Promise.all([promise1,  promise2]).then(console.log); */

async function generationTotalPrice(){
    const startTime = Date.now();
    let p1, p2;
    Promise.all([
    
        new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(1500);
                p1 = resolve;
            }, 2000);
        }),
        
        new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(3500);
                p2 = resolve;
            }, 2000);
        })
    
    ])
    .then(console.log)
    .then(() => { 
        const endTime = Date.now();
        console.log(`elapsedTime ${endTime - startTime}ms`);
    });
}

generationTotalPrice();