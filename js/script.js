const images = document.getElementsByTagName('img');
alert(images)
for (const image of images) {
  image.addEventListener('mouseover', () => {
    alert("MOUSEOVER!")
    image.style.width = '150%';
  });
 
  image.addEventListener('mouseout', () => {
    alert("MOUSEOUT!")
    image.style.width = '100%';
  });
}