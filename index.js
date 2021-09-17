let goodHealth = true;

let willParty = new Promise(
    function(resolve, reject) {
        if(goodHealth){
            let party = "We will a party and cakes";
            resolve(party);
        } else {
            let reason = new Error("We will a party but no have cake")
            reject(reason);
        } 
    }
)

let haveParty = () => {
    willParty
    .then(function(fullfilled){
        console.log(fullfilled);
    })
    .catch(function(error){
        console.log(error.message);
    })
}

haveParty();
