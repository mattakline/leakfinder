var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(()=>{"use strict";var t={bottom:"0px",position:"fixed",right:"0px",width:"110px","z-index":"1200"};const e=function(t){return Object.keys(t).map((function(e){return e+":"+t[e]})).join(";")};var n=function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)},r=function(t){var r=t.initialStyles,i=t.openStyles;return function(t){return e(t?n(n(n({},r),i),{width:window.innerWidth<=400?window.innerWidth+"px":i.width}):r)}}({initialStyles:t,openStyles:{display:"block",width:"400px",height:"100vh"}});var i,o,a,u;i=function(){var t=document.getElementById("housecall-pro-chat-bubble"),e=document.createElement("iframe");e.id="proChatIframe";var n=btoa(document.location.href);return e.src="https://web.archive.org/web/20240525104149/https://messages.housecallpro.com/website_builder?fallback_url="+n+(t?function(t){var e="",n=t.getAttribute("data-color");n&&(e+="&color="+btoa(n));var r=t.getAttribute("data-organization");return r&&(e+="&organization="+btoa(r)),e}(t):""),[e,["height: 100%","width: 100%","border: none","overflow: hidden"]]}(),o=i[0],a=i[1],u=function(t){var e=document.createElement("div");return e.id="proChatIframeContainer",document.body.appendChild(e),e.appendChild(t),e}(o),function(n,i){var o=i[0],a=i[1],u=!1;o.setAttribute("style",a.join(";")),n.setAttribute("style",e(t)),window.addEventListener("resize",(function(){return n.setAttribute("style",r(u))})),window.addEventListener("message",(function(t){var e=function(t){try{return JSON.parse(t.data)}catch(t){return{type:"noAction"}}}(t);"toggleChat"===e.type&&(u=e.open,n.setAttribute("style",r(e.open)))}))}(u,[o,a])})();

}
/*
     FILE ARCHIVED ON 10:41:49 May 25, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:32:14 Apr 14, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.326
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.013
  esindex: 0.01
  cdx.remote: 13.29
  LoadShardBlock: 265.392 (3)
  PetaboxLoader3.datanode: 184.728 (5)
  PetaboxLoader3.resolve: 556.975 (3)
  load_resource: 530.387 (2)
*/