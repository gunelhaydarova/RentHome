(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

     

    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });


    // SMOOTH SCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);
function render(data){ 
        var today = new Date(); 
        var dd = today.getDate(); 
        var mm = today.getMonth() + 1; 
  
        var yyyy = today.getFullYear(); 
         if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        var date = dd + '/' + mm + '/' + yyyy;
          var  html= ' <div class="media col-md-12 col-sm-12 "> <div class="media-left">  <img src="img/avatar.jpg" class="media-object" style="width:45px"></div>  <div class="media-body"> <h4 class="media-heading  col-md-12 col-sm-12 " >'+data.name+'<small><i>Paylaşılıb :  '+date+'</i></small></h4> <p>'+data.body+'</p><hr>';          $('#comment_add').append(html);
      }
       
               var comment=[
                   {"name":"$('#cf-name').val()",
                  "email":"$('#cf-email').val()",
                  "body":"$('#cf-message').val()"}
               ];
              function s(){
                var addObj={
                  "name":$('#cf-name').val(),
                  "email":$('#cf-email').val(),
                  "body":$('#cf-message').val()
                }

                comment.push(addObj);
                render(addObj)
              }
 