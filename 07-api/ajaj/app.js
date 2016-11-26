// $.ajax({
//   url: 'http://www.omdbapi.com/?t=jaws'
// }).done(function(data){
//   console.log(data);
// });


$("button").click( function() {
   $.ajax( {
     type: "POST",
     url: 'http://www.omdbapi.com/?t='+$('#ipt').val(),
     data: $("form").serialize(),
     success: function( response ) {
       //Code to process the response
       console.log(response);
       $("#show").html(JSON.stringify(response));
     }
   });
   return false;
 } );

 // $("button").click(function(){
 //        $.getJSON("http://www.omdbapi.com/?t=jaws", function(result){
 //            $.each(result, function(i, field){
 //                $("div").append(field + " "+ i);
 //            });
 //        });
 //    });


    // $(document).ready(function(){
    //     $("button").click(function(){
    //         $.getJSON("http://www.omdbapi.com/?t=jaws", function(result){
    //             $.each(result, function(i, field){
    //                 $("#show").append(field + " "+ i);
    //             });
    //         });
    //     });
    // });



// $(".result").submit(function(event){
//   event.preventDefault();
//   $.ajax({
//     url: 'http://www.omdbapi.com/?t=jaws'
//   }).done(function(data){
//     console.log(data);
//   });
// });
