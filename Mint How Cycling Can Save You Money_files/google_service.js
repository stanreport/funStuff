(function(){function h(a){this.t={};this.tick=function(a,c,d){d=d?d:(new Date).getTime();this.t[a]=[d,c]};this.tick("start",null,a)}var l=new h;window.GA_jstiming={Timer:h,load:l};if(window.GA_jstiming){window.GA_jstiming.d={};window.GA_jstiming.i=1;var m=function(a,b,c){var d=a.t[b],e=a.t.start;if(d&&(e||c))return d=a.t[b][0],e=void 0!=c?c:e[0],d-e};window.GA_jstiming.report=function(a,b,c){var d="";a.h&&(d+="&"+a.h);var e=a.t,f=e.start,k=[],n=[],g;for(g in e)if("start"!=g&&0!=g.indexOf("_")){var p=e[g][1];p?e[p]&&n.push(g+"."+m(a,g,e[p][0])):f&&k.push(g+"."+m(a,g))}delete e.start;if(b)for(var v in b)d+="&"+v+"="+b[v];a=[c?c:"{{SCHEME}}//csi.gstatic.com/csi","?v=3","&s="+
(window.GA_jstiming.sn||"gam")+"&action=",a.name,n.length?"&it="+n.join(","):"","",d,"&rt=",k.join(",")].join("");b=new Image;var w=window.GA_jstiming.i++;window.GA_jstiming.d[w]=b;b.onload=b.onerror=function(){delete window.GA_jstiming.d[w]};b.src=a;b=null;return a}};var q=this,r=function(a,b){var c,d=b,e=a.split(".");c=c||q;e[0]in c||!c.execScript||c.execScript("var "+e[0]);for(var f;e.length&&(f=e.shift());)e.length||void 0===d?c=c[f]?c[f]:c[f]={}:c[f]=d},t=function(a){var b=s;function c(){}c.prototype=b.prototype;a.l=b.prototype;a.prototype=new c;a.k=function(a,c,f){var k=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,k)}};var u=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,x=function(a,b){if(!a)return b;var c=a.match(u);return c?c[0]:b};var y,z="true",A=!1,B=y=/^true$/.test(z)?!0:/^false$/.test(z)?!1:A;var C=function(){return x("","pubads.g.doubleclick.net")};var D=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)};var E=function(a){this.c=[];this.b={};for(var b=0,c=arguments.length;b<c;++b)this.b[arguments[b]]=""};E.prototype.j=function(a){return this.b.hasOwnProperty(a)?this.b[a]:""};E.prototype.geil=E.prototype.j;var F=function(a){var b=[],c=function(a){""!=a&&b.push(a)};D(a.b,c);return 0<a.c.length&&0<b.length?a.c.join(",")+","+b.join(","):a.c.join(",")+b.join(",")};function G(a){var b="adsense";if(a&&"string"==typeof a&&0<a.length&&null!=b){var c=window.GS_googleServiceIds_[b];null==c&&(c="adsense"==b?new H:new I,window.GS_googleServiceIds_[b]=c);t:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break t;c.a[c.a.length]=a}a=c}else a=null;return a}r("GS_googleAddAdSenseService",G);function J(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];"function"!=typeof b&&b.enable()}}r("GS_googleEnableAllServices",J);
function K(){window.GS_googleServiceIds_={}}r("GS_googleResetAllServices",K);function L(){var a;a="adsense";a=null==a?null:window.GS_googleServiceIds_[a];return a=null==a?"":a.a.join()}r("GS_googleGetIdsForAdSenseService",L);function M(a){return N(a)}r("GS_googleFindService",M);function O(){var a=N("adsense");return a?F(a.g):""}r("GS_googleGetExpIdsForAdSense",O);function s(a){this.f=a;this.a=[];this.g=new E}
s.prototype.toString=function(){for(var a="["+this.f+" ids: ",b=0;b<this.a.length;b++)0<b&&(a+=","),a+=this.a[b];return a+="]"};var N=function(a){return a=null==a?null:window.GS_googleServiceIds_[a]};function I(){s.call(this,"unknown")}t(I);I.prototype.enable=function(){};function H(){s.call(this,"adsense");this.e=!1}t(H);
H.prototype.enable=function(){if(!this.e){var a;a=(a=document.URL)&&(0<a.indexOf("?google_debug")||0<a.indexOf("&google_debug"))?"google_ads_dbg.js":"google_ads.js";var b="http://"+x("","partner.googleadservices.com");B&&(b="https://"+x("","securepubads.g.doubleclick.net"));var c="",d;d=C();(d="pubads.g.doubleclick.net"==d)||(c="?prodhost="+C());a=b+"/gampad/"+a+c;b="script";document.write("<"+b+' src="'+a+'">\x3c/script>');this.e=!0;window.GA_jstiming&&
window.GA_jstiming.Timer&&(window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start"))}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});})()
