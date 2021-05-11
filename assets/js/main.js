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

 		var i=0, text;
	text = "What's New? I added a new project on updates called Web Design."
	function typing() {
		if(i<text.length){
			document.getElementById("text").innerHTML += text.charAt(i);
			i++
			setTimeout(typing, 30);
		}
	}
	typing();

 // typewriter effect
	const carouselText = [
  {text: "Welcome! 🐱‍💻", color: "#8869e4"},
  {text: "I am not a hacker! 👨‍💻", color: "#17b06b"},
  {text: "I am whitehathacker0205 and Ariel Fajardo", color: "#ff3c5c"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 60) {
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
    await waitForMs(30);
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