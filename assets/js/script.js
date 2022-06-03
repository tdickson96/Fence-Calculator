// What do I need?
// I need to take the user INPUTS from the fence details and turn them into amount of materials
// Input fence length, 8 ft per section, subtract 6 inches per post, fill gaps with pickets
// Example: 25ft requires 5 posts, 5 posts * 6" = 3ft, 22ft of pickets
// Input fence height, if 6ft, then 10ft tall posts, if 8ft, then 12ft tall posts
// One section of fencing is 8ft
// Railings = X * sections of fencing
// Click send estimate to email, type in email, and send estimate
// 1000 nails per 30ft of fnecing, minimum 1 box

// jQuery that allows user to increase values with buttons
// I think it is not necessary since the 
$(document).ready(function(){
    $("#up").on('click',function(){
        $("#incdec input").val(parseInt($("#incdec input").val())+1);
    });

    $("#down").on('click',function(){
        $("#incdec input").val(parseInt($("#incdec input").val())-1);
    });

});


// Posts = (length in feet / 8') + 1
// Round up on decimals
// Railings = ((posts - 1) x 2)
// Pickets = ((Fence length - (Posts * 6 inches)) / 5.5 inches)
// Nails = 
// Concrete