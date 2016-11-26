$(document).ready(function() {

    createCanvas();
    function createCanvas() {
        for(var i = 0; i < 10000; i++) {
          var $pix = $('<div>', {class: 'square'});
          $pix.css('float', 'right');
          // $pix.css('background-color', 'red');
          $('.canvas').append($pix);
        }
        $('.square').on('mouseover',function(event) {
          $(event.target).css('background-color', "green");
        });
    }

});
