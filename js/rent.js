function rent_read( num) {
	window.location.assign("information.html");
}
function rent_home(){
  window.location.assign("rent.html");
}

  
$( "i" ).click(function() {  
      document.getElementById('modal-form').style.display='block';
      //$( this).toggleClass( "press", 1000 ); 
  });

$("#close_modal").click(function(){
  document.getElementById('modal-form').style.display='none'
  const body = document.body;
 
  body.style.overflowY = 'auto';
});

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
$(".down-content").on('click', function(event){
    window.location.assign("information.html");
});