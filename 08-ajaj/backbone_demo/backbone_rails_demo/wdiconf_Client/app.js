// Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

//definitions
var eventCollection = Backbone.Collection.extend({
    model:Model
});

//wherever you need a collection instance
collection = new eventCollection();

//wherever you need to do the ajax
Backbone.ajax({
    dataType: "jsonp",
    url: "https://localhost:3000/",
    data: ""
}).done(function(val){
    collection.add(val);  //or reset
    console.log(collection);
});

//mimic a class in OO langs like ruby
var Movie = Backbone.Model.extend({

});


var movie = new Movie({title: 'jaws 3d', year: 2000});
var movie2 = new Movie({title: 'jaws 2', year: 2001});

var CardView = Backbone.View.extend({

  tagName: 'div',
  className: 'modal-body',

  events: {
    'click h3': 'doSomething',
    'click h1': 'close'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  close: function(){
    this.$el.hide();
  },

  doSomething: function() {
    console.log(this.model.get('title'));
  },

  render: function(){
    this.$el.html('<h1>'+ this.model.get('title') +'</h1><h3>' + this.model.get('year') + '</h3>');
    return this;
  }

});


var view = new CardView({ model: movie });

$('body').append(view.render().el);

var view2 = new CardView({ model: movie2});

$('body').append(view2.render().el);
