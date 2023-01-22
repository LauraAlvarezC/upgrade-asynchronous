//1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
//hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
//console.log(). Para ello, es necesario que crees un .html y un .js.

console.log("inicio");

const fetchData = async () => {
  const res = await fetch("https://api.agify.io?name=michael");
  const json = await res.json();
  console.log(json);
};

fetchData();

//2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
//fetch() para hacer una consulta a la api cuando se haga click en el botón,
//pasando como parametro de la api, el valor del input.
//const baseUrl = 'https://api.nationalize.io';
//const baseUrl = 'https://api.nationalize.io';

const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");

button.addEventListener("click", function () {
  const fetchData = async () => {
    const res = await fetch(`https://api.agify.io?name=${input.value}`);
    const json = await res.json();
    console.log(json);
  };

  fetchData();
});

//2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
//a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
//EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
//de MZ.

//2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
//de los p que hayas insertado y que si el usuario hace click en este botón
//eliminemos el parrafo asociado
