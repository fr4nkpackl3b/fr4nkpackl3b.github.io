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
	speed: 300
 });

 		var i=0, text;
	text = " It's been a while, here is the new project I have already finished, called application form project. Date: 5/12/2021"

	function typing() {
		if(i<text.length){
			document.getElementById("text").innerHTML += text.charAt(i);
			i++
			setTimeout(typing, 40);
		}
	}
	typing();
