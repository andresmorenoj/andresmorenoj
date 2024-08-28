import { Sora } from "next/font/google";
import StyledComponentsRegistry from "../../lib/register";

export const metadata = {
  title: "Andrés Moreno",
  description: "My personal website",
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
      <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* New Relic Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              ;window.NREUM||(NREUM={});NREUM.init={distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}};
              ;NREUM.loader_config={accountID:"4640822",trustKey:"4640822",agentID:"1386199071",licenseKey:"NRJS-3d54a44a47b843197e0",applicationID:"1386199071"};
              ;NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-3d54a44a47b843197e0",applicationID:"1386199071",sa:1};
              /*! For license information please see nr-loader-spa-1.264.0.min.js.LICENSE.txt */
              (() => {
                var e,t,r={2983:(e,t,r)=>{"use strict";r.d(t,{D0:()=>v,gD:()=>y,Vp:()=>s,oC:()=>x,fr:()=>_,jD:()=>P,hR:()=>A,xN:()=>b,x1:()=>c,aN:()=>T,V:()=>j});
                var n=r(384),i=r(7864);const o={beacon:n.NT.beacon,errorBeacon:n.NT.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,
                applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,
                transactionName:void 0,tNamePlain:void 0},a={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");
                if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function c(e,t){if(!e)throw new Error("All info objects require an 
                agent identifier!");a[e]=(0,i.a)(t,o);const r=(0,n.nY)(e);r&&(r.info=a[e])}var u=r(993);const d=e=>{if(!e||"string"!=typeof e)return!1;try{
                document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var l=r(2614),f=r(944);const h="[data-nr-mask]",g=()=>{const e=
                {mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:
                !1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{ajax:{deny_list:void 0,block_internal:!0,enabled:!0,
                harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,
                cors_use_tracecontext_headers:void 0,allowed_origins:void 0},feature_flags:[],generic_events:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},
                harvest:{tooManyRequestsDelay:60},jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},logging:{enabled:!0,harvestTimeSeconds:10,autoStart:!0,
                level:u.p_.INFO},metrics:{enabled:!0,autoStart:!0},obfuscate:void 0,page_action:{enabled:!0},page_view_event:{enabled:!0,autoStart:!0},
                page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},privacy:{cookies_enabled:!0},proxy:{assets:void 0,beacon:void 0},
                session:{expiresMs:l.wk,inactiveMs:l.BB},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,preload:!1,sampling_rate:10,
                error_sampling_rate:100,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,fix_stylesheets:!0,mask_all_inputs:!0,get mask_text_selector(){
                return e.mask_selector},set mask_text_selector(t){d(t)?e.mask_selector="".concat(t,",").concat(h):""===t||null===t?e.mask_selector=h:(0,f.R)(5,t)},
                get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return 
                e.block_selector},set block_selector(t){d(t)?e.block_selector+=",".concat(t):""!==t&&(0,f.R)(6,t)},get mask_input_options(){return e.mask_input_options},
                set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,f.R)(7,t)}},session_trace:{enabled:!0,
                harvestTimeSeconds:10,autoStart:!0},soft_navigations:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},spa:{enabled:!0,harvestTimeSeconds:10,
                autoStart:!0},ssl:void 0}},p={},m="All configuration objects require an agent identifier!";function v(e){if(!e)throw new Error(m);if(!p[e])
                throw new Error("Configuration for ".concat(e," was never set"));return p[e]}function b(e,t){if(!e)throw new Error(m);p[e]=(0,i.a)(t,g());const 
                r=(0,n.nY)(e);r&&(r.init=p[e])}function y(e,t){if(!e)throw new Error(m);var r=v(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)
                if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const w={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,
                applicationID:void 0,xpid:void 0},R={};function x(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!R[e])
                throw new Error("LoaderConfig for ".concat(e," was never set"));return R[e]}function T(e,t){if(!e)throw new Error("All loader-config objects 
                require an agent identifier!");R[e]=(0,i.a)(t,w);const r=(0,n.nY)(e);r&&(r.loader_config=R[e])}const A=(0,n.dV)().o;var E=r(6154),N=r(9324);const 
                S={buildEnv:N.F3,distMethod:N.Xs,version:N.xv,originTime:E.WN},O={customTransaction:void 0,disabled:!1,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,
                onerror:void 0,origin:""+E.gm.location,ptid:void 0,releaseIds:{},appMetadata:{},session:void 0,denyList:void 0,harvestCount:0,timeKeeper:void 0},
                I={};function _(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!I[e])throw new Error("Runtime for ".concat(e," 
                was never set"));return I[e]}function j(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");I[e]={...(0,i.a)(t,O),...
                S};const r=(0,n.nY)(e);r&&(r.runtime=I[e])}function P(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}
                catch(e){return!1}}(e)}}},7864:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var n=r(944);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.R)(3);
                if(!t||"object"!=typeof t)return(0,n.R)(4);const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r)
                .length?e:r;for(let a in o)if(void 0!==e[a])try{if(null===e[a]){r[a]=null;continue}Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new 
                Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.R)(1,e)}return r}catch(e){(0,n.R)(2,e)}}},
                9324:(e,t,r)=>{"use strict";r.d(t,{F3:()=>i,Xs:()=>o,Yq:()=>a,xv:()=>n});const n="1.264.0",i="PROD",o="CDN",a="2.0.0-alpha.12"},6154:(e,t,r)=>{"use strict";
                r.d(t,{A4:()=>s,OF:()=>d,RI:()=>i,Vr:()=>h,WN:()=>g,bv:()=>o,gm:()=>a,lR:()=>f,m:()=>u,mw:()=>c,sb:()=>l});var n=r(1863);const i="undefined"!=typeof 
                window&&!!window.document,o="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator 
                instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),
                a=i?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis
                &&globalThis instanceof WorkerGlobalScope&&globalThis),s="complete"===a?.document?.readyState,c=Boolean("hidden"===a?.document?.visibilityState),u=
                " "+a?.location,d=/iPad|iPhone|iPod/.test(a.navigator?.userAgent),l=d&&"undefined"==typeof SharedWorker,f=(()=>{const e=a.navigator?.userAgent?.match
                (/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),h=!!a.navigator?.sendBeacon,g=Date.now()-(0,n.t)()},4777:(e,t,r)=>{"use strict";
                r.d(t,{J:()=>o});var n=r(944);const i={agentIdentifier:"",ee:void 0};class o{constructor(e){try{if("object"!=typeof e)return(0,n.R)(8);this.sharedContext
                ={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){
                (0,n.R)(9,e)}}}},7295:(e,t,r)=>{"use strict";r.d(t,{Xv:()=>a,gX:()=>i,iW:()=>o});var n=[];function i(e){if(!e||o(e))return!1;if(0===n.length)return!0;
                for(var t=0;t<n.length;t++){var r=n[t];if("*"===r.hostname)return!1;if(s(r.hostname,e.hostname)&&c(r.pathname,e.pathname))return!1}return!0}function o
                (e){return void 0===e.hostname}function a(e){if(n=[],e&&e.length)for(var t=0;t<e.length;t++){let r=e[t];if(!r)continue;0===r.indexOf("http://")?r=r.substring
                (7):0===r.indexOf("https://")&&(r=r.substring(8));const i=r.indexOf("/");let o,a;i>0?(o=r.substring(0,i),a=r.substring(i)):(o=r,a="");let[s]=o.split(":");
                n.push({hostname:s,pathname:a})}}function s(e,t){return!(e.length>t.length)&&t.indexOf(e)===t.length-e.length}function c(e,t){return 0===e.indexOf("/")&&
                (e=e.substring(1)),0===t.indexOf("/")&&(t=t.substring(1)),""===e||e===t}},1687:(e,t,r)=>{"use strict";r.d(t,{Ak:()=>s,Ze:()=>d,x3:()=>c});var n=r(7836),i=r
                (3606),o=r(860);const a={};function s(e,t){const r={staged:!1,priority:o.P[t]||0};u(e),a[e].get(t)||a[e].set(t,r)}function c(e,t){e&&a[e]&&(a[e].get(t)&&
                a[e].delete(t),f(e,t,!1),a[e].size&&l(e))}function u(e){if(!e)throw new Error("agentIdentifier required");a[e]||(a[e]=new Map)}function d(){let e=arguments
                .length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature",r=arguments.length>2&&void 0!==
                arguments[2];if(u(e),!e||!a[e].get(t)||r)return f(e,t);a[e].get(t).staged=!0,l(e)}function l(e){const t=Array.from(a[e]);t.every((e=>{let[t,r]=e;return r
                .staged}))&&(t.sort(((e,t)=>e[1].priority-t[1].priority)),t.forEach((t=>{let[r]=t;a[e].delete(r),f(e,r)})))}function f(e,t){let r=!(arguments.length>2&&void 
                0!==arguments[2])||arguments[2];const o=e?n.ee.get(e):n.ee,a=i.i.handlers;if(!o.aborted&&o.backlog&&a){if(r){const e=o.backlog[t],r=a[t];if(r){for(let t=0;e&&
                t<e.length;++t)h(e[t],r);Object.entries(r).forEach((e=>{let[t,r]=e;Object.values(r||{}).forEach((e=>{e[0].on(t,e[1])}))}))}}o.isolatedBacklog||delete a[t],
                o.backlog[t]=null,o.emit("drain-"+t,[])}}function h(e,t){var r=e[1];Object.values(t[r]||{}).forEach((t=>{var r=e[0];if(t[0]===r){var n=t[1],i=e[3],o=e[2];
                n.apply(i,o)}}))}},7836:(e,t,r)=>{"use strict";r.d(t,{P:()=>c,ee:()=>u});var n=r(384),i=r(8990),o=r(2983),a=r(2646),s=r(5607);const c="nr@context:".concat
                (s.W),u=function e(t,r){var n={},s={},d={},l=!1;try{l=16===r.length&&(0,o.fr)(r).isolatedBacklog}catch(e){}var f={on:g,addEventListener:g,removeEventListener
                :function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&
                o&&t.emit(e,r,n);for(var a=h(n),s=p(e),d=s.length,l=0;l<d;l++)s[l].apply(a,r);var g=v()[s[e]];g&&g.push([f,e,r,a]);return a},get:m,listeners:p,context:h,buffer
                :function(e,t){const r=v();if(t=t||"feature",f.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:function(){f._aborted
                =!0,Object.keys(f.backlog).forEach((e=>{delete f.backlog[e]}))},isBuffering:function(e){return!!v()[s[e]]},debugId:r,backlog:l?{}:t&&"object"==typeof t.backlog
                ?t.backlog:{},isolatedBacklog:l};return Object.defineProperty(f,"aborted",{get:()=>{let e=f._aborted||!1;return e||(t&&(e=t.aborted),e)}}),f;function h(e){return 
                e&&e instanceof a.y?e:e?(0,i.I)(e,c,(()=>new a.y(c))):new a.y(c)}function g(e,t){n[e]=p(e).concat(t)}function p(e){return n[e]||[]}function m(t){return d[t]=
                d[t]||e(f,t)}function v(){return f.backlog}}(void 0,"globalEE"),d=(0,n.Zm)();d.ee||(d.ee=u)},2646:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});class n{constructor(e){
                this.contextId=e}}},9908:(e,t,r)=>{"use strict";r.d(t,{d:()=>n,p:()=>i});var n=r(7836).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r))
                :(n.buffer([e],i),n.emit(e,t,r))}},3606:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});var n=r(9908);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.d,i,e,t,r)}
                function a(e,t,r,i,o){o||(o="feature"),e||(e=n.d);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},3878:(e,t,r)=>{"use strict";r.d(t,{DD:()=>c,jT:()=>a,sp:()=>s});
                var n=r(6154);let i=!1,o=!1;try{const e={get passive(){return i=!0,!1},get signal(){return o=!0,!1}};n.gm.addEventListener("test",null,e),n.gm.removeEventListener
                ("test",null,e)}catch(e){}function a(e,t){return i||o?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&
                arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,a(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&
                arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,a(r,n))}},5607:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});const n=(0,r(9566).bz)()},
                9566:(e,t,r)=>{"use strict";r.d(t,{LA:()=>s,ZF:()=>c,bz:()=>a,el:()=>u});var n=r(6154);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?
                15&e[t]:16*Math.random()|0}function a(){const e=n.gm?.crypto||n.gm?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),
                i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n.gm?.crypto||n.gm?.msCrypto;let r,i=0;t&&t
                .getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}function c(){return s(16)}
                function u(){return s(32)}},2614:(e,t,r)=>{"use strict";r.d(t,{BB:()=>a,H3:()=>n,g:()=>u,iL:()=>c,tS:()=>s,uh:()=>i,wk:()=>o});const n="NRBA",i="SESSION",o=144e5,a=
                18e5,s={STARTED:"session-started",PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},c={SAME_TAB:"same-tab",
                CROSS_TAB:"cross-tab"},u={OFF:0,FULL:1,ERROR:2}},1863:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{t:()=>n})},7485:(e,t,r)=>{"use strict";
                r.d(t,{D:()=>i});var n=r(6154);function i(e){if(0===(e||"").indexOf("data:"))return{protocol:"data"};try{const t=new URL(e,location.href),r={port:t.port,hostname
                :t.hostname,pathname:t.pathname,search:t.search,protocol:t.protocol.slice(0,t.protocol.indexOf(":")),sameOrigin:t.protocol===n.gm?.location?.protocol&&t.host===
                n.gm?.location?.host};return r.port&&""!==r.port||("http:"===t.protocol&&(r.port="80"),"https:"===t.protocol&&(r.port="443")),r.pathname&&""!==r.pathname?r.pathname
                .startsWith("/")||(r.pathname="/".concat(r.pathname)):r.pathname="/",r}catch(e){return{}}}},944:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console
                .debug&&console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e),t)}r.d(t,{R:()=>n})},
                5284:(e,t,r)=>{"use strict";r.d(t,{t:()=>c,B:()=>s});var n=r(7836),i=r(6154);const o="newrelic";const a=new Set,s={};function c(e,t){const r=n.ee.get(t);s[t]??={},
                e&&"object"==typeof e&&(a.has(t)||(r.emit("rumresp",[e]),s[t]=e,a.add(t),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{i.gm
                .dispatchEvent(new CustomEvent(o,{detail:e}))}catch(e){}}({loaded:!0})))}},8990:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=Object.prototype.hasOwnProperty;function 
                i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}
                catch(e){}return e[t]=i,i}},6389:(e,t,r)=>{"use strict";function n(e){var t=this;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length
                >2&&void 0!==arguments[2]?arguments[2]:{};const i=n?.leading||!1;let o;return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];
                i&&void 0===o&&(e.apply(t,a),o=setTimeout((()=>{o=clearTimeout(o)}),r)),i||(clearTimeout(o),o=setTimeout((()=>{e.apply(t,a)}),r))}}function i(e){var t=this;let r=!
                1;return function(){if(!r){r=!0;for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];e.apply(t,i)}}}r.d(t,{J:()=>i,s:()=>n})},3304:(e,t,r)=>{"use strict";
                r.d(t,{A:()=>o});var n=r(7836);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function o(e){
                try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},5289:(e,t,r)=>{"use strict";r.d(t,{GG:()=>o,sB:()=>a});var n=r(3878);
                function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.sp)("load",e,t)}function a(e){if(i())return 
                e();(0,n.DD)("DOMContentLoaded",e)}},384:(e,t,r)=>{"use strict";r.d(t,{NT:()=>o,US:()=>d,Zm:()=>a,bQ:()=>c,dV:()=>s,nY:()=>u,pV:()=>l});var n=r(6154),i=r(1863);
                const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return n.gm.NREUM||(n.gm.NREUM={}),void 0===n.gm.newrelic&&(n.gm.newrelic=n.gm.NREUM),
                n.gm.NREUM}function s(){let e=a();return e.o||(e.o={ST:n.gm.setTimeout,SI:n.gm.setImmediate,CT:n.gm.clearTimeout,XHR:n.gm.XMLHttpRequest,REQ:n.gm.Request,EV:n.gm
                .Event,PR:n.gm.Promise,MO:n.gm.MutationObserver,FETCH:n.gm.fetch}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,i.t)(),date:new Date},
                r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function d(e,t){a()[e]=t}function l(){return function(){let e=a();const t=e.info||
                {};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||
                {};e.loader_config={...t}}(),a()}},2843:(e,t,r)=>{"use strict";r.d(t,{u:()=>i});var n=r(3878);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&
                arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.DD)("visibilitychange",(function(){if(t)return void("hidden"===
                document.visibilityState&&e());e(document.visibilityState)}),r,i)}},8941:(e,t,r)=>{"use strict";r.d(t,{um:()=>f,NZ:()=>R,vC:()=>A,Ri:()=>O,Ak:()=>_,o8:()=>P,MO:()=>
                U,bX:()=>F});var n=r(7836),i=r(3434),o=r(8990),a=r(6154);const s={},c=a.gm.XMLHttpRequest,u="addEventListener",d="removeEventListener",l="nr@wrapped:".concat
                (n.P);function f(e){var t=function(e){return(e||n.ee).get("events")}(e);if(s[t.debugId]++)return t;s[t.debugId]=1;var r=(0,i.YM)(t,!0);function f(e){r.inPlace(e,[u,d],
                "-",(e=>e[1]))}return"getPrototypeOf"in Object&&(a.RI&&function(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,u);)r=Object.getPrototypeOf
                (r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}(document,f),function(e,t){let r=e;for(;"object"==typeof r&&!Object
                .prototype.hasOwnProperty.call(r,u);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}(a.gm,f),
                function(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,u);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),
                o=2;o<n;o++)i[o-2]=arguments[o];r&&t(r,...i)}(c.prototype,f)),t.on(u+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){
                var i=(0,o.I)(n,l,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];
                return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(d+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function h(e,t){var r=e[t];
                "function"==typeof r&&(e[t]=function(){var e,r=[...arguments],n={};t.emit("fetch-before-start",[r],n),n[n.P]&&n[n.P].dt&&(e=n[n.P].dt);var i=r.apply(this,r);
                return t.emit("fetch-start",[r,e],i),i.then((function(e){return t.emit("fetch-end",[null,e],i),e}),(function(e){throw t.emit("fetch-end",[e],i),e}))})}return
                ["fetch-before-start","fetch-start","fetch-end"].forEach((e=>{t.on(e,(function(){return r}))})),f}},7378:(e,t,r)=>{"use strict";r.d(t,{$p:()=>x,BR:()=>b,Kp:()=>R,L3:()=>y,
                Lc:()=>c,NC:()=>o,SG:()=>d,TZ:()=>i,U6:()=>g,UT:()=>m,d3:()=>w,dT:()=>f,e5:()=>A,gx:()=>v,l9:()=>l,oW:()=>h,op:()=>p,rw:()=>u,tH:()=>E,uP:()=>s,wW:()=>T,xq:()=>
                a});var n=r(2983);const i=r(860).K.spa,o=["click","submit","keypress","keydown","keyup","change"],a=999,s="fn-start",c="fn-end",u="cb-start",d="api-ixn-",l="remaining",
                f="interaction",h="spaNode",g="jsonpNode",p="fetch-start",m="fetch-done",v="fetch-body-",b="jsonp-end",y=n.hR.ST,w="-start",R="-end",x="-body",T="cb"+R,A="jsTime",
                E="fetch"},4234:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(7836);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),
                this.featureName=r,this.blocked=!1}}},7767:(e,t,r)=>{"use strict";r.d(t,{V:()=>o});var n=r(2983),i=r(6154);const o=e=>i.RI&&!0===(0,n.gD)(e,"privacy.cookies_enabled")}};
                var s=()=>{console.log('NewRelic loaded!')};
                s();
              })();
            `,
          }}
        />
      </head>
      <body className={sora.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
