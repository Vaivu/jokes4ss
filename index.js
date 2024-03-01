const generateBtn = document.querySelector(".generate-btn");
const jokeContainer = document.querySelector(".joke-container");

function fetchJoke(){
  jokeContainer.innerText = "";

fetch("https://v2.jokeapi.dev/joke/dark,pun")
.then(response => response.json())
.then(data =>{
  const setup = data.setup;
  const delivery = data.delivery;
  const newJoke = document.createElement("p");
  newJoke.innerText = `${setup} ${delivery}`;
  jokeContainer.appendChild(newJoke);

})

.catch( error => console.error(error));

}

generateBtn.addEventListener("click",fetchJoke);