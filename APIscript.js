var request = new XMLHttpRequest();
//end pint data: https://xsmilex007.github.io/JS-API-example/mydata.json
request.open(
    "GET","https://xsmilex007.github.io/JS-API-example/mydata.json",
true
);
request.send();
request.onload = function (result){
    console.log(result.currentTarget.response);

    const obj = JSON.parse(result.currentTarget.response);
    let grad = obj.request.query;
    console.log("isparsani grad je: " + grad);
let country = obj.location.country;
let regija = obj.location.region;
let temperatura = obj.current.temparature;
let uvIndex = obj.current.uv_index

console.log(`Country=${country}|Regija:${regija}|UVIndex=${uvIndex}`);

document.getElementById("grad").textContent = grad;

}