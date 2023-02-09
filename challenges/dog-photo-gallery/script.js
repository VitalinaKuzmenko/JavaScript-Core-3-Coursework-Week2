let list = document.querySelector("ul");
let element = document.createElement("li");
list.appendChild(element);
let image = document.createElement("img");
element.appendChild(image);

let button = document.getElementById("generate-button");
button.addEventListener("click", getRandomDogImage);

async function getRandomDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    console.log(response);
    console.log(data);
    let image = document.querySelector("img");
    image.src = data.message;
  } catch (err) {
    console.log(err);
  }
}
