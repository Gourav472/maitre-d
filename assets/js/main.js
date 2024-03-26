function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }
  
//   document.addEventListener("DOMContentLoaded", function () {
//     window.addEventListener("load", function () {
//       setTimeout(function () {
//         let loadingOverlay = document.getElementById("loadingOverlay");
//         loadingOverlay.style.display = "none";
//         document.querySelector("body").classList.remove("overflow_hidden");
//       }, 3000);
//     });
//   });

        $('.responsive_1').slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: false,
            arrows: true,
            prevArrow: ".prev_pos2",
            nextArrow: ".next_pos2",
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
                        autoplay: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true
                    }
                }

            ]
        });