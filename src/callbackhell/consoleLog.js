//user <= {}
//friends => ['joão', 'bruna','felipe', 'wildes'];
//photos <= ['egito', 'bahamas', 'maldivas', 'suécia'];
/* 
function getUser(callback){
    setTimeout(()=> {
        console.log('Recuperando informações do usuário');
        callback({id:0, name:'Wildes',surname:'Sousa'});
    },2000);
}

//getUser( console.log );

/*
* Recuperar lista de amigos a partir do usuario
*/
/*
function getFriendList(user, callback){
    console.log(
        `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
    );
   
    setTimeout(()=>{
        callback(['joão', 'bruna','felipe', 'wildes']);
    },2000);
}

function getPhotos(username, callback){
    console.log(`Recuperando lista de fotos do usuário ${username}`);
    setTimeout(()=> {
        callback(['egito', 'bahamas', 'maldivas', 'suécia']);
    },2000);
}

getUser((user)=> 
    getFriendList(user, (friends)=> { 
        getPhotos(friends[3], console.log);
    })
); */

function getUser(){
    console.log('Recuperando informações do usuário');
    const promise1 = new Promise((resolve)=>{
        setTimeout(()=> {
            resolve({id:0, name:'Wildes',surname:'Sousa'});
        },2000);
    });   
    return promise1;
}

function getFriendList(user){
    console.log(
        `Recuperando lista de amigos do usuário ${user.name} ${user.surname}`
    );

    const friendsUser = new Promise(resolve => {
        setTimeout(()=>{
            resolve(['joão', 'bruna','felipe', 'wildes']);
        },2000);
    });
    return friendsUser;
}

function getPhotos(username){
    console.log(`Recuperando lista de fotos do usuário ${username}`);
    const photosList = new Promise((resolve, reject) =>{
        setTimeout(()=> {
           // resolve(['egito', 'bahamas', 'maldivas', 'suécia']);
           reject("Que pena! as fotos não podem ser exibidas.")
        },2000);
    });
    return photosList;
}
/* 
getUser()
.then(user => getFriendList(user))
.then(friends => getPhotos(friends[3]))
.then(photos => console.log(photos))
.catch((error)=> console.error(error)); */
   
/* async function handleViwerProfile(){
    const user =  await getUser();
    const friends = await getFriendList(user);
    const photos = await getPhotos(friends[3]);
    console.log(photos);
}

handleViwerProfile(); */

async function handleViwerProfile(){
    try {
        const user =  await getUser();
        const friends = await getFriendList(user);
        const photos = await getPhotos(friends[3]);
        console.log(photos);
        
    } catch (error) {
        console.error(error);
    }finally{
        console.log("Fim do processo!");
    }
}

handleViwerProfile();