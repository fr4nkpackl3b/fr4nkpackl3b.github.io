// Option 2 - jQuery Smooth Scrolling
// $('.navbar a').on('click', function (e) {
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;

//     $('html, body')
//       .animate({
//         scrollTop: $(hash).offset().top
//       },800);
 //  }
 //});

 // Option 3 - Smooth Scroll
 	const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
 });

 	var typeText = document.querySelector(".typeText")
// var textToBeTyped = "a software engineer"
var textToBeTypedArr = ["a software engineer", "a warlord", "a king", "a peasant"]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        //...
      } else {
        //...
      }
    } else {
      // removing text
      if (index === 0) {
        //...
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        //...
      }
    }
    // calls itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()