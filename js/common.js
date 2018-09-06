$(document).ready(function(){

$('.navbar-toggle.collapsed').on ('click', function() {

	var arrow = '<div class="icon icon-arrow-1"></div>';
	var bar_icon = '<span class="icon-bar"></span>';
	$('body').toggleClass('nav_open');

	if( $('body').hasClass('nav_open')){
		
	 //    $('.navigation_wrap').removeClass('hinde_me');
		// $('main').removeClass('main_open');	
	    $('.navbar-toggle.collapsed').html(bar_icon + bar_icon + bar_icon);
		$('.navigation_wrap').css('width', '0');
	    $('main').css({'width': '100%','margin-left' : '0'});	
	} else {
		// $('.navigation_wrap').addClass('hinde_me');
	 //    $('main').addClass('main_open');	
	    $('.navbar-toggle.collapsed').html(arrow);
		$('.navigation_wrap').css('width', '10%');
	    $('main').css({'width' : '90%','margin-left' : '10%'});

	}
});

$('.toggle_btn').on('click', function(){
	$('.right_nav_wrap').hide();
	$('main').removeClass('right_nav');
	$('main').addClass('main_full');
	$('.tbl_slider').animate({
				        scrollLeft:  1
				   });
	$('body').addClass('right_nav_closed');
});
$('.icon.icon-info').on('click', function(){
	$('.right_nav_wrap').show();
	$('main').addClass('right_nav');
	$('main').removeClass('main_full');
	$('.tbl_slider').animate({
				        scrollLeft:  10
				   });
	$('body').removeClass('right_nav_closed');
	$('body').addClass('right_nav_closed');
});	


// $('.filter').hide();
// $('.search').hide();

//  var x = $(".append_filter").offset();
//        $('.icon-filter').on('click', function(){
//        	$('.filter').show();
//        });

//         $('.icon-magnifying-glass').on('click', function(){
//        	$('.search').show();
//        });


// $('.filter').css({'top':x.top + 30, 'left':x.left+30});
// $('.search').css({'top':x.top + 30, 'left':x.left+50});



$('.btn_border').click(function() {
        var myEm = $(this).attr('data-showpending');
        $('.btn_border').removeClass('active');
        $('.pending_parameters_wrap').removeClass('show');
        $(this).addClass('active');
        $('div[data-pendingholder = '+myEm+']').addClass('show');

       
  });



$('.close_btn').click(function(){
	var abc = $(this).closest('.pending_parameters_wrap').attr('data-pendingholder');
	$('div[data-pendingholder = '+ abc +']').removeClass('show');
	$('button[data-showpending = '+ abc +']').removeClass('active');
	console.log(abc);

});

});
