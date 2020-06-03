


// counter in JS 

let start // set on the first step to the timestamp provided
const el = document.getElementById('count') // get the element
//const final = parseInt(el.textContent, 10) // parse out the final number
const duration = 4000 // duration in ms
const step = ts => {
  if (!start) {
    start = ts
  }
  // get the time passed as a fraction of total duration
  let progress = (ts - start) / duration 

  //el.textContent = Math.floor(progress * final) // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step) 
  }
}

// start the animation
requestAnimationFrame(step)



$(function () {


   // var fired = 0;

    //if (fired === 0) {
    /*$('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });*/
   //  fired = 1; //Only do scroll function once
   // }


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


})
