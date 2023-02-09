const fetchImage = async () => {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");

    const data = await response.json();
    let img = document.querySelector("img");
    img.src = data.img;
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};

let image = document.createElement("img");
document.body.appendChild(image);

fetchImage();
