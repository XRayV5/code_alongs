function validateInput(val){
  if(val){
    return true;
  }else{
    return false;
  }
}

function checkPassword(){
  var npw = $('#npw').val();
  var cpw = $('#cpw').val();
  if(npw!==cpw){
    console.log('???');
      $('#pwcheck').html('Password does not match.');
      return false;
  }else{
      $('#pwcheck').html('Password match!');
      return true;
  }
}

$(document).ready(function(){
  $('#login_form').submit(function(event){
    if(!validateInput($('#login_uname').val())){
      $('#check').html('Username cannot be empty');
      event.preventDefault();
      return false;
    }else if(!checkPassword()){
      alert('Password does not match');
      event.preventDefault();
    }
    else{
      event.target.submit();
    }
  });

  $('#cpw').keyup(checkPassword);




});
