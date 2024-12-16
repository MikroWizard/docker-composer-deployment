"use strict";(self.webpackChunkmikrowizard=self.webpackChunkmikrowizard||[]).push([[130],{9130:(fe,y,h)=>{h.d(y,{qD:()=>ce});var S=h(967);function I(e,t,n){const r=function E(e,t,n){return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:t,timeZoneName:e})}(e,n.timeZone,n.locale);return"formatToParts"in r?function $(e,t){const n=e.formatToParts(t);for(let r=n.length-1;r>=0;--r)if("timeZoneName"===n[r].type)return n[r].value}(r,t):function P(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}(r,t)}const X={year:0,month:1,day:2,hour:3,minute:4,second:5},D={};function M(e,t,n,r,i,o,s){const u=new Date(0);return u.setUTCFullYear(e,t,n),u.setUTCHours(r,i,o,s),u}const Y=36e5,v=6e4,T={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function d(e,t,n){if(!e)return 0;let i,o,r=T.timezoneZ.exec(e);if(r)return 0;if(r=T.timezoneHH.exec(e),r)return i=parseInt(r[1],10),O(i)?-i*Y:NaN;if(r=T.timezoneHHMM.exec(e),r){i=parseInt(r[2],10);const s=parseInt(r[3],10);return O(i,s)?(o=Math.abs(i)*Y+s*v,"+"===r[1]?-o:o):NaN}if(function G(e){if(z[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),z[e]=!0,!0}catch{return!1}}(e)){t=new Date(t||Date.now());const s=n?t:function j(e){return M(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}(t),u=g(s,e);return-(n?u:function R(e,t,n){let i=e.getTime()-t;const o=g(new Date(i),n);if(t===o)return t;i-=o-t;const s=g(new Date(i),n);return o===s?o:Math.max(o,s)}(t,u,e))}return NaN}function g(e,t){const n=function L(e,t){const n=function W(e){if(!D[e]){const t=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z"));D[e]="06/25/2014, 00:00:00"===t||"\u200e06\u200e/\u200e25\u200e/\u200e2014\u200e \u200e00\u200e:\u200e00\u200e:\u200e00"===t?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return D[e]}(t);return"formatToParts"in n?function k(e,t){try{const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const o=X[n[i].type];void 0!==o&&(r[o]=parseInt(n[i].value,10))}return r}catch(n){if(n instanceof RangeError)return[NaN];throw n}}(n,e):function A(e,t){const n=e.format(t),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[parseInt(r[3],10),parseInt(r[1],10),parseInt(r[2],10),parseInt(r[4],10),parseInt(r[5],10),parseInt(r[6],10)]}(n,e)}(e,t),r=M(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime();let i=e.getTime();const o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function O(e,t){return-23<=e&&e<=23&&(null==t||0<=t&&t<=59)}const z={},B={X:function(e,t,n){const r=N(n.timeZone,e);if(0===r)return"Z";switch(t){case"X":return x(r);case"XXXX":case"XX":return l(r);default:return l(r,":")}},x:function(e,t,n){const r=N(n.timeZone,e);switch(t){case"x":return x(r);case"xxxx":case"xx":return l(r);default:return l(r,":")}},O:function(e,t,n){const r=N(n.timeZone,e);switch(t){case"O":case"OO":case"OOO":return"GMT"+function J(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=r%60;return 0===o?n+String(i):n+String(i)+t+m(o,2)}(r,":");default:return"GMT"+l(r,":")}},z:function(e,t,n){switch(t){case"z":case"zz":case"zzz":return I("short",e,n);default:return I("long",e,n)}}};function N(e,t){const n=e?d(e,t,!0)/6e4:t?.getTimezoneOffset()??0;if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+e);return n}function m(e,t){const n=e<0?"-":"";let r=Math.abs(e).toString();for(;r.length<t;)r="0"+r;return n+r}function l(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+m(Math.floor(r/60),2)+t+m(Math.floor(r%60),2)}function x(e,t){return e%60==0?(e>0?"-":"+")+m(Math.abs(e)/60,2):l(e,t)}function C(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+e-+t}const w=36e5,U=6e4,V=2,a={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/};function _(e,t={}){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);const n=null==t.additionalDigits?V:Number(t.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"==typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);const r=function K(e){const t={};let r,n=a.dateTimePattern.exec(e);if(n?(t.date=n[1],r=n[3]):(n=a.datePattern.exec(e),n?(t.date=n[1],r=n[2]):(t.date=null,r=e)),r){const i=a.timeZone.exec(r);i?(t.time=r.replace(i[1],""),t.timeZone=i[1].trim()):t.time=r}return t}(e),{year:i,restDateString:o}=function ee(e,t){if(e){const n=a.YYY[t],r=a.YYYYY[t];let i=a.YYYY.exec(e)||r.exec(e);if(i){const o=i[1];return{year:parseInt(o,10),restDateString:e.slice(o.length)}}if(i=a.YY.exec(e)||n.exec(e),i){const o=i[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}}return{year:null}}(r.date,n),s=function te(e,t){if(null===t)return null;let n,r,i;if(!e||!e.length)return n=new Date(0),n.setUTCFullYear(t),n;let o=a.MM.exec(e);if(o)return n=new Date(0),r=parseInt(o[1],10)-1,b(t,r)?(n.setUTCFullYear(t,r),n):new Date(NaN);if(o=a.DDD.exec(e),o){n=new Date(0);const s=parseInt(o[1],10);return function oe(e,t){if(t<1)return!1;const n=Z(e);return!(n&&t>366||!n&&t>365)}(t,s)?(n.setUTCFullYear(t,0,s),n):new Date(NaN)}if(o=a.MMDD.exec(e),o){n=new Date(0),r=parseInt(o[1],10)-1;const s=parseInt(o[2],10);return b(t,r,s)?(n.setUTCFullYear(t,r,s),n):new Date(NaN)}if(o=a.Www.exec(e),o)return i=parseInt(o[1],10)-1,F(i)?H(t,i):new Date(NaN);if(o=a.WwwD.exec(e),o){i=parseInt(o[1],10)-1;const s=parseInt(o[2],10)-1;return F(i,s)?H(t,i,s):new Date(NaN)}return null}(o,i);if(null===s||isNaN(s.getTime()))return new Date(NaN);if(s){const u=s.getTime();let f,c=0;if(r.time&&(c=function ne(e){let t,n,r=a.HH.exec(e);if(r)return t=parseFloat(r[1].replace(",",".")),p(t)?t%24*w:NaN;if(r=a.HHMM.exec(e),r)return t=parseInt(r[1],10),n=parseFloat(r[2].replace(",",".")),p(t,n)?t%24*w+n*U:NaN;if(r=a.HHMMSS.exec(e),r){t=parseInt(r[1],10),n=parseInt(r[2],10);const i=parseFloat(r[3].replace(",","."));return p(t,n,i)?t%24*w+n*U+1e3*i:NaN}return null}(r.time),null===c||isNaN(c)))return new Date(NaN);if(r.timeZone||t.timeZone){if(f=d(r.timeZone||t.timeZone,new Date(u+c)),isNaN(f))return new Date(NaN)}else f=C(new Date(u+c)),f=C(new Date(u+c+f));return new Date(u+c+f)}return new Date(NaN)}function H(e,t,n){t=t||0,n=n||0;const r=new Date(0);r.setUTCFullYear(e,0,4);const o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}const re=[31,28,31,30,31,30,31,31,30,31,30,31],ie=[31,29,31,30,31,30,31,31,30,31,30,31];function Z(e){return e%400==0||e%4==0&&e%100!=0}function b(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;const r=Z(e);if(r&&n>ie[t]||!r&&n>re[t])return!1}return!0}function F(e,t){return!(e<0||e>52||null!=t&&(t<0||t>6))}function p(e,t,n){return!(e<0||e>=25||null!=t&&(t<0||t>=60)||null!=n&&(n<0||n>=60))}const se=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function ce(e,t,n,r){return function ae(e,t,n={}){const r=(t=String(t)).match(se);if(r){const i=_(n.originalDate||e,n);t=r.reduce(function(o,s){if("'"===s[0])return o;const u=o.indexOf(s),c="'"===o[u-1],f=o.replace(s,"'"+B[s[0]](i,s,n)+"'");return c?f.substring(0,u-1)+f.substring(u+1):f},t)}return(0,S.GP)(e,t,n)}(function ue(e,t,n){const r=d(t,e=_(e,n),!0),i=new Date(e.getTime()-r),o=new Date(0);return o.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),o.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),o}(e,t,{timeZone:(r={...r,timeZone:t,originalDate:e}).timeZone}),n,r)}}}]);