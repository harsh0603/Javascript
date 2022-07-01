



$("button");  //this is selecting all buttons same as querySelectorAll
//same for selectinf only one





// how to style the html page using jQuery







$("h1").css("color","blue");  //this is setting the style for the element & if the parameter is only one then fetting the style
$("p").addClass("addThisClass");








// how to add text and change the text......







// $("h1").text("good morning!!");


$("h1").html("<em>Harsh</em>");


console.log($("img").attr("src")); //this is getting the src attribute 

$("a").attr("href", "https://www.udemy.com");








// how to add event listener in the html elements






$("input").keydown(function (e) { 
    $("p").text(e.key);
});


$("h1").on("mouseover", function () {
    $("h1").css("color","purple");
});







// after before append prepand and remove in jQuery







// $("h1").after("<button>after the h1</button>");
// $("h1").before("<button>before the h1</button>");
// $("h1").append("<button>append the h1</button>");
// $("h1").prepend("<button>prepend the h1</button>");



// $("p").remove();








// adding animation in the html element



$("button").click(function () { 
   
    $("p").slideToggle();

    $("p").animate({opacity:0.5});

    $("p").slideUp().slideDown().animate({margin:"20%"}); //these functions will work only in sequence in which they are written
    
});



//================================================================================================================================================================
//================================================================================================================================================================