var btn = $('button');

btn.on('click',function(){
  console.log("jQuery is cool!");
});

$('li').on('click',function(){
  console.log('multiple event added at once!');
});
