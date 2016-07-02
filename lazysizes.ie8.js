/*
  lazysizes.ie8.js
  by Lackneets Chang < lackneets@gmail.com >
*/
(function(){

  var onReady=function(d){"complete"==document.readyState?d():document.addEventListener?window.addEventListener("load",d,!1):window.attachEvent("onload",d)};

  /* Fallback for lazysizes on IE8 */
  onReady(function(){
    if (document.documentMode == 8) {
      var elms = document.querySelectorAll('.lazyload');
      for(var i=0; i<elms.length; i++){
        elms[i].setAttribute('class', String(elms[i].getAttribute('class')).replace(/\s*lazyload\s*/g, ' lazyloaded '));
        if(elms[i].getAttribute('data-src')){
          elms[i].setAttribute('src', elms[i].getAttribute('data-src'));
        }
      }
    } 
  });

})();
