window.onload = function  ( ){ 
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain_array = [];
let domain = " Revisar la consola :D "// pronoun[(Math.floor(Math.random() * pronoun.length))] +
             // adj[(Math.floor(Math.random() * adj.length))] +
             // noun[(Math.floor(Math.random() * noun.length))] + ".com"

//console.log(pronoun.forEach(random_num(pronoun.length)))

//let domain = pronoun.forEach(random_num(pronoun.length)) + adj.forEach(random_num(adj.length)) + noun.forEach(random_num(noun.length)) + ".com"

//function random_num(i) {
//    random_array = Math.floor(Math.random() * i)
//    return random_array
//}
//pronoun.forEach(item => adj.forEach(item2 => noun.forEach(item3 =>  console.log(item + item2 + item3 + ".com"))))

pronoun.forEach(item => adj.forEach(item2 => noun.forEach(item3 =>  domain_array.push(item + item2 + item3 + ".com"))));
console.log(domain_array);

document.querySelector("#mensaje").innerHTML = domain_array;
}
