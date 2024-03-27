function earthGif(){
     document.getElementById("earth").src="earth_gif.gif" ;
}


function earthPic(){
     document.getElementById("earth").src="earth.jpg";
}

function mercuryGif(){
     document.getElementById("mercury").src="mercury_gif.gif";
}

function mercuryPic(){
     document.getElementById("mercury").src="mercury.jpg";
}

function venusGif(){
     document.getElementById("venus").src="venus_gif.gif";
}

function venusPic(){
     document.getElementById("venus").src="venus.jpg";
}

function marsGif(){
     document.getElementById("mars").src="mars_gif.gif";
}

function marsPic(){
     document.getElementById("mars").src="Mars.jpg";
}

function jupiterGif(){
     document.getElementById("jupiter").src="Jupiter_gif.gif";
}

function jupiterPic(){
     document.getElementById("jupiter").src="Jupiter.jpg";
}

function saturnGif(){
     document.getElementById("saturn").src="saturn_gif.gif";
}

function saturnPic(){
     document.getElementById("saturn").src="saturn.jpg";
}

function uranusGif(){
     document.getElementById("uranus").src="uranus_gif.gif";
}

function uranusPic(){
     document.getElementById("uranus").src="uranus.png";
}

function neptuneGif(){
     document.getElementById("neptune").src="neptune_gif.gif";
}

function  neptunePic(){
     document.getElementById("neptune").src="Neptune.jpg";
}

function plutoGif(){
     document.getElementById("pluto").src="pluto_gif.gif";
}

function plutoPic(){
     document.getElementById("pluto").src="pluto.jpg";
}

window.addEventListener('load', () => {
     var
     carousels = document.querySelectorAll('.carousel');
   
   
     for (var i = 0; i < carousels.length; i++) {
       carousel(carousels[i]);
     }
   });
   
   function carousel(root) {
     var
     figure = root.querySelector('figure'),
     nav = root.querySelector('nav'),
     images = figure.children,
     n = images.length,
     gap = root.dataset.gap || 0,
     bfc = ('bfc' in root.dataset),
   
     theta = 2 * Math.PI / n,
     currImage = 0;
   
   
     setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
     window.addEventListener('resize', () => {
       setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
     });
   
     setupNavigation();
   
     function setupCarousel(n, s) {
       var
       apothem = s / (2 * Math.tan(Math.PI / n));
   
   
       figure.style.transformOrigin = `50% 50% ${-apothem}px`;
   
       for (var i = 0; i < n; i++)
       images[i].style.padding = `${gap}px`;
       for (i = 1; i < n; i++) {
         images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
         images[i].style.transform = `rotateY(${i * theta}rad)`;
       }
       if (bfc)
       for (i = 0; i < n; i++)
       images[i].style.backfaceVisibility = 'hidden';
   
       rotateCarousel(currImage);
     }
   
     function setupNavigation() {
       nav.addEventListener('click', onClick, true);
   
       function onClick(e) {
         e.stopPropagation();
   
         var t = e.target;
         if (t.tagName.toUpperCase() != 'BUTTON')
         return;
   
         if (t.classList.contains('next')) {
           currImage++;
         } else
         {
           currImage--;
         }
   
         rotateCarousel(currImage);
       }
   
     }
   
     function rotateCarousel(imageIndex) {
       figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
     }
   
   }