let div=document.createElement("div");
div.setAttribute("class","container");
let row=document.createElement("div");
row.setAttribute("class","row");
let h1=document.createElement('h1');
h1.setAttribute("class","title");
h1.innerHTML="Harry Potter Franchise Characters"


async function getApi(){

let f=fetch("https://hp-api.onrender.com/api/characters");

let data= await (await f).json();
try{
for(let i of data){
  let card=document.createElement("div");
  card.setAttribute("class","col");
  card.innerHTML+=`<div class="card" style="width: 18rem;">
  <img src="${i.image}" class="card-img-top" alt="${i.name}">
  <div class="card-body">
    <h5 class="card-title">${i.name}</h5>
    <p class="card-subtitle mb-2 text-muted"> <b>Real name:</b> ${i.actor}</p>
    <p class="card-text"><b>House:</b> ${i.house} <br> <b>Ancestry:</b>${i.ancestry}  <br>  <b>Wand:</b> ${i.wand.core}   </p>
    
  </div>
</div>`


row.append(card);
}
}
catch(err){
console.log(err);
}
}

getApi();

div.append(h1,row);
document.body.append(div);