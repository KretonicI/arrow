
/*function getX(){
    return Math.random() >= 0.5;
}
*/
const getX = () => Math.random() >= 0.5;
let ispisi = new Promise (function (resolve, reject){
    console.log("pozvan promise object");
    let x = getX();
    if (x== true){
        return resolve;
    }
    return reject;
})
.then (console.log("neka vrijednost"))
.catch (console.log("Oh no!"));
