const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");  
  container.appendChild(pixel);
}
