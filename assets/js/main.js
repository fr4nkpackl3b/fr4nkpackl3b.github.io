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
	text = "I added a new project on updates called Web Design."
	function typing() {
		if(i<text.length){
			document.getElementById("text").innerHTML += text.charAt(i);
			i++
			setTimeout(typing, 55);
		}
	}
	typing();

 // typewriter effect
	const carouselText = [
  {text: "Hi! 🖐", color: "#6f6974"},
  {text: "I ❤️ programming, ethical hacking. . .", color: "#ff3c5c"},
  {text: "and developing. . .", color: "#ff3c5c"},
  {text: "I am a developer at day", color: "#0e6c42"}
  {text: "and ethical hacker by night. . .", color: "#0e6c42"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 80) {
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