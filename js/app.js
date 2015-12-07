$(document).ready(function(){


// start ryu "throwing" section 
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
   
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
// end ryu "throwing" section 


// start ryu "cool" section 
$(document).keydown(function(e){
    if(e.keyCode == 88){    
        $(".ryu-ready").hide();
        $(".ryu-throwing").hide();
        $(".ryu-still").hide();
        $(".ryu-cool").show();
 }
 });

$(document).keyup(function(e){
if(e.keyCode == 88) {
        $(".ryu-ready").show();
        $(".ryu-throwing").hide();
        $(".ryu-still").hide();
        $(".ryu-cool").hide();
}
});

// end ryu "cool" section 
});
 



// start ryu audio section 
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

// end ryu audio section 