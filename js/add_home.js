
$("#anons").click(function(){  
 		$('#myModal').modal('show'); 	 
});
var current_fs, next_fs, previous_fs; 
var left, opacity, scale;  
$(".step1").click(function(){  
 		$(this).css({"border-color": "#D0D0D0" });
    		 
});
$(".step2").click(function(){  
 		$(this).css({"border-color": "#D0D0D0" });
    		 
});
$(".step3").click(function(){  
 		$(this).css({"border-color": "#D0D0D0" });
    		 
});
$(".submit").click(function(){  
 var current_index = $(this).parent().index("fieldset");
      if (!validateStep(current_index)) 
			return false

    		 
});
$(".next").click(function(){  

    current_fs = $(this).parent();
    next_fs = $(this).parent().next(); 
    
     var current_index = $(this).parent().index("fieldset");
			 if (validateStep(current_index)) {
			 	 $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
			 	next_fs.show();   
	            next_fs.css({'left': left, 'opacity': opacity}); 
	            current_fs.hide(); 
			 }
			 else
			 	alert('*  simvolu ilə verilən bütün sahələr doldurulmalıdır')
    		  
});
$(".previous").click(function(){  
    animating = false; 
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev(); 
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
     
    		previous_fs.show();   
            previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity}); 
            current_fs.hide(); 
});

(function ($) {
    $(function () {

        var addFormGroup = function (event) {
            event.preventDefault();

            var $formGroup = $(this).closest('.my-group');
             var $formGroupClone='<div class="input-group my-group">  <select   class="selectpicker form-control"> <option selected> +994</option>    <option value="1">+7</option>  <option value="2">+1</option>  </select>  <input  type="tel"  class="form-control  f2" id="second_num"  placeholder="77-777-77-77">     <span class="input-group-btn f3">  <button type="button" class="btn btn-danger btn-remove">-</button> </span></div>';
              
            $(".add_btn").css('visibility', 'hidden');

            $("#main_num").append( $formGroupClone); 
             
        }; 
        var removeFormGroup = function (event) {
            event.preventDefault();
            var $formGroup = $(this).closest('.my-group');
            var $multipleFormGroup = $formGroup.closest('.multiple-form-group');
             
           $(".add_btn").css('visibility', 'visible');
            $formGroup.remove();
        }; 
        var countFormGroup = function ($form) {
            return $form.find('.form-group').length;
        }; 
        $(document).on('click', '.btn-add', addFormGroup);
        $(document).on('click', '.btn-remove', removeFormGroup);
         

    });
})(jQuery);
 
 

$(document).ready(function() {
    document.getElementById('pro-image').addEventListener('change', readImage, false);
    $(document).on('click', '.image-cancel', function() {
        let no = $(this).data('no'); 
        $(".preview-image.preview-show-"+no).remove(); 
    });
});



var num = 1;
function readImage() {
    if (window.File && window.FileList && window.FileReader) {
        var files = event.target.files; //FileList object
        var output = $(".preview-images-zone");

        for (let i = 0; i < files.length; i++) {
            var file = files[i];
            if (!file.type.match('image')) continue;
            
            var picReader = new FileReader();
            
            picReader.addEventListener('load', function (event) {
                var picFile = event.target;
               // alert(picFile.result);
                var html =  '<div class="preview-image preview-show-' + num + '">' +
                            '<div class="image-cancel" data-no="' + num + '">x</div>' +
                            '<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>' +
                            '<div class="tools-edit-image"><a href="javascript:void(0)" data-no="' + num + '" class="btn btn-light btn-edit-image">edit</a></div>' +
                            '</div>';
                output.append(html);
                num = num + 1;
            });

            picReader.readAsDataURL(file);
        }
        $("#pro-image").val(''); 
    } else {
        console.log('Browser not support');
    }
}
function readImage2() {
  $('.preview-images-zone img').each(function(){
  alert($(this).attr('src'));
}); 
}

function show_locationn(){
    var x = document.getElementById("location_type").value;
    if (x==1) {
        document.getElementById('show_region').style.display='block';
        document.getElementById('show_subway').style.display='block'; 
        $("#show_subway select").addClass("step1");
        $("#show_region select").addClass("step1");
    }
    else{
        document.getElementById('show_region').style.display='none';
        document.getElementById('show_subway').style.display='none'; 
        $("#show_subway select").removeClass("step1");
        $("#show_region select").removeClass("step1");
    }
}
function show_floor(){
    var x = document.getElementById("building_type").value;
    if (x==2) {
        document.getElementById('floor').style.display='none'; 
         $("#floor input").removeClass("step2");
    }
    else{
        document.getElementById('floor').style.display='block';  
        $("#floor input").addClass("step2"); 
    }
}
 
$('#main_num').on('keyup', '[type="tel"]', function() { 
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


function validateStep(step){
	  var k=1;
			switch(step){
				case 0: 
						$('.step1').each(function(){
							if ($(this).val()==null || $(this).val()=='') {
								$(this).css({"border-color": "red", 
								             "border-width":"1px", 
								             "border-style":"solid"});
								k=0;
							} 	
						}); 
						if (k==0) { return false  } 
					return true;
				break;
				case 1:
					$('.step2').each(function(){
							if ($(this).val()==null || $(this).val()=='') {
								$(this).css({"border-color": "red", 
								             "border-width":"1px", 
								             "border-style":"solid"});
								k=0;
							} 	
						}); 
						if (k==0) {  return false } 
					return true;
				break;
				case 2:
					$('.step3').each(function(){
							if ($(this).val()==null || $(this).val()=='') {
								$(this).css({"border-color": "red", 
								             "border-width":"1px", 
								             "border-style":"solid"});
								k=0; 
							} 	
						}); 
						if (k==0) { return false  } 
					return true;
			}
		}