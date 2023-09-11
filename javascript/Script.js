// GLITCH IMAGE SECTION

{
//     class Slide {
//     constructor(el) {
//         this.DOM = {el: el};
//         this.DOM.slideImg = this.DOM.el.querySelector('.slide__img');
//         this.bgImage = this.DOM.slideImg.style.backgroundImage;
//         this.layout();
//     }
//     layout() {
//         this.DOM.slideImg.innerHTML = `<div class='glitch__img' style='background-image: ${this.DOM.slideImg.style.backgroundImage};'></div>`.repeat(5);
//         this.DOM.glitchImgs = Array.from(this.DOM.slideImg.querySelectorAll('.glitch__img'));
//     }
//     changeBGImage(bgimage, pos = 0, delay = 0) {
//         setTimeout(() => this.DOM.glitchImgs[pos].style.backgroundImage = bgimage, delay);
//     }
// }

// class GlitchSlideshow {
//     constructor(el) {
//         this.DOM = {el: el};
//         this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slide'));
//         this.slidesTotal = this.DOM.slides.length;
//         this.slides = [];
//         this.DOM.slides.forEach(slide => this.slides.push(new Slide(slide)));
//         this.current = 0;
//         this.glitchTime = 1200;
//         this.totalGlitchSlices = 5;
//     }
//     glitch(slideFrom, slideTo) {
//         return new Promise((resolve, reject) => {
//             slideFrom.DOM.slideImg.classList.add('glitch--animate');
            
//             const slideFromBGImage = slideFrom.bgImage;
//             const slideToBGImage = slideTo.bgImage;

//             for (let i = this.totalGlitchSlices-1; i >= 0; --i) {
//                 slideFrom.changeBGImage(slideToBGImage, i, this.glitchTime/(this.totalGlitchSlices+1)*(this.totalGlitchSlices-i-1) + this.glitchTime/(this.totalGlitchSlices+1));
//             }
            
//             setTimeout(() => {
//                 slideFrom.DOM.slideImg.classList.remove('glitch--animate');

//                 // reset bgimages.
//                 for (let i = this.totalGlitchSlices-1; i >= 0; --i) {
//                     slideFrom.changeBGImage(slideFromBGImage, i, 0);    
//                 }

//                 resolve();
//             }, this.glitchTime);
//         });
//     }
//     navigate(pos) {
//         if ( !this.isReady(pos) ) return;
//         this.isAnimating = true;
        
//         const newCurrent =  pos;
        
//         this.glitch(this.slides[this.current], this.slides[newCurrent]).then(() => {
//             this.DOM.slides[this.current].classList.remove('slide--current');
//             this.current = newCurrent;
//             this.DOM.slides[this.current].classList.add('slide--current');
//             this.isAnimating = false;
//         });
//     }
//     isReady(pos) {
//         return !(this.isAnimating || pos === this.current);
//     }
// }

// OWL CAROUSELA
// Preload all the images in the page..
imagesLoaded(document.querySelectorAll('.slide__img'), {background: true}, () => {
    document.body.classList.remove('loading');
    const slideshow = new GlitchSlideshow(document.querySelector('.slides'));
    Array.from(document.querySelectorAll('.slide-nav > a')).forEach((link, pos) => 
        link.addEventListener('click', (ev) => {
            ev.preventDefault();
            if ( !slideshow.isReady(pos) ) return;
            slideshow.navigate(pos);
            link.parentNode.querySelector('.slide-nav__text--current').classList.remove('slide-nav__text--current');
            link.classList.add('slide-nav__text--current');
        })
    );
});
}
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        autoplayTimeout:3500,
        margin:50,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }


    });
  });

//   SKILL SECTION
$(window).on("load", function () {
    $("#preloader").slideUp(1500);
});

$(document).ready(function () {

    $('.mobile-nav').click(function () {
        $('.mobile').slideToggle();
    });
    $(".close-li").click(function () {
        $(".mobile").slideUp(1000);

    });
    
    // skill-section start
     //   number counter
let na = document.getElementById("counter1");
let cn = 0;
setInterval(() => {
    if (cn == 90) {
        clearInterval();
    } else {
        cn += 1;
        na.innerHTML = cn + "%";
    }

}, 30);


let nu = document.getElementById("counter2");
let cou = 0;
setInterval(() => {
    if (cou == 90) {
        clearInterval();
    } else {
        cou += 1;
        nu.innerHTML = cou + "%";
    }

}, 30);

let num = document.getElementById("counter3");
let coun = 0;
setInterval(() => {
    if (coun == 85) {
        clearInterval();
    } else {
        coun += 1;
        num.innerHTML = coun + "%";
    }

}, 30);

let numb = document.getElementById("counter4");
let count = 0;
setInterval(() => {
    if (count == 70) {
        clearInterval();
    } else {
        count += 1;
        numb.innerHTML = count + "%"
    }
}, 30);


let numbe = document.getElementById("counter5");
let counte = 0;
setInterval(() => {
    if(counte == 70) {
        clearInterval();
    }else {
        counte += 1;
        numbe.innerHTML = counte + "%";
    }
}, 30);        

let number = document.getElementById("counter6");
let counter = 0;
setInterval(() => {
    if(counter == 75) {
        clearInterval();
    }else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);


//Skill Section end


}
)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    Window.scroll.remove("active");

}));

window.onscroll=()=>{
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");

};