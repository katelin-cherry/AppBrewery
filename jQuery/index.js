


// $(document).keydown(function(event){
// console.log(event.key);
// $("h1").text(event.key);
// });

// $("h1").on("click", function(){
//   $("h1").css("color","purple")
// })

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
