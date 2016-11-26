
var $listing = $('.listing');
var movieView = function(e) {
    // var $movieDiv = $('<div>').text(e.Title);
    // $listing.append($movieDiv);
  // var $ui_card = $('<div>', {class: 'ui-card'});
  //   var $card_header = $('<div>', {class: 'card-header content'});
  //     var $span = $('<span>', {class: 'right'}).text('header');
  //     var $icon = $('<img>', {class: 'header_icon', src: "http://placehold.it/300x300"});
  //
  //   var $image_div = $('<div>', {class: 'image_div'});
  //     var $poster = $('<img>', {src: e.Poster})
  //     var $star = $('<span>', {class: 'star'}).html('&#9733;');
  //
  //   var $contentDiv = $('<div>', { class: 'content'});
  //     var $title = $('<h2>').text(e.Title);
  //     var $year = $('<h4>').text(e.Year);
  //
  //   var $footer = $('<div>', {class: 'content'});
  //     var $footer_span = $('<span>', {class: 'right'}).text('100 Stars');
  //     var $footer_span2 = $('<span>', {class: 'mark'}).html('<a href="http://www.imdb.com/title/'+ e.imdbID +'" target="_blank"> bookmark</a>');
  //
  //   // $card_header.append($span);
  //   // $card_header.append($icon);
  //   $card_header.html('<span class="right">header</span><img class="header_icon" src="http://placehold.it/300x300"> ray');
  //
  //   $image_div.append($poster);
  //   $image_div.append($star);
  //
  //   $contentDiv.append($title);
  //   $contentDiv.append($year);
  //
  //   $footer.append($footer_span);
  //   $footer.append($footer_span2);
  //
  //   $ui_card.append($card_header);
  //   $ui_card.append($image_div);
  //   $ui_card.append($contentDiv);
  //   $ui_card.append($footer);
  //   var $movie_template = $('#movie-template');
  //   $ui_card.append($movie_template);
  //   //star solution 1
  //   $ui_card.find('.star').on('click', function(){
  //     console.log(e.title);
  //   });

    // $listing.append($ui_card);

    //mustach
    // var template = Handlebars.compile($('#movie-template').html());
    // console.log(template(e));
    // var $card =  $(template(e));
      // $card.find('.star').on('click', function(){
      //   console.log(e.Title);
      // });

    //node.js + Handlebars approach:
    // var template = Handlebars.compile(Handlebars.templates.e);
    var $card = $(Handlebars.templates.movie(e));
    return $card;

    // return $ui_card
}

$.ajax({
  url: 'http://www.omdbapi.com/?s=jaws'
}).done(function(response){
  var movies = response.Search;

  movies.forEach(function(e){
    // var $movieDiv = $('<div>').text(e.Title);
    // $listing.append($movieDiv);
  //   console.log(e);
  // var $ui_card = $('<div>', {class: 'ui-card'});
  //   var $card_header = $('<div>', {class: 'card-header content'});
  //     var $span = $('<span>', {class: 'right'}).text('header');
  //     var $icon = $('<img>', {class: 'header_icon', src: "http://placehold.it/300x300"});
  //
  //   var $image_div = $('<div>', {class: 'image_div'});
  //     var $poster = $('<img>', {src: e.Poster})
  //     var $star = $('<span>', {class: 'star'}).html('&#9733;');
  //
  //   var $contentDiv = $('<div>', { class: 'content'});
  //     var $title = $('<h2>').text(e.Title);
  //     var $year = $('<h4>').text(e.Year);
  //
  //   var $footer = $('<div>', {class: 'content'});
  //     var $footer_span = $('<span>', {class: 'right'}).text('100 Stars');
  //     var $footer_span2 = $('<span>', {class: 'mark'}).html('<a href="http://www.imdb.com/title/'+ e.imdbID +'" target="_blank"> bookmark</a>');
  //
  //
  //
  //
  //   // $card_header.append($span);
  //   // $card_header.append($icon);
  //   $card_header.html('<span class="right">header</span><img class="header_icon" src="http://placehold.it/300x300"> ray');
  //
  //   $image_div.append($poster);
  //   $image_div.append($star);
  //
  //   $contentDiv.append($title);
  //   $contentDiv.append($year);
  //
  //   $footer.append($footer_span);
  //   $footer.append($footer_span2);
  //
  //   $ui_card.append($card_header);
  //   $ui_card.append($image_div);
  //   $ui_card.append($contentDiv);
  //   $ui_card.append($footer);
  //   //star solution 1
  //   $ui_card.find('.star').on('click', function(){
  //     console.log(e.title);
  //   });
  //$listing.append($ui_card);

  //Refactoring
  $listing.append(movieView(e));
  });
  //end


  //Star click solution 2
  $('.star').on('click', function(event){
    var title = $(event.target).closest('.image_div').next().children();
    console.log($(title[0]).text());
    // console.log(title[0].textContent);
  });

  //Star click soltion 3
  $('.listing').on('click', '.star', function(event){
    // console.log($(event.target).closest(".ui-card").find("h2").text());

    // console.log($(event.target));
    $(event.target).closest('.image_div').find('.word').html('Liked');
    // $(event.target).closest('.image_div').find('.word').html('Liked!');
    console.log(this);
  });


  $('ui-card').find('.mark').on('click', function(event){
    $(event.target).text('Marked!');
  });

});


var boss = {
  fullname: 'dt!'
}

var coolPerson = {
  fullname: 'Tad',
  intro: function() {
    console.log("He's cool! " + this.fullname);
  }
}

var fullname = 'dt';
var greetings = coolPerson.intro;

greetings() // this points to the window/global
greetings.call(boss); //
coolPerson.intro();


arr = [1, 2, 3];
// arr.forEach(console.log(this));
arr.forEach(console.log.bind(console));
