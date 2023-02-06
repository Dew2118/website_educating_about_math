const images = document.getElementsByTagName('img');

for (const image of images) {
  image.addEventListener('mouseover', () => {
    image.style.width = '150%';
  });
 
  image.addEventListener('mouseout', () => {
    image.style.width = '100%';
  });
}