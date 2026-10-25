document.querySelectorAll('button.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.previousElementSibling.innerText;
    navigator.clipboard.writeText(t).then(function(){b.textContent='Copied!';setTimeout(function(){b.textContent='Copy prompt'},1500)});
  });
});
