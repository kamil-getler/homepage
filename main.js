const firstName = `Kamil`;
const age = 29;

console.log(
    `Siemanko witam na mojej stronie,nazywan sie ${firstName} i mam ${age} lata.`
);

const heading = document.querySelector('.head__brown--js');
console.log(heading.innerHTML);
heading.innerHTML = `Witam Cię na stronie wiadomiść wysłąna z pliku main.js;)`;
console.log(heading.innerHTML);

const deathStart = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target}destroyed`)
    },
    isOperating: true,
    levels: 357,
    name: `Death Star`,
    population: 10000,
    isLightOn: true,
    commander: {
        name: 'Darth Vader',
        age: 44
    }
}
console.log(deathStart);
console.log(deathStart.commander.name);


const stefan = {
    age: 32,
    city: 'Warszawa',
};
const kamil = {
    age: stefan.age,
    city: 'Parysów',
};

console.log(stefan);
console.log(kamil);


kamil.age = 24;

console.log(kamil);

const button = document.querySelector('.button--js')

console.log(button)


button.addEventListener('click', () => {
    const head = document.querySelector(".change");
    head.innerHTML = `Woowowooowowoowwoo`;
    head.classList.toggle('klasa-z-js');
});

const hamburger = documnet.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('.navigation--open');
});