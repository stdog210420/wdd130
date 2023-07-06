let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  // const dots = document.getElementsByClassName("dot");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    // dots[i].style.display = dots[i];
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  // dots[Index-1].style.display= "none";
  setTimeout(displayImages, 2000); 
}

