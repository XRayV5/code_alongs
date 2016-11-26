var todoBtn = document.querySelector('#addTask');
var testBtn = document.querySelector('#test');
var ulist = document.querySelector('#todos');
var todoInput = document.querySelector('#task');
var addTodo = function(){     //function expression: goes before calling
  //todoInput.value;
  var newElement = document.createElement('li');
  //newElement.textContent= todoInput.value;
  var textNode = document.createTextNode(todoInput.value);
  newElement.appendChild(textNode);
  ulist.appendChild(newElement);
  todoInput.value="";
  todoInput.focus();
}
todoBtn.addEventListener('click',addTodo);
testBtn.addEventListener('click',function(event){
  //todoInput.value;
  var newElement = document.createElement('li');
  //newElement.textContent= todoInput.value;
  var textNode = document.createTextNode(todoInput.value);
  newElement.appendChild(textNode);
  ulist.appendChild(newElement);
  todoInput.value="";
  todoInput.focus();
  console.log(event.target);
});

// $("li").on("click", function(){
//   $(this).addClass('cross');
// });

ulist.addEventListener('click',function(event){
  console.log(event.target);
  console.log('something');

  if(event.target.tagName==='LI'){
    if(event.target.style.textDecoration===""){
      event.target.style.textDecoration = 'line-through';

    }
      else{
        event.target.style.textDecoration = '';
        var cmplt = document.querySelector('#completed');
        var newli = document.createElement('li');
        var newContentNode = document.createTextNode(event.target.textContent);
        newli.appendChild(newContentNode);
        console.log(newli);
        cmplt.appendChild(newli);
        this.removeChild(event.target);
      }
  }
});

var newToDo = document.querySelector('#NewTodo');
console.log(newToDo);
newToDo.addEventListener("keypress",function(event){
  console.log(event.which);
});

$('#traverse').on("click",function(){
  //$("#dom").append("<li>"+$("#task").val()+"</li>");
  var $newListing = $("<li>").text($("#task").val());
  $newListing.append($("<span>").text("Done!"));
  $("#dom").append($newListing);
  console.log();
  $("#task").val("");
});

// TO remove listing
// $("#dom").on("click",'span',function(event){
//   console.log(event.target);
//   console.log(event.target.parentNode);
//   //$(event.target).remove();
//   $(event.target.parentNode).remove();
//   event.target.parentNode.removeChild(this);
// });


$("#dom").on("click",'span',function(event){
  console.log(event.target);
  console.log(event.target.parentNode);
  //$(event.target).remove();
  $(event.target.parentNode).remove();
  event.target.parentNode.removeChild(this);
});

$("#dom").on("click",'span',function(event){
  var

});
