!function(){function e(e,n,t){return new Promise((function(o){var r=document.createElement("script");function l(){r.parentElement&&r.parentElement.removeChild(r),o()}r.src=e,r.onload=l,t&&t.forEach((function(e){r.setAttribute(e.name,e.value)})),r.onerror=function(){console.error("[polyfills-loader] failed to load: "+e+" check the network tab for HTTP status."),l()},n&&(r.type=n),document.head.appendChild(r)}))}var n=[];function t(){e("/app.js","module",[])}"fetch"in window||n.push(e("./polyfills/fetch.js")),n.length?Promise.all(n).then(t):t()}();