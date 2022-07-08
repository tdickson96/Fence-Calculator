// I need a function that takes estimate materials and outputs a cost estimate
// I need to take the user INPUTS from the fence details and turn them into amount of materials

// input.addEventListener("input", (e) => { 
//    textarea.innerText = input.value; 
// }
// 4 x 4 x 10
const posts = 100025396;
// 2 x 4 x 8
const railings = 206966018;
// 1 x 6 x 8
const pickets = 206974327;

let postCosts = `https://serpapi.com/search.json?engine=home_depot&q=${posts}&api_key=c60213f49b7f6c7d3104e4e3ebedb0a867f554b32488845fa0c2ed875f163e86`;
let railingCosts = `https://serpapi.com/search.json?engine=home_depot&q=${railings}&api_key=c60213f49b7f6c7d3104e4e3ebedb0a867f554b32488845fa0c2ed875f163e86`;
let picketCosts = `https://serpapi.com/search.json?engine=home_depot&q=${pickets}&api_key=c60213f49b7f6c7d3104e4e3ebedb0a867f554b32488845fa0c2ed875f163e86`;

const params = {
  engine: "home_depot",
  q: "pressure treated wood"
};

const callback = function(data) {
  console.log(data["price"]);
};

// I need a function that takes the user inputs and estimates materials needed and costs based on materials
$("#materials-estimate").click(function () {

    // User input values
    let fenceL = $("#fence-length").val();
    // console.log(fenceL);

    // Materials estimates values
    let posts = $("#posts");
    // console.log(posts);
    let railings = $("#railings");
    // console.log(railings);
    let pickets = $("#pickets");
    // console.log(pickets);
    let screws = $("#screws");
    // console.log(screws);

    // Posts = (length in feet / 8') + 1
    let postsMath = Math.ceil(((fenceL) / 8) + 1);
    // Railings = ((posts - 1) x 2)
    let railingsMath = ((postsMath - 1) * 2);
    // Pickets = ((Fence length - (Posts * 6 inches)) / 5.5 inches)
    let picketsMath = (16 * (postsMath - 1));
    //  Screw math = 8 screws per railing, 2 railings, 4 screws per picket, 16 pickets
    let screwsMath = (((railingsMath * 8) + (picketsMath * 4)));

    posts.val(postsMath);
    railings.val(railingsMath);
    pickets.val(picketsMath);
    screws.val(screwsMath);
    if (screwsMath < 1000) {
        screws.val(1000);
    } else if (screwsMath > 1000) {
        Math.round(value/1000)*1000;
    };

    // Cost estimate based on materials
    let postCost = $("#postCost");
    console.log(postCost);
    let railingCost = $("#railingCost");
    console.log(railingCost);
    let picketCost = $("#picketCost");
    console.log(picketCost);
    let screwCost = $("#screwCost");
    console.log(screwCost);

    let poCost = (postsMath * 60);
    let rCost = (railingsMath * 10);
    let piCost = (picketsMath * 6);
    let scCost = ((screwsMath/1000) * 60);

    postCost.val(poCost);
    railingCost.val(rCost);
    picketCost.val(piCost);
    screwCost.val(scCost);

    // Total cost
    let totalCost = $("#totalCost");

    let totalMath = (poCost + rCost + piCost + scCost);

    totalCost.val(totalMath);
})

$("#email-btn").click(function () {
    window.prompt("Enter your email!");
});