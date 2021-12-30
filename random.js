let name =["JAMES","JONES","MIKE","MARTY","Rick","Gojo","GOKU","VEGETA"];

let buttON = document.querySelector(".btn");
let randDOM = document.querySelector(".random")


buttON.addEventListener('click',randm);

function randm(){
    randDOM.innerHTML = name[Math.floor(Math.random()*7)];
    console.log(randDOM.innerHTML);
}