var SPOTS=function(){function a(a,b,c){e.innerHTML=a,SPOTS.DOM=e.querySelector(b),"function"==typeof c&&c(d,SPOTS.DOM,e)}function b(a){if(f&&(a.stopImmediatePropagation(),a.target===d)){var b=$.Event(a.type,{originalEvent:a});$(":focus",SPOTS.DOM).trigger(b)}}var c=Element.prototype.createShadowRoot||Element.prototype.webkitCreateShadowRoot,d=document.createElement("spots-wrapper"),e=c?c.call(d):null,f=!1;return d.resetStyleInheritance=!0,["keydown","keyup","keypress"].forEach(function(a){window.addEventListener(a,b,!0)}),{lock:function(){f=!0},unlock:function(){f=!1},destory:function(){this.unlock(),this.wrapper.remove()},wrapper:d,shadowRoot:e,createWrapper:e?a:function(){}}}();