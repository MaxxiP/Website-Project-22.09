$(document).on( 'scroll', function(){
    console.log('scroll top : ' + $(window).scrollTop());
        if($(window).scrollTop()>=($('#hero').height())/2)
        {
             $('.nav').addClass('navbar-fixed-top');
            $('#about').addClass('about');
        }

        if($(window).scrollTop()<$('#hero').height())
        {
             $('.nav').removeClass('navbar-fixed-top');
            $('#about').removeClass('about');
        }
});