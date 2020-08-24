const firstName = `Kamil`;
const age = 29;

console.log(
    `Siemanko witam na mojej stronie,nazywan sie ${firstName} i mam ${age} lata.`
);

const heading = document.querySelector('.head__brown--js');

heading.innerHTML = `Witam Cię na stronie wiadomiść wysłąna z pliku main.js;)`;