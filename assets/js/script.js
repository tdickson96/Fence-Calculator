// I need a function that takes estimate materials and outputs a cost estimate
// I need to take the user INPUTS from the fence details and turn them into amount of materials

// input.addEventListener("input", (e) => { 
//    textarea.innerText = input.value; 
// }

// I need a function that takes the user inputs and estimates materials needed
$("#materials-estimate").click(function () {

    // User input values
    let fenceL = $("#fence-length");
    // console.log(fenceL);
    let picketSpace = $("#picket-spacing");
    // console.log(picketSpace);
    let picketWidth = 5.5;

    // Materials estimates values
    let posts = $("#posts");
    // console.log(posts);
    let railings = $("#railings");
    // console.log(railings);
    let pickets = $("#pickets");
    // console.log(pickets);
    let nails1 = $("#nails-1-inch");
    // console.log(nails1);
    let nails3 = $("#nails-3-inch");
    // console.log(nails3);

    // Update material estimate
    // Posts = (length in feet / 8') + 1
    let postsMath = (((fenceL) / 8) + 1);
    // Railings = ((posts - 1) x 2)
    let railingsMath = ((posts - 1) * 2);
    // Pickets = ((Fence length - (Posts * 6 inches)) / 5.5 inches)
    let picketsMath = ((fenceL - (posts * 0.5)) / picketWidth);
    posts.val(postsMath);
    railings.val(railingsMath);
    pickets.val(picketsMath);
    $("nails-1-inch").attr("value", "1000");
})
