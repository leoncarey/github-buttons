(function(){var t,e,n,r,a,o,i,c,s,l,u,h,d,p,f,b,m,g,y,w,v,_,C,$=[].slice,k=function(t,e){function n(){this.constructor=t}for(var r in e)E.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},E={}.hasOwnProperty;C=this,_=C.document,r="https://api.github.com",n="github-button",a="octicon",o=a+"-mark-github",i=!{}.hasOwnProperty.call(_,"currentScript")&&delete _.currentScript&&_.currentScript?_.currentScript.src.replace(/[^\/]*([?#].*)?$/,""):(/^http:/.test(_.location)?"http":"https")+"://buttons.github.io/",c="faa75404-3b97-5585-b449-4bc51338fbd1",g=function(){function t(){}return t.deepProperty=function(t,e){var n,r,a;if(null==e)return t;for(r=e.split(/\.|(?=\[\d+\])/);r.length&&null!=t;)n=r.shift(),(a=n.match(/^\[(\d+)\]$/))&&(n=+a[1]),t=t[n];return t},t}(),m=function(){function t(){}return t.numberWithDelimiter=function(t){return(""+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},t}(),v=function(){function t(){}return t.stringify=function(t){var e,n,r;n=[];for(e in t)r=t[e],n.push(encodeURIComponent(e)+"="+(null!=r?encodeURIComponent(r):""));return n.join("&")},t.parse=function(t){var e,n,r,a,o,i,c,s;for(a={},i=t.split("&"),e=0,r=i.length;e<r;e++)""!==(o=i[e])&&(c=o.split("="),n=c[0],s=2<=c.length?$.call(c,1):[],""!==n&&(a[decodeURIComponent(n)]=decodeURIComponent(s.join("="))));return a},t}(),b=function(){function t(){}return t.encode=function(t){return"#"+v.stringify(t)},t.decode=function(t){return null==t&&(t=_.location.hash),v.parse(t.replace(/^#/,""))||{}},t}(),h=function(){function t(t){this.$=t}var e,n;return t.prototype.on=function(){var t,n,r,a,o,i,c;for(r=2<=arguments.length?$.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],t=function(t){return function(e){return a.call(t,e||C.event)}}(this),i=0,c=r.length;i<c;i++)n=r[i],e(this.$,n,t)},t.prototype.once=function(){var t,r,a,o,i,c,s;for(a=2<=arguments.length?$.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++],t=function(e){return function(r){var i,c,s;for(c=0,s=a.length;c<s;c++)i=a[c],n(e.$,i,t);return o.call(e,r||C.event)}}(this),c=0,s=a.length;c<s;c++)r=a[c],e(this.$,r,t)},e=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},n=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},t}(),u=function(t){function e(t,e){this.$=t&&1===t.nodeType?t:_.createElement(t),e&&e.call(this,this.$)}return k(e,t),e}(h),p=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,r,a;r={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in r)a=r[n],e.setAttribute(n,a);e.style.cssText="width: 1px; height: 0; border: none",e.src="javascript:0",t&&t.call(this,e)})}var n,r;return k(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open().write(t),e.close()}catch(t){}},e.prototype.load=function(t){this.$.src=t},e.prototype.size=function(){var t,e,n,a,o,i;try{return n=this.$.contentWindow.document,o=n.documentElement,t=n.body,i=o.scrollWidth,a=o.scrollHeight,t.getBoundingClientRect&&(t.style.display="inline-block",e=t.getBoundingClientRect(),i=Math.max(i,r(e.width||e.right-e.left)),a=Math.max(a,r(e.height||e.bottom-e.top)),t.style.display=""),{width:i+"px",height:a+"px"}}catch(t){}},e.prototype.resize=function(t){var e,n,r;n=null!=t?t:this.size()||{},r=n.width,e=n.height,r&&(this.$.style.width=r),e&&(this.$.style.height=e)},n=C.devicePixelRatio||1,r=function(t){return(n>1?Math.ceil(Math.round(t*n)/n*2)/2:Math.ceil(t))||0},e}(u),t=function(){function t(){}return t.parse=function(t){var e,n,r,a,o;for(a={href:t.href,text:t.getAttribute("data-text")||t.textContent||t.innerText||""},o=["data-count-api","data-count-href","data-count-aria-label","data-style","data-icon","aria-label"],n=0,r=o.length;n<r;n++)e=o[n],a[e]=t.getAttribute(e)||"";return a},t}(),function(t){function e(t,n,r){var a;e.__super__.constructor.call(this,n),a=function(e){return function(){var n;a=null,n=e.size(),e.$.parentNode.removeChild(e.$),e.once("load",function(){this.resize(n)}),e.load(i+"buttons.html"+t),r&&r.call(e,e.$)}}(this),this.once("load",function(){var t;(t=this.$.contentWindow.callback)?new u(t.script,function(t){this.on("load","error",function(){a&&a()}),t.readyState&&this.on("readystatechange",function(){!/i/.test(t.readyState)&&a&&a()})}):a()}),this.html('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+c+'</title><link rel="stylesheet" href="'+i+'assets/css/buttons.css"><script>document.location.hash = "'+t+'";</script></head><body><script src="'+i+'buttons.js"></script></body></html>')}k(e,t)}(p),function(){function t(t){t&&(_.body.className=t["data-style"]||"",new e(t.href,null,function(e){var n;e.className="button",(n=t["aria-label"])&&e.setAttribute("aria-label",n),new u("i",function(n){n.className=a+" "+(t["data-icon"]||o),n.setAttribute("aria-hidden","true"),e.appendChild(n)}),e.appendChild(_.createTextNode(" ")),new u("span",function(n){t.text&&n.appendChild(_.createTextNode(t.text)),e.appendChild(n)}),_.body.appendChild(e)}),function(){var n;(n=t["data-count-api"])&&new e(t["data-count-href"]||t.href,t.href,function(e){e.className="count",new u("b",function(t){e.appendChild(t)}),new u("i",function(t){e.appendChild(t)}),new u("span",function(a){new u("script",function(o){var i;o.async=!0,o.src=r+function(){var t,e;return t=n.replace(/^(?!\/)/,"/").split("#")[0],e=v.parse(t.split("?").slice(1).join("?")),e.callback="callback",t.split("?")[0]+"?"+v.stringify(e)}(),C.callback=function(r){var o,i;C.callback=null,200===r.meta.status&&(i=g.deepProperty(r.data,n.split("#").slice(1).join("#")),"[object Number]"==={}.toString.call(i)&&(i=m.numberWithDelimiter(i)),a.appendChild(_.createTextNode(i)),e.appendChild(a),(o=t["data-count-aria-label"])&&e.setAttribute("aria-label",o.replace("#",i)),_.body.appendChild(e))},C.callback.script=o,this.on("error",function(){C.callback=null}),o.readyState&&this.on("readystatechange",function(){"loaded"===o.readyState&&o.children&&"loading"===o.readyState&&(C.callback=null)}),i=_.getElementsByTagName("head")[0],"[object Opera]"==={}.toString.call(C.opera)?new h(_).on("DOMContentLoaded",function(){i.appendChild(o)}):i.appendChild(o)})})})}())}var e;e=function(t){function e(t,i,c){e.__super__.constructor.call(this,"a",function(e){if(n){if((e.href=i)&&e.protocol!==r)try{e.href=new URL(t,i).href}catch(r){n.href=i,e.href=t,new u("div",function(t){t.innerHTML=e.outerHTML,e.href=t.lastChild.href,t=null}),n.href=_.location.href,n.removeAttribute("href")}else e.href=t;a.test(e.href)&&(e.target="_top"),e.protocol!==r&&o.test("."+e.hostname)||(e.href="#",e.target="_self")}c(e)})}var n,r,a,o;return k(e,t),n=_.getElementsByTagName("base")[0],r="javascript:",o=/\.github\.com$/,a=/^https?:\/\/((gist\.)?github\.com\/[^\/]+\/[^\/]+\/archive\/|github\.com\/[^\/]+\/[^\/]+\/releases\/download\/|codeload\.github\.com\/)/,e}(u)}(),l=function(){function t(t){var e;/m/.test(_.readyState)||!/g/.test(_.readyState)&&!_.documentElement.doScroll?C.setTimeout(t):_.addEventListener?new h(_).once("DOMContentLoaded",t):(e=function(){/m/.test(_.readyState)&&(_.detachEvent("onreadystatechange",e),t&&t())},_.attachEvent("onreadystatechange",e))}return t}(),f=function(){function t(){}return t.low_rate_limit=!1,C.callback=function(e){t.rate_limit=e.data,t.low_rate_limit=t.rate_limit.resources.core.remaining<16},t.update=function(){C.callback.script||new u("script",function(t){var e;t.async=!0,t.src="https://api.github.com/rate_limit?callback=callback",C.callback.script=t,this.on("readystatechange","load","error",function(){t.readyState&&!/loaded|complete/.test(t.readyState)||(t.parentNode.removeChild(t),C.callback.script=null)}),e=_.getElementsByTagName("head")[0],e.insertBefore(t,e.firstChild)})},t.update(),t}(),u=function(t){function e(t,e){this.$=t&&1===t.nodeType?t:_.createElement(t),e&&e.call(this,this.$)}var n,r,a,o;return k(e,t),e.prototype.addClass=function(t){r(this.$,t)||n(this.$,t)},e.prototype.removeClass=function(t){r(this.$,t)&&o(this.$,t)},e.prototype.hasClass=function(t){return r(this.$,t)},n=function(t,e){t.className+=" "+e},o=function(t,e){t.className=(" "+t.className+" ").replace(a," ").replace(" "+e+" ","").replace(/^ | $/,"")},r=function(t,e){return(" "+t.className+" ").replace(a," ").indexOf(" "+e+" ")>=0},a=/[ \t\n\f\r]+/g,e}(h),d=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return k(e,t),e.prototype.on=function(){var t,n,r,a,o,i,c,s;if(r=2<=arguments.length?$.call(arguments,0,o=arguments.length-1):(o=0,[]),a=arguments[o++],r.indexOf("change")>=0)for(t=function(t){return function(e){return a.call(t,e||C.event)}}(this),s=this.$.elements,i=0,c=s.length;i<c;i++)n=s[i],new u(n).on("change","input",t);return e.__super__.on.apply(this,arguments)},e.prototype.serialize=function(){var t,e,n,r,a;for(t={},a=this.$.elements,e=0,n=a.length;e<n;e++)if(r=a[e],r.name)switch(r.type){case"radio":case"checkbox":r.checked&&(t[r.name]=r.value);break;default:t[r.name]=r.value}return t},e}(u),y=function(t){function e(t,r){var a,o,i,c;i=t.href,c=t.text,o=t.data,a=t.aria,e.__super__.constructor.call(this,"a",function(t){var e,s;t.className=n,t.href=i,t.appendChild(_.createTextNode(""+c));for(e in o)s=o[e],t.setAttribute("data-"+e,s);for(e in a)s=a[e],t.setAttribute("aria-"+e,s);r&&r(t)})}return k(e,t),e}(u),w=function(t){function e(t){e.__super__.constructor.call(this,function(e){t.appendChild(e),e.src="buttons.html"}),this.on("load",function(){var t,e;(t=this.$.contentWindow.callback)?(e=t.script,e.readyState?new u(e).on("readystatechange",function(){/loaded|complete/.test(e.readyState)&&this.resize()}):new u(e).on("load","error",function(){this.resize()})):this.resize()})}return k(e,t),e.prototype.load=function(t){var e;e=this.$.parentNode,e.removeChild(this.$),e.style.height=2+("mega"===t["data-style"]?28:20)+"px",this.$.style.width="1px",this.$.style.height="0",this.$.src="buttons.html"+b.encode(t),e.appendChild(this.$)},e}(p),s=function(t){function e(){e.__super__.constructor.apply(this,arguments),this.on("focus",function(){this.$.select()}),this.on("click",function(){this.$.select()}),this.on("mouseup",function(t){return t.preventDefault(),!1})}return k(e,t),e}(u),e=function(e){function n(e,n){var o,i,c,s,l,u,h,d,p,m,g,w;this.$=e,s=n.content,h=n.preview,o=h.button,l=h.frame,c=h.code,w=h.warning,p=n.snippet,m=n.user_repo,d={autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:"false"};for(u in d)g=d[u],this.$.setAttribute(u,g);p.$.value='<!-- Place this tag in your head or just before your close body tag. -->\n<script async defer src="https://buttons.github.io/buttons.js"></script>',i=function(e){return function(n){var i,u,h,d,p,g,v,_,C,$;if(u=n.force,_=e.serialize(),_.type){for(s.removeClass("hidden"),C=["repo","standard-icon"],h=0,p=C.length;h<p;h++)v=C[h],e.$.elements[v].disabled="follow"===_.type;for($=["show-count"],d=0,g=$.length;d<g;d++)v=$[d],e.$.elements[v].disabled="download"===_.type;_.user&&!a(_.user)||"follow"!==_.type&&_.repo&&!r(_.repo)?m.addClass("has-error"):(m.removeClass("has-error"),""===_.user||"follow"!==_.type&&""===_.repo?m.addClass("has-warning"):m.removeClass("has-warning")),(m.hasClass("has-error")||m.hasClass("has-warning"))&&(_.user="ntkme",_.repo="github-buttons"),(e.cache!==(i=b.encode(_))||u)&&(e.cache=i,new y(e.parse(_),function(n){var r;c.$.value="<!-- Place this tag where you want the button to render. -->\n"+n.outerHTML,o.addClass("hidden"),null!=_["show-count"]&&"download"!==_.type&&(f.update(),f.low_rate_limit&&(o.removeClass("hidden"),r=new Date(1e3*f.rate_limit.resources.core.reset),(!e.reset||r>e.reset)&&(e.reset=r,w.removeClass("hidden")),u?w.addClass("hidden"):n.removeAttribute("data-count-api"))),l.load(t.parse(n)),n=null}))}}}(this),o.on("click",function(t){return t.preventDefault(),i({force:!0}),!1}),this.on("change",i)}var r,a;return k(n,e),n.prototype.parse=function(t){var e,n,r,a;if(null==t&&(t=this.serialize()),r=t.type,a=t.user,n=t.repo,e={className:"github-button",href:function(){switch(r){case"follow":return"https://github.com/"+a;case"watch":return"https://github.com/"+a+"/"+n+"/subscription";case"star":return"https://github.com/"+a+"/"+n;case"fork":return"https://github.com/"+a+"/"+n+"/fork";case"issue":return"https://github.com/"+a+"/"+n+"/issues";case"download":return"https://github.com/"+a+"/"+n+"/archive/master.zip";default:return"https://github.com/"}}(),text:function(){switch(r){case"follow":return"Follow @"+a;default:return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()}}(),data:{icon:function(){switch(r){case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download";default:return"octicon-mark-github"}}()},aria:{label:function(){switch(r){case"follow":return"Follow @"+a+" on GitHub";case"watch":case"star":case"fork":case"issue":case"download":return r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()+" "+a+"/"+n+" on GitHub";default:return"GitHub"}}()}},null!=t["large-button"]&&(e.data.style="mega"),null!=t["show-count"])switch(r){case"follow":e.data["count-href"]="/"+a+"/followers",e.data["count-api"]="/users/"+a+"#followers",e.data["count-aria-label"]="# followers on GitHub";break;case"watch":e.data["count-href"]="/"+a+"/"+n+"/watchers",e.data["count-api"]="/repos/"+a+"/"+n+"#subscribers_count",e.data["count-aria-label"]="# watchers on GitHub";break;case"star":e.data["count-href"]="/"+a+"/"+n+"/stargazers",e.data["count-api"]="/repos/"+a+"/"+n+"#stargazers_count",e.data["count-aria-label"]="# stargazers on GitHub";break;case"fork":e.data["count-href"]="/"+a+"/"+n+"/network",e.data["count-api"]="/repos/"+a+"/"+n+"#forks_count",e.data["count-aria-label"]="# forks on GitHub";break;case"issue":e.data["count-api"]="/repos/"+a+"/"+n+"#open_issues_count",e.data["count-aria-label"]="# issues on GitHub"}return null==t["standard-icon"]&&"octicon-mark-github"!==e.data.icon||delete e.data.icon,e},a=function(t){var e;return 0<(e=t.length)&&e<40&&!/[^A-Za-z0-9-]|^-|-$|--/i.test(t)},r=function(t){var e;return 0<(e=t.length)&&e<101&&!/[^\w-.]|\.git$|^\.\.?$/i.test(t)},n}(d),new l(function(){new e(_.getElementById("button-config"),{content:new u(_.getElementById("content")),user_repo:new u(_.getElementById("user-repo")),preview:{button:new u(_.getElementById("preview-button")),frame:new w(_.getElementById("preview")),code:new s(_.getElementById("code")),warning:new u(_.getElementById("preview-warning"))},snippet:new s(_.getElementById("snippet"))})}),this.onbeforeunload=function(){}}).call(this);
//# sourceMappingURL=main.js.map