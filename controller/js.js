

// const slider = document.getElementsByClassName('tags');
// let mouseDown = false;
// let startX, scrollLeft;
// console.log(slider);



// let startDragging = function (e) {
//   let sliderE = e.target.parentNode;
//   mouseDown = true;
//   startX = e.pageX - sliderE.offsetLeft;
//   scrollLeft = sliderE.scrollLeft;
// };

// let stopDragging = function (event) {
//   mouseDown = false;
//   console.log('stopDrag')
// };


// for (let i = 0; i < slider.length; i++) {
//   slider[i].addEventListener('mousedown', startDragging, false);
//   slider[i].addEventListener('mouseup', stopDragging, false);
//   slider[i].addEventListener('mouseleave', stopDragging, false);
//   console.log(i);
// }

// for (let i = 0; i < slider.length; i++) {
//   slider[i].addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     if(!mouseDown) { return; }
//     const x = e.pageX - slider[i].offsetLeft;
//     const scroll = x - startX;
//     slider[i].scrollLeft = scrollLeft - scroll;
//   });
// }






// const scrollContainer = document.querySelector(".tags");
// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });



/* scroll horizontally */
document.querySelectorAll('.tags').forEach(item => {
  item.addEventListener('wheel', event => {
    event.preventDefault();
    item.scrollLeft += event.deltaY;
  })
});

