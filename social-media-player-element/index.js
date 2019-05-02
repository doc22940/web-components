var SocialMediaPlayerElement=function(){var e=["autoplay","height","loop","poster","src","volume","width"];function t(e,t){const o=null==e?document.createDocumentFragment():e===Object(e)?e:document.createElement(e);for(const e in t)e in o?o[e]=t[e]:null===t[e]&&o.removeAttribute?o.removeAttribute(e):o.setAttribute&&o.setAttribute(e,t[e]);return o.append&&o.append(...Array.prototype.slice.call(arguments,2)),o}function o(e){const o=t(document.createElementNS(n,"svg"),{class:"media-symbol media-"+e+"-symbol",role:"presentation"},t(document.createElementNS(n,"path"),{d:l[e]}));return o.setAttribute("viewBox","0 0 32 32"),o}const n="http://www.w3.org/2000/svg",l={download:"M20 2v12h4l-8 10-8-10h4V2M0 21h5v6h22v-6h5v11H0",enterFullscreen:"M0 0h12L8 4l6 6-4 4-6-6-4 4M32 0H20l4 4-6 6 4 4 6-6 4 4M0 32V20l4 4 6-6 4 4-6 6 4 4m20 0V20l-4 4-6-6-4 4 6 6-4 4",leaveFullscreen:"M0 4l4-4 6 6 4-4v12H2l4-4m26-6l-4-4-6 6-4-4v12h12l-4-4M0 28l4 4 6-6 4 4V18H2l4 4m26 6l-4 4-6-6-4 4V18h12l-4 4",mute:"M0 11h6l10-8.5v27L6 21H0M22 6l10 10-10 10",pause:"M4 0h9v32H4M28 0h-9v32h9",play:"M4 0l24 16L4 32",unmute:"M0 11h6l10-8.5v27L6 21H0"};var a=":host{--player-enter-color:rgba(153,153,255,0.25);--player-back-fullscreen-color:rgba(0,0,0,0.75);--player-fill-fullscreen-color:#fff;--player-range-color:#ccc;--player-meter-color:#08d;display:block;font:300 100%/1.5 Helvetica Neue,sans-serif}.media-toolbar{align-items:center;cursor:default;direction:ltr;display:flex;flex-wrap:wrap}:host(:-webkit-full-screen) .media-toolbar{background-color:var(--player-back-fullscreen-color);color:var(--player-fill-fullscreen-color);bottom:0;left:0;right:0;opacity:.8;position:absolute}:host(:fullscreen) .media-toolbar{background-color:var(--player-back-fullscreen-color);color:var(--player-fill-fullscreen-color);bottom:0;left:0;right:0;opacity:.8;position:absolute}.media-hidden{display:none}.media-frame{position:relative}.media-frame iframe{height:100%;top:0;right:0;bottom:0;left:0;position:absolute;width:100%}.media-media{background-color:#000;display:block;margin-left:auto;margin-right:auto;position:relative;width:100%}.media-media.audio{display:none}:host(:-webkit-full-screen) .media-media{height:100vh;width:100vw}:host(:fullscreen) .media-media{height:100vh;width:100vw}.media-control,.media-slider{background-color:initial;border-style:none;color:inherit;font:inherit;margin:0;overflow:visible;padding:0;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none}.media-slider{height:2.5em;padding:.625em .5em}.media-slider:focus{background-color:var(--player-enter-color)}.media-time{flex-grow:1;flex-shrink:1}.media-volume{flex-basis:5em}.media-range{background-color:var(--player-range-color);display:block;font-size:75%;height:1em;width:100%}.media-meter{background-color:var(--player-meter-color);display:block;height:100%;overflow:hidden;width:100%}.media-text{font-size:75%;padding-left:.5em;padding-right:.5em;white-space:nowrap;width:2.5em}.media-control{font-size:75%;line-height:1;padding:1.16667em;text-decoration:none}.media-control:focus,.media-control:hover{background-color:var(--player-enter-color)}.media-symbol{display:block;fill:currentColor;height:1em;width:1em}.media-symbol[hidden=true]{display:none}";function i(e,t,o,n){const l=void 0!==e.onpointerup,a=void 0!==e.ontouchstart,i=l?"pointerdown":a?"touchstart":"mousedown",r=l?"pointermove":a?"touchmove":"mousemove",u=l?"pointerup":a?"touchend":"mouseup",s=/^(ltr|rtl)$/i.test(o),m=/^(ltr|ttb)$/i.test(o),d=s?"clientX":"clientY";let c,p,v;function h(e){e.preventDefault();const t=d in e?e[d]:e.touches&&e.touches[0]&&e.touches[0][d]||0;n((m?t-p:v-t)/(v-p))}function y(){c.removeEventListener(r,h),c.removeEventListener(u,y)}e.addEventListener(i,function(o){c=e.ownerDocument.defaultView;const n=t.getBoundingClientRect();p=s?n.left:n.top,v=s?n.right:n.bottom,h(o),c.addEventListener(r,h),c.addEventListener(u,y)})}function r(e){return("0"+Math.floor(e/60)).slice(-2)+":"+("0"+Math.floor(e%60)).slice(-2)}function u(e,t,o){return Math.floor(e/60)+" "+t+", "+Math.floor(e%60)+" "+o}function s(e){return Object.assign(new e.constructor(e.type,e),{relatedTarget:e.target})}class m extends HTMLElement{constructor(){super();const e=this.__INTERNALS={root:this.attachShadow({mode:"closed"}),self:this,super:m,mediaType:"audio",timeDir:"ltr",volumeDir:"ltr"};!function(e){e.styleElement=t("style",null,a),e.videoElement=t("video",{class:"media-media audio"}),e.playSymbol=o("play"),e.pauseSymbol=o("pause"),e.playButton=t("button",{class:"media-control media-play"},e.playSymbol,e.pauseSymbol),e.timeMeter=t("span",{class:"media-meter media-time-meter"}),e.timeRange=t("span",{class:"media-range media-time-range"},e.timeMeter),e.timeButton=t("button",{class:"media-slider media-time",role:"slider","aria-label":e.super.lang.currentTime,"data-dir":e.timeDir},e.timeRange),e.currentTimeSpan=t("span",{class:"media-text media-current-time",role:"timer","aria-label":e.super.lang.currentTime},""),e.currentTimeText=e.currentTimeSpan.lastChild,e.remainingTimeSpan=t("span",{class:"media-text media-remaining-time",role:"timer","aria-label":e.super.lang.remainingTime},""),e.remainingTimeText=e.remainingTimeSpan.lastChild,e.muteSymbol=o("mute"),e.unmuteSymbol=o("unmute"),e.muteButton=t("button",{class:"media-control media-mute"},e.muteSymbol,e.unmuteSymbol),e.volumeMeter=t("span",{class:"media-meter media-volume-meter"}),e.volumeRange=t("span",{class:"media-range media-volume-range"},e.volumeMeter),e.volumeButton=t("button",{class:"media-slider media-volume",role:"slider","aria-label":e.super.lang.volume,"data-dir":e.volumeDir},e.volumeRange),e.downloadSymbol=o("download"),e.downloadButton=t("button",{class:"media-control media-download","aria-label":e.super.lang.download},e.downloadSymbol),e.enterFullscreenSymbol=o("enterFullscreen"),e.leaveFullscreenSymbol=o("leaveFullscreen"),e.fullscreenButton=t("button",{class:"media-control media-fullscreen"},e.enterFullscreenSymbol,e.leaveFullscreenSymbol),e.toolbarElement=t("div",{class:"media-toolbar",role:"toolbar","aria-label":e.super.lang.player},e.playButton,e.muteButton,e.volumeButton,e.currentTimeSpan,e.timeButton,e.remainingTimeSpan,e.downloadButton,e.fullscreenButton),e.playerElement=t("div",{class:"media-player",role:"region","aria-label":e.super.lang.player},e.styleElement,e.videoElement,e.toolbarElement),e.root.append(e.playerElement)}(e),function(e){const o="onfullscreenchange"in e.self?"fullscreenchange":"onwebkitfullscreenchange"in e.self?"webkitfullscreenchange":"onMSFullscreenChange"in e.self?"MSFullscreenChange":"fullscreenchange",n=e.self.requestFullscreen||e.self.webkitRequestFullscreen||e.self.msRequestFullscreen,l=()=>e.self.ownerDocument.fullscreenElement||e.self.ownerDocument.webkitFullscreenElement||e.self.ownerDocument.msFullscreenElement;e.onPlayClick=(()=>{e.videoElement[e.videoElement.paused?"play":"pause"]()}),e.onTimeClick=(t=>{t.pointerType||t.detail||e.onPlayClick(t)}),e.onMuteClick=(()=>{e.videoElement.muted=!e.videoElement.muted}),e.onVolumeClick=(t=>{t.pointerType||t.detail||e.onMuteClick(t)}),e.onDownloadClick=(()=>{const o=e.root.appendChild(t("a",{download:"",href:e.videoElement.src}));o.click(),e.root.removeChild(o)}),e.onFullscreenClick=(()=>{n?e.self===l()?(()=>(e.self.ownerDocument.exitFullscreen||e.self.ownerDocument.webkitCancelFullScreen||e.self.ownerDocument.msExitFullscreen).call(e.self.ownerDocument))():n.call(e.self):e.videoElement.webkitSupportsFullscreen&&(e.videoElement.webkitDisplayingFullscreen?e.videoElement.webkitExitFullscreen():e.videoElement.webkitEnterFullscreen(),e.onFullscreenChange())}),e.onTimeKeydown=(t=>{const{keyCode:o,shiftKey:n}=t;if(37<=o&&40>=o){t.preventDefault();const l=/^(btt|ltr)$/.test(e.timeDir),a=37===o||39===o?o-38:o-39;e.videoElement.currentTime=Math.max(0,Math.min(e.duration,e.currentTime+a*(l?1:-1)*(n?10:1))),e.onTimeChange()}}),e.onVolumeKeydown=(t=>{const{keyCode:o,shiftKey:n}=t;if(37<=o&&40>=o){t.preventDefault();const l=/^(btt|ltr)$/.test(e.volumeDir),a=37===o||39===o?o-38:l?39-o:o-39;e.videoElement.volume=Math.max(0,Math.min(1,e.videoElement.volume+a*(l?.1:-.1)*(n?1:.2)))}}),e.onPlayChange=(o=>{e.paused!==e.videoElement.paused&&(e.paused=e.videoElement.paused,t(e.playButton,{"aria-label":e.paused?e.super.lang.play:e.super.lang.pause}),t(e.playSymbol,{hidden:!e.paused}),t(e.pauseSymbol,{hidden:e.paused}),clearInterval(e.interval),e.paused||(e.interval=setInterval(e.onTimeChange,34)),e.self.dispatchEvent(new CustomEvent("playchange")),o&&e.self.dispatchEvent(s(o)))}),e.onTimeChange=(o=>{if(e.currentTime!==e.videoElement.currentTime||e.duration!==e.videoElement.duration){e.currentTime=e.videoElement.currentTime,e.duration=e.videoElement.duration||0;const n=e.currentTime/e.duration,l=r(e.currentTime),a=r(e.duration-Math.floor(e.currentTime));l!==e.currentTimeText.nodeValue&&(e.currentTimeText.nodeValue=l,t(e.currentTimeSpan,{title:""+u(e.currentTime,e.super.lang.minutes,e.super.lang.seconds)})),a!==e.remainingTimeText.nodeValue&&(e.remainingTimeText.nodeValue=a,t(e.remainingTimeSpan,{title:""+u(e.duration-e.currentTime,e.super.lang.minutes,e.super.lang.seconds)})),t(e.timeButton,{"aria-valuenow":e.currentTime,"aria-valuemin":0,"aria-valuemax":e.duration});const i=/^(ltr|rtl)$/i.test(e.timeDir)?"width":"height";e.timeMeter.style[i]=100*n+"%";const m=e.videoElement.poster||e.videoElement.videoWidth?"video":"audio";e.mediaType!==m&&(e.mediaType&&e.videoElement.classList.remove(e.mediaType),e.mediaType=m,e.videoElement.classList.add(m)),o&&e.self.dispatchEvent(s(o)),e.self.dispatchEvent(new CustomEvent("timechange"))}}),e.onLoadStart=(o=>{t(e.videoElement,{oncanplaythrough:e.onCanPlayStart}),e.onPlayChange(),e.onVolumeChange(),e.onFullscreenChange(),e.onTimeChange(),o&&e.self.dispatchEvent(s(o))}),e.onCanPlayStart=(o=>{t(e.videoElement,{oncanplaythrough:e.onCanPlayStart}),e.self.dispatchEvent(new CustomEvent("canplaystart")),e.videoElement.paused&&!e.videoElement.autoplay||e.videoElement.play(),o&&e.self.dispatchEvent(s(o))}),e.onVolumeChange=(o=>{const n=e.videoElement.muted?0:e.videoElement.volume,l=!n;t(e.volumeButton,{"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":1});const a=/^(ltr|rtl)$/i.test(e.volumeDir)?"width":"height";e.volumeMeter.style[a]=100*n+"%",t(e.muteButton,{"aria-label":l?e.super.lang.unmute:e.super.lang.mute}),t(e.muteSymbol,{hidden:l}),t(e.unmuteSymbol,{hidden:!l}),o&&e.self.dispatchEvent(s(o))}),e.onFullscreenChange=(()=>{const o=e.self===l();t(e.fullscreenButton,{"aria-label":o?e.super.lang.leaveFullscreen:e.super.lang.enterFullscreen}),t(e.enterFullscreenSymbol,{hidden:o}),t(e.leaveFullscreenSymbol,{hidden:!o})}),t(e.videoElement,{oncanplaythrough:e.onCanPlayStart,onloadedmetadata:e.onTimeChange,onloadstart:e.onLoadStart,onpause:e.onPlayChange,onplay:e.onPlayChange,ontimeupdate:e.onTimeChange,onvolumechange:e.onVolumeChange}),t(e.playButton,{onclick:e.onPlayClick,onkeydown:e.onTimeKeydown}),t(e.timeButton,{onclick:e.onTimeClick,onkeydown:e.onTimeKeydown}),t(e.muteButton,{onclick:e.onMuteClick,onkeydown:e.onVolumeKeydown}),t(e.volumeButton,{onclick:e.onVolumeClick,onkeydown:e.onVolumeKeydown}),t(e.downloadButton,{onclick:e.onDownloadClick}),t(e.fullscreenButton,{onclick:e.onFullscreenClick}),i(e.timeButton,e.timeRange,e.timeDir,t=>{e.videoElement.currentTime=e.duration*Math.max(0,Math.min(1,t)),e.onTimeChange()}),i(e.volumeButton,e.volumeRange,e.volumeDir,t=>{e.videoElement.volume=Math.max(0,Math.min(1,t))}),e.self.ownerDocument.addEventListener(o,e.onFullscreenChange),e.onLoadStart()}(e)}attributeChangedCallback(t,o,n){o!==n&&("volume"===t?this.__INTERNALS.videoElement.volume=+n:e.includes(t)&&this.__INTERNALS.videoElement.setAttribute(t,n))}static get observedAttributes(){return e}}m.lang={currentTime:"current time",download:"download",enterFullscreen:"enter full screen",leaveFullscreen:"leave full screen",minutes:"minutes",mute:"mute",play:"play",player:"media player",pause:"pause",remainingTime:"remaining time",seconds:"seconds",unmute:"unmute",volume:"volume"},["autoplay","height","loop","play","playbackRate","poster","src","volume","width"].forEach(e=>{Object.defineProperty(m.prototype,e,{get(){return"function"==typeof this.__INTERNALS.videoElement[e]?this.__INTERNALS.videoElement[e].bind(this.__INTERNALS.videoElement):this.__INTERNALS.videoElement[e]},set(t){this.__INTERNALS.videoElement[e]=t}})});var d=["audio","autoplay","height","loop","poster","src","volume","width"];function c(e,t){const o=null==e?document.createDocumentFragment():e===Object(e)?e:document.createElement(e);for(const e in t)e in o?o[e]=t[e]:null===t[e]&&o.removeAttribute?o.removeAttribute(e):o.setAttribute&&o.setAttribute(e,t[e]);return o.append&&o.append(...Array.prototype.slice.call(arguments,2)),o}function p(e){e.onYoutube=(t=>{e.youtubeID=function(e){const t=crypto.getRandomValues(new Uint8Array(e));let o="";for(;0<e--;)o+="Uint8AraygeRdomVlus012345679BCDEFGHIJKLMNOPQSTWXYZbcfhjkpqvwxz_-"[63&t[e]];return o}(21),e.youtubePoster=c("img",{class:"media-media video",src:"https://img.youtube.com/vi/"+t+"/maxresdefault.jpg",onload:e.youtubeOnPosterLoad}),e.youtubeIframe=c("iframe",{frameBorder:0,allowfullscreen:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/"+t+"?controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&showinfo=0&version=3"}),e.youtubeContainer=c("div",{class:"media-frame"},e.youtubePoster,e.youtubeIframe),e.youtubeAPI=(t=>{const o=JSON.stringify(Object.assign({id:e.youtubeID},t));e.youtubeWindow?e.youtubeWindow.postMessage(o,"*"):setTimeout(()=>{e.youtubeAPI(t)},200)}),e.youtubeAPICommand=((t,o)=>e.youtubeAPI({event:"command",func:t,args:o||[]})),e.youtubeAPIState={},e.youtubeListener=(()=>{e.onDownloadClick=(()=>{window.location="https://www.youtube.com/watch?v="+t}),c(e.downloadButton,{onclick:e.onDownloadClick}),window.addEventListener("message",t=>{if("https://www.youtube.com"===t.origin){const o=JSON.parse(t.data);o.info&&o.id===e.youtubeID&&(Object.assign(e.youtubeAPIState,o.info),o.info.duration&&e.onTimeChange(),(o.info.muted||o.info.volume)&&e.onVolumeChange(),o.info.playerState&&e.onPlayChange())}}),e.youtubeWindow=e.youtubeIframe.contentWindow,e.youtubeAPI({event:"listening"})}),e.youtubeIframe.addEventListener("load",e.youtubeListener),Object.defineProperties(e.videoElement,{audio:{get:()=>e.youtubePoster.classList.contains("audio"),set(t){e.youtubePoster.classList.toggle("audio",!t),e.youtubePoster.classList.toggle("video",t)}},currentTime:{get:()=>e.youtubeAPIState.currentTime,set(t){e.youtubeAPICommand("seekTo",[+t||0])}},duration:{get:()=>e.youtubeAPIState.duration},muted:{get:()=>e.youtubeAPIState.muted,set(t){e.youtubeAPICommand(t?"mute":"unMute")}},paused:{get:()=>1!==e.youtubeAPIState.playerState,set(t){e.youtubeAPICommand(t?"pauseVideo":"playVideo")}},pause:{value(){this.paused=!0}},poster:{get:()=>e.youtubePoster.src,set(t){e.youtubePoster.src=t+""}},play:{value(){this.paused=!1}},volume:{get:()=>e.youtubeAPIState.volume/100,set(t){e.youtubeAPICommand("setVolume",[100*t||0])}},setAttribute:{value(t,o){e.videoElement[t]=o}}}),e.videoElement.replaceWith(e.youtubeContainer)})}class v extends m{constructor(){super(),p(this.__INTERNALS)}attributeChangedCallback(e,t,o){if(t!==o)if("src"===e){if(/^[A-Za-z0-9_-]{11}$/.test(o))return this.__INTERNALS.onYoutube(o);this.__INTERNALS.youtubeAPIState,this.__INTERNALS.videoElement.setAttribute(e,o)}else"volume"===e?this.__INTERNALS.videoElement.volume=+o:d.includes(e)&&this.__INTERNALS.videoElement.setAttribute(e,o)}static get observedAttributes(){return d}}return customElements.define("social-media-player",v),v}();
