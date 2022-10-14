$(document).ready(function(){
    // $('.slider_sec').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     nav:false,
	//     dots:true,
	//     autoplay:true,
	//     autoplayTimeout:1500,
	//     autoplayHoverPause:true,
	//     responsive:{
	//         0:{
	//             items:1,
	// 			loop:false
	//         }
	//     }
	// });
	// var owl = $('.slider_sec');
    //  owl.owlCarousel(); 
	//   owl.on('translated.owl.carousel', function(event) {
	//     var data_img = $('.owl-carousel').find('.owl-item.active .item').attr("data-img");
	//     $('.hero_sec').css("background-image", "url("+ data_img +")");
	// });
	$('.product_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots:false,
	    navText:["<div class='nav-btn prev-slide'><img src='images/left-arrow.png' class='img-fluid'></div>",
	    "<div class='nav-btn next-slide'><img src='images/right-arrow.png' class='img-fluid'></div>"],
	    autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        991:{
	            items:2
	        }
	    }
	});
	$('.client_slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:true,
	    center: true,
	    autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1199:{
	            items:3
	        }
	    }
	});
	
});

function w3_open() {
	document.getElementById("collapsibleNavbar").style.transform = "translate(0%, 0%)";
  }
  
  function w3_close() {
	document.getElementById("collapsibleNavbar").style.transform = "translate(-130%, 0%)";
  }
  
  