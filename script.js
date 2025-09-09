const pixelContainer = document.querySelector(".pixelContainer");

const button = document.getElementById("button");

//Starting grid:
for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");

  pixel.classList.add("pixel");
  pixel.style.height = ("100px");
  pixel.style.width = ("100px")
  pixelContainer.appendChild(pixel);

  let alpha = 1;

  pixel.onmouseover = () => {
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${randomR}, ${randomG}, ${randomB}, ${alpha})`;

    alpha = Math.max(alpha - 0.1, 0);

    pixel.style.backgroundColor = randomColor;
  }
}

//New grid:
button.addEventListener("click", () => {
  let sideLength = parseInt(prompt("Number of pixels per side:","Max 100!"));

  if (isNaN(sideLength) || sideLength <= 0 || sideLength > 100) {
    alert("Please enter a number between 1 and 100!");
    return;
  }

  pixelContainer.innerHTML = "";

  const containerSize = 1600;
  const pixelSize = containerSize / sideLength;

  for (let i = 0; i < (sideLength * sideLength); i++) {
    const pixel = document.createElement("div");

    pixel.classList.add("pixel");
    pixel.style.height = `${pixelSize}px`;
    pixel.style.width = `${pixelSize}px`;
    pixelContainer.appendChild(pixel);

    let alpha = 1;

    pixel.onmouseover = () => {
      let randomR = Math.floor(Math.random() * 256);
      let randomG = Math.floor(Math.random() * 256);
      let randomB = Math.floor(Math.random() * 256);
      let randomColor = `rgb(${randomR}, ${randomG}, ${randomB}, ${alpha})`;
      
      alpha = Math.max(alpha - 0.1, 0);

      pixel.style.backgroundColor = randomColor;
    }
  }
});
