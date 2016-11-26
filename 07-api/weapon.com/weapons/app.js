$(document).ready(
    function(){
    displayPage(1);

    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/weapons_count'
    }).done(function(response){
      page_count = response;
      for(var i = 0; i < Math.ceil(response/3); i++){
        $('.pager').append("<div class='page'>" + (i+1) + "</div>");
      }
       renderPager();
    });

    $('.add').on('click',function(event){
      var weapon_name = $('#name').val();
      var weapon_image_url = $('#image_url').val();
      console.log(weapon_image_url);
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/api/weapons',
        data: {name : weapon_name, image_url : weapon_image_url}
      }).done(function(response){
          console.log(response);
          if(page_count%3 == 0){
              $('.pager').append("<div class='page'>" + (page_count/3+1) + "</div>");
              renderPager();
          }
          page_count++;
          // addOne(response);page_count
          // renderButtons();
        }
      );
    });
  });

var page_count = 0;

function renderPager() {
  var pages = $('.page');
  pages.each(function(i , e){
    $(e).on('click', function(event){
      var page = $(event.target).text();
      displayPage(page);
    })
  });
}

function displayPage(p){
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/weapons?p=' + p
  }).done(function(response){
    list_all(response);
    renderButtons();
  });
}

function renderButtons() {
// bind delete event
$('.delete').on('click', function(event){

  var $weapon_div = $(event.target).closest('.weapon_card');
  var weaponID = $weapon_div.data('id');
  $.ajax({
    method: 'DELETE',
    url: 'http://localhost:3000/api/weapons',
    data: {weapon_id : weaponID}
  }).done(function(){

    $weapon_div.remove();
    page_count--;
    if(page_count%3 == 0){
        $('.page').last().remove();
    }
    console.log("Yes!");});
});

//bind edit event
$('.edit_btn').on('click', function(event){

  var $edit_form = $(event.target).parent().siblings('.hidden_edit');
  $edit_form.css('display','block');
  var $weapon_div = $(event.target).closest('.weapon_card');
  var weaponID = $weapon_div.data('id');
  var weaponName = $edit_form.find('input:nth-child(1)').val();
  var weaponUrl = $edit_form.find('input:nth-child(2)').val();

  // $.ajax({
  //   method: 'PUT',
  //   url: 'api/weapons',
  //   data: {weapon_id : weaponID, weapon_name : weaponName, weapon_url : weaponUrl}
  // }).done(function(response){
  //   // hid edit form
  //   $edit_form.css('display','none');
  //   //change the id of this weapon card
  //   $edit_form.closest().data(response.id);
  //   //change thet title
  //   $edit_form.closest().children('h2').text(response.name);
  //   //change the url
  //   $edit_form.closest().children('img').attr('src', response.image_url);
  //
  // });
});

$('.hidden_edit button').on('click', function(event){
  var $edit_form = $(event.target).closest('.hidden_edit');
  var $weapon_div = $(event.target).closest('.weapon_card');
  var weaponID = $weapon_div.data('id');
  var weaponName = $edit_form.find('input:nth-child(1)').val();
  var weaponUrl = $edit_form.find('input:nth-child(2)').val();

  console.log(weaponUrl);
  $.ajax({
    method: 'PUT',
    url: 'http://localhost:3000/api/weapons',
    data: {weapon_id : weaponID, weapon_name : weaponName, weapon_url : weaponUrl}
  }).done(function(response){
    // hid edit form
    $edit_form.css('display','none');
    //change the id of this weapon card
    $weapon_div.data(response.id);
    //change thet title
    $weapon_div.children('h2').text(response.name);
    //change the url
    $weapon_div.children('img').attr('src', response.image_url);
  });
});

}


// function(response){$('.wrapper').empty(); list_all(response);}


function addOne(obj){
  $('.wrapper').append("<div class='weapon_card' data-id=" + obj.id + "><h2>" + obj.name +
  "</h2><img src='" + obj.image_url + "' alt= /><p><button class='delete'>Remove</button><button class='edit_btn'>Edit</button></p>"+
  "<p class='hidden_edit' style='display:none;'><input type='text' class='edit_form' name='name_edit'/><input type='text' class='edit_form' name='url_edit'/><button class='edit_form'>Save</button></p><div>");
}


function list_all(arr){
  $('.wrapper').empty();
  $('.wrapper').append("<div class='flex-container'></div>");
  arr.forEach(function(e){
    $('.flex-container').append("<div class='weapon_card' data-id=" + e.id + "><h2>" + e.name +
    "</h2><img src='" + e.image_url + "' alt= /><p><button class='delete'>Remove</button><button class='edit_btn'>Edit</button></p>"+
    "<p class='hidden_edit' style='display:none;'><input type='text' class='edit_form' name='name_edit'/><input type='text' class='edit_form' name='url_edit'/><button class='edit_form'>Save</button></p><div>");
  });
}
