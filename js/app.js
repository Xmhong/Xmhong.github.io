$(".navlist").hide();
$(".sub-menu").hide();
$(".sub-menu1").hide();
$(".sub-menu2").hide();


$(".sqButton").click(function(){
    if($('.navlist').css('display') === 'none'){
        $('.navlist').slideDown()
        $('.sqButton').transition({ perspective: '100px',  rotateX: '180deg'});
    }else{
        $('.navlist').slideUp()
        $('.sqButton').transition ({ perspective: '100px',  rotateX: '0deg'});
    }
})


$(".dijia").click(function(){
    if($('.sub-menu').css('display') === 'none'){
        $('.sub-menu').slideDown()
    }else{
        $('.sub-menu').slideUp()
    }
})

$(".tailuo").click(function(){
    if($('.sub-menu1').css('display') === 'none'){
        $('.sub-menu1').slideDown()
    }else{
        $('.sub-menu1').slideUp()
    }
})

$(".saiwen").click(function(){
    if($('.sub-menu2').css('display') === 'none'){
        $('.sub-menu2').slideDown()
    }else{
        $('.sub-menu2').slideUp()
    }
})

$(".ZK").click(function(){
    if($('.container').css('display') === 'none'){
        $('.container').slideDown()
    }else{
        $('.container').slideUp()
    }
})