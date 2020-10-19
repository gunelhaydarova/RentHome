function rent_read( num) {
	window.location.assign("information.html");
}
function rent_home(){
  window.location.assign("rent.html");
}
function g_read( num) {
	window.location.assign("temp/index2.html");
}
function t_read( num) {
	window.location.assign("temp/index3.html");
}

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label'); 
      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } 
        else {
          label.addClass('active highlight');
        }
      }
      else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight'); 
        } 
        else {
            label.removeClass('highlight');   
        }   
      } 
      else if (e.type === 'focus') { 
        if( $this.val() === '' ) {
            label.removeClass('highlight'); 
        } 
        else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
     } 
});

$('.tab a').on('click', function (e) {  
  e.preventDefault(); 
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active'); 
  target = $(this).attr('href'); 
  $('.tab-content > div').not(target).hide(); 
  $(target).fadeIn(600);
  
});

 

$("#open_modal").click(function(){
  document.getElementById('modal-form').style.display='block';
  const body = document.body;
  
  body.style.overflowY = 'hidden';
});
$("#close_modal").click(function(){
  document.getElementById('modal-form').style.display='none'
  const body = document.body;
 
  body.style.overflowY = 'auto';
});
 function log_back(){
  location.reload(true);
}; 
    $(function() {
    $( "i" ).click(function() {  
      document.getElementById('modal-form').style.display='block';
      //$( this).toggleClass( "press", 1000 ); 
    });
     
    
  });


    function render(data){
          var  html='<div class="tm-timeline-item">   <div class="tm-timeline-item-inner">   <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" alt="Image" class="rounded-circle tm-img-timeline">    <div class="tm-timeline-connector">   <p class="mb-0">&nbsp;</p>  </div>  <div class="tm-timeline-description-wrap <div class="tm-bg-dark tm-timeline-description">  <h3 class="tm-text-yellow tm-font-400">'+data.name+'</h3>   <p>'+data.body+'</p>  <p class="tm-text-yellow float-right mb-0">Latest News . 30 June 2018</p>    </div>  </div>  </div>    <div class="tm-timeline-connector-vertical"></div>   </div>';
          $('#comment_add').append(html);
      }
      $( document ).ready(function() {
               var comment=[
                   {"name":"$('#contact_name').val()",
                  "email":"$('#contact_email').val()",
                  "body":"$('#contact_message').val()"}
               ];
              $('#addComment').click(function(){
                var addObj={
                  "name":$('#contact_name').val(),
                  "email":$('#contact_email').val(),
                  "body":$('#contact_message').val()
                };
                comment.push(addObj);
                render(addObj)
              })

    });
var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } 
  else {
    confirm_password.setCustomValidity('');
  }
}
 
$(".down-content").on('click', function(event){
    window.location.assign("information.html");
});