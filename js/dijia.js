$(".synopsis").hide();

$(".OpenButton").click(function(){
    if($('.synopsis').css('display') === 'none'){
        $('.synopsis').slideDown()
    }else{
        $('.synopsis').slideUp()
    }
})