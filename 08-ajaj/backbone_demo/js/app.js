
//mimic a class in OO langs like ruby
var Movie = Backbone.Model.extend({

});


var movie = new Movie({title: 'jaws 3d', year: 2000});
var movie2 = new Movie({title: 'jaws 2', year: 2001});

var CardView = Backbone.View.extend({

  tagName: 'div',
  className: 'card',

  events: {
    'click h3': 'doSomething',
    'click h1': 'close'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.story, 'change', this.render);
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
