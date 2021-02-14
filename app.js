window.onload = function  ( ){ 
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

let domain =  pronoun[(Math.floor(Math.random() * pronoun.length))] +
               adj[(Math.floor(Math.random() * adj.length))] +
               noun[(Math.floor(Math.random() * noun.length))] + ".com"
console.log(domain)
document.querySelector("#mensaje").innerHTML = domain;
}
