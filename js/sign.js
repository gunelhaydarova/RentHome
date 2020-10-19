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
 	var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } 
  else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function change_type(){
	var x = document.getElementById("user_type").value;
	if (x!=1) {
		document.getElementById('user_phone').style.display='block';
        document.getElementById("phone_num").required = true;
	}
	else{
		document.getElementById('user_phone').style.display='none' ;
        document.getElementById("phone_num").required = false;
	}
}	

$('#user_phone').on('keyup', '[type="tel"]', function() { 
    var num = $(this).val().replace(/\D/g,''); 
    if($(this).val().match(/[a-z]/i)){
        alert('Nömrəni düzgün daxil edin')
    } 
    if(num.length>2 && num.length<=5)
       $(this).val(num.substring(0,2) + '-' + num.substring(2,5));
    if(num.length>5  && num.length<=7)
       $(this).val(num.substring(0,2) + '-' + num.substring(2,5)+ '-' + num.substring(5,7));
   if(num.length>7)
       $(this).val(num.substring(0,2) + '-' + num.substring(2,5)+ '-' + num.substring(5,7) + '-' + num.substring(7,9));
})
