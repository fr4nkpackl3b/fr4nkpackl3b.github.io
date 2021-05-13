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
 // typewriter effect
 		var i=0, text;
	text = "I added new projects on updates."
	function typing() {
		if(i<text.length){
			document.getElementById("text").innerHTML += text.charAt(i);
			i++
			setTimeout(typing, 40);
		}
	}
	typing();

 // typewriter carousel effect
	const carouselText = [
  {text: "Hi! 🖐", color: "#6f6974"},
  {text: "Welcome to my website! 😊", color: "#6f6974"},
  {text: "I ❤️ programming...", color: "#ff3c5c"},
  {text: "and ethical hacking...", color: "#17b06b"},
  {text: "and web development too!", color: "#ff3c5c"},
  {text: "I'm only a ethical hacker...", color: "#17b06b"},
  {text: "by night.", color: "#17b06b"},
  {text: "By day...", color: "#ff3c5c"},
  {text: "just a regular developer.", color: "#ff3c5c"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 40) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(40);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/*just for toggling animation on hover*/
var toggle = 0;
var button = document.querySelector(".toggle-button");
var icon = document.querySelector(".ac-animated-svg-icon");
button.addEventListener("click", function() {
  if (toggle == 0) { toggle = 1; } else { toggle = 0; }
  if (toggle == 1) {
    button.className = "toggle-button toggle-on";
    icon.className = "ac-animated-svg-icon";
  } else {
    button.className = "toggle-button";
    icon.className = "ac-animated-svg-icon ac-svg-animated";
  }
});
