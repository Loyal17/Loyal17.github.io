/*Script for my first portfolio project one */
$(function(){
    //moving the banner
    
    var banner = document.querySelector('.stage-div');
    start = 0;
    multiplier = 0;

    function sine(){
        multiplier = 200 * Math.sin(start *2);
        banner.style.top = multiplier * Math.sin(start) +250 +'px';
        start +=0.05;
    }   
    var t = setInterval(sine,800/30); 

function stopSineMouvement(){
    clearInterval(t);
}
$('#fun').on('mouseenter',stopSineMouvement).on('mouseleave', sine);


    
//configuration for slide animation
var width = 1600;
var animationSpeed = 1000;
var pause = 3000;
var currentSlide =1;
var $slider = $('#slider');
var $sliderContainer = $slider.find('.slides');
var $slides = $sliderContainer.find('.slide');
var interval;
function startSlider(){
    interval = setInterval(function(){
        $($sliderContainer).animate({'margin-left': '-='+width},animationSpeed,function(){
            currentSlide++;
        if(currentSlide === $slides.length){
            currentSlide = 1;
            $sliderContainer.css('margin-left',0);
        }
    });
    },pause);

}
function stopSlider(){
clearInterval(interval);
}
$slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);

});
 /* --------------------------------------------------------------------------------- */
 $(function(){
     $('#section2-img1').hover(function(){
       $(this).animate({width:'100px'},1000);
       $(this).animate({width:'150px'},500);
     });
 });
 /*-------------------------------------------  */
 $(function(){
     $(".header-section").hover(function(){
         $(this).animate({fontSize:'28px'},2000);
         $(this).animate({fontSize:'20px'},2000);
         $(this).css('color','#FF5722');
       
     });
 });
 $(function(){
    $('.more').mouseenter(function(){
        $(this).css('cursor','crosshair');
        $(this).css('color','red');
        $(this).css('font-size','20px');
    });
    $('.more').mouseleave(function(){
        $(this).css('color','blue');
        $(this).css('font-size','16px');
    });
 });
 $(function(){
     $(window).on('load', function(){
         $('.img1-text2').hide('slow');
     });
    });
    $(function(){
        $('.more').click(function(){
        $('.img1-text2').toggle('slow');
        $('.img1-text1').show('slow');
        
        });
    });
    $(function(){
        $('#section2-img2').hover(function(){
            $(this).animate({width:'100px'},1000);
            $(this).animate({width:'150px'},500);
        });
    });
    $(function(){
        $('#wrap').scroll(function(){
            $('#head').css('position','fixed');

        });

    });
    
