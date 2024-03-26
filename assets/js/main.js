function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
      setTimeout(function () {
        let loadingOverlay = document.getElementById("loadingOverlay");
        loadingOverlay.style.display = "none";
        document.querySelector("body").classList.remove("overflow_hidden");
      }, 3000);
    });
  });
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

        $('.responsive_1').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            arrows: true,
            prevArrow: ".prev_arrow_1",
            nextArrow: ".next_arrow_1",
            slidesToShow: 1,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                    }
                }

            ]
        });