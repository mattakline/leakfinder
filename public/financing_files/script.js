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

!function(){let n="";function e(){return new URL(document.currentScript?.src||n||"")}function t(){const n=e().searchParams.get("orgUuid"),{token:t,orgName:o}=function(){const n=document.querySelectorAll(".hcp-button[data-orgname][data-token]")[0],t=e(),o=t.searchParams.get("token"),i=t.searchParams.get("orgName");return n||o?{token:o||n.getAttribute("data-token"),orgName:i||n.getAttribute("data-orgname")}:{token:null,orgName:null}}();return t?`https://web.archive.org/web/20240128203706/https://book.housecallpro.com/book/${o}/${t}?v2=true`:n?`https://web.archive.org/web/20240128203706/https://pro.housecallpro.com/pro/online_booking/${n}`:void 0}function o(){if(n||(n=document.currentScript?.src),document.getElementsByClassName("hcp-widget").length>0)return void console.warn("HCP widget is already initialized.");const e=t();if(!e)return;const o=document.createElement("iframe");o.src=e,o.className="hcp-iframe",o.width="100%",o.height="100%";const i=document.createElement("div");function r(n){"hcp:close"===n.data&&(i.classList.remove("hcp-widget--visible"),document.body.classList.remove("hcp-no-scroll"),window.removeEventListener("message",r)),"hcp:iframe-loaded"===n.data&&i.classList.contains("hcp-widget--visible")&&o.contentWindow.postMessage("hcp:open","*")}function c(){i.classList.add("hcp-widget--visible"),document.body.classList.add("hcp-no-scroll"),window.addEventListener("message",r)}i.className="hcp-widget",function(n){const e=document.createElement("style");e.textContent="\n      .hcp-no-scroll {\n        overflow: hidden !important;\n      }\n\n      iframe.hcp-iframe {\n        display: block;\n        visibility: visible;\n        opacity: 1;\n        border: none;\n        background: transparent;\n      }\n\n      div.hcp-widget {\n        display: none;\n        position: fixed;\n        z-index: 2147483647;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        justify-content: center;\n        align-items: center;\n      }\n\n      div.hcp-widget.hcp-widget--visible {\n        display: flex;\n      }\n\n      button.hcp-button {\n        font-weight: 600;\n        line-height: 1.14;\n        padding: 12px 24px;\n        box-shadow: none;\n        border-radius: 100px;\n        color: #fff;\n        background-color: #0f77cc;\n        text-transform: uppercase;\n        position: relative;\n        border: 0;\n        cursor: pointer;\n        margin: 0;\n        display: inline-flex;\n        outline: 0;\n        text-decoration: none;\n        user-select: none;\n        -webkit-appearance: none;\n        -webkit-tap-highlight-color: transparent;\n        text-indent: 0px;\n        text-shadow: none;\n        font-weight: normal;\n        align-items: center;\n        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n        overflow: auto;\n      }\n      button.hcp-button:hover {\n        background-color: #1565c0;\n        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n      }\n      button.hcp-button:active {\n        box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);        background-color: rgba(15, 119, 204, 0.7)\n      }\n    ",document.head.append(e)}(),i.appendChild(o),document.body.appendChild(i),window.HCPWidget={openModal:function(){c(),o.contentWindow.postMessage("hcp:open","*")},openModalWithParams:function(n){c(),o.contentWindow.postMessage({type:"hcp:open",params:n},"*")}}}function i(){const n=t();document.querySelector(`iframe[src="${n}"]`)||o()}o(),window.addEventListener("load",(()=>{i(),setTimeout(i,2e3)}))}();

}
/*
     FILE ARCHIVED ON 20:37:06 Jan 28, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:32:18 Apr 14, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.586 (2)
  exclusion.robots: 0.061 (2)
  exclusion.robots.policy: 0.027 (2)
  esindex: 0.029 (2)
  cdx.remote: 57.875 (2)
  LoadShardBlock: 395.084 (6)
  PetaboxLoader3.datanode: 349.151 (8)
  load_resource: 548.216 (2)
  PetaboxLoader3.resolve: 407.593 (2)
*/