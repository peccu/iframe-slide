parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"A2T1":[function(require,module,exports) {
var n="iframe-slide",r=6e5,t=function(n){n&&(r=n)},e=function(){return r},o=function(){var r=JSON.parse(window.localStorage.getItem(n));return r||(r=[]),r},s=function(){console.log(o())},c=function(r){return window.localStorage.setItem(n,JSON.stringify(r))},i=function(n){var r=o();r.push(n),c(r)},a=function(){return document.getElementById(n)},l=function(n){n&&(a().src=n)},u=function(){return a().src},w=null,d=0,f=function(){console.log("current",[d,u()]);var n=o();l(n[d%n.length]),d++},g=function(){return w?(console.warn("already started"),null):(f(),w=window.setInterval(f,e()))},S=function(){w&&(window.clearInterval(w),w=null)},v=function(){console.log("\nsetIntervalDuration(interval): set refresh interval (ms). default: 10min\ngetInterval(): get current refresh interval (ms).\naddSrc(url): add url\nshowSrcs(): show stored urls\nfetchSrcs(): return srcs (Array)\nstoreSrcs(srcs): store srcs (Array)\nsetSrc(src): sets src into iframe.src\ngetCurrensSrc(): get current src\nnext(): set next url\nauto(): start interval\nstop(): stop interval\nhelp(): show this messages\n")};window.setIntervalDuration=t,window.getInterval=e,window.fetchSrcs=o,window.showSrcs=s,window.storeSrcs=c,window.addSrc=i,window.getFrame=a,window.setSrc=l,window.getCurrensSrc=u,window.next=f,window.auto=g,window.stop=S,window.help=v,g();
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.a64273b1.map