<script>


document.addEventListener("DOMContentLoaded", function() {

  var lazyTest = setInterval(function() {
    if (typeof(allGames) === "object") {
      if (Object.keys(allGames).length > 0) {
        clearInterval(lazyTest);
        setTimeout(function() {
          lazyLoad();
          console.log("running lazyload")
        }, 800);
      }
    } else {
      clearInterval(lazyTest);
      lazyLoad();
    }
  }, 300)

  function lazyLoad() {

    //lazyLoad variables
    var images               = document.getElementsByTagName("img"),
        sourceTag            = document.getElementsByTagName("source"),
        galleryImages        = document.querySelector(".m-product-placement-item"),
        whatsNew             = document.querySelectorAll("#whatsnew picture img"),
        whatsNewSection      = document.querySelectorAll("#whatsnew picture"),
        galleryImgs          = document.querySelectorAll(".media-gallery-black img"),
        gallerySource        = document.querySelectorAll('.context-video source'),
        purchaseSectionImgs  = document.querySelectorAll(".purchaseSection img");

    

    //iterate through all the images
    for(var i = 0; i < images.length; i++) {
     var imageSrc = images[i].getAttribute("src");
     images[i].removeAttribute("src");
     images[i].setAttribute("data-src", imageSrc);

    }

    //iterate through all of the source tags
    for(var i = 0; i < sourceTag.length; i++) {
     var sourceTagSrc = sourceTag[i].getAttribute("srcset");
     sourceTag[i].removeAttribute('srcset');
     sourceTag[i].removeAttribute('src');
     sourceTag[i].setAttribute('data-src', sourceTagSrc);

    }


//chrome fix for the whats new section
//removes c-image class name
for(var i = 0; i < whatsNewSection.length; i++){
  //console.log(whatsNewSection[i])
  whatsNewSection[i].classList.remove('c-image');
}

for(var i = 0; whatsNew.length; i++){
	imageBladeCount = whatsNew.length;
	console.log(imageBladeCount)
}



    // Observer Lazy load section
    const dataImages = document.querySelectorAll("[data-src]");

    function preloadImage(img) {
       const src = img.getAttribute("data-src");
      

       if(!src) {
         return;
       }
       img.src= src;
       img.srcset = src;

    }

    const imgOptions = {
      threshold: 1,
      rootMargin: "500px 0px 500px 0px"
    };

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          return;
        } else {
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target);
          
        }
       })
    }, imgOptions)


    dataImages.forEach(image => {
      imgObserver.observe(image);

    })
  }
})

</script>