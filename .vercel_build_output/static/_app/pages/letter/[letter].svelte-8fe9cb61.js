import{S as t,i as e,s,e as r,j as n,k as a,c as l,a as c,m as o,n as i,d as u,b as $,f,F as h,o as m,x as d,u as p,v,M as g,I as x,K as I,t as E,g as D,h as k,N as y}from"../../chunks/vendor-9b6486e5.js";import{S as V}from"../../chunks/svg_letter-e94e2d8e.js";import{t as b}from"../../chunks/i18n-fd1e3d49.js";import{Y as j}from"../../chunks/yellow_button-c2c91025.js";function w(t){let e,s,g,x,I,E;return g=new V({props:{letter:t[0]}}),{c(){e=r("div"),s=r("div"),n(g.$$.fragment),x=a(),I=r("div"),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=c(e);s=l(r,"DIV",{class:!0});var n=c(s);o(g.$$.fragment,n),x=i(n),I=l(n,"DIV",{class:!0}),c(I).forEach(u),n.forEach(u),r.forEach(u),this.h()},h(){$(I,"class","innerlines svelte-f5x567"),$(s,"class","outerlines svelte-f5x567"),$(e,"class","card svelte-f5x567")},m(t,r){f(t,e,r),h(e,s),m(g,s,null),h(s,x),h(s,I),E=!0},p(t,[e]){const s={};1&e&&(s.letter=t[0]),g.$set(s)},i(t){E||(d(g.$$.fragment,t),E=!0)},o(t){p(g.$$.fragment,t),E=!1},d(t){t&&u(e),v(g)}}}function A(t,e,s){let{letter:r}=e;return t.$$set=t=>{"letter"in t&&s(0,r=t.letter)},[r]}class S extends t{constructor(t){super(),e(this,t,A,w,s,{letter:0})}}function _(t){let e,s,n,o,m,d,p,v,g,I=t[2]("button.sound")+"";return{c(){e=r("div"),s=r("div"),n=E(I),o=a(),m=r("div"),d=r("img"),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=c(e);s=l(r,"DIV",{class:!0});var a=c(s);n=D(a,I),a.forEach(u),o=i(r),m=l(r,"DIV",{class:!0});var $=c(m);d=l($,"IMG",{class:!0,src:!0,alt:!0}),$.forEach(u),r.forEach(u),this.h()},h(){$(s,"class","text svelte-18n4c6t"),$(d,"class","illustration svelte-18n4c6t"),d.src!==(p="/images/ear.svg")&&$(d,"src","/images/ear.svg"),$(d,"alt","ear"),$(m,"class","picture svelte-18n4c6t"),$(e,"class","grid svelte-18n4c6t")},m(r,a){f(r,e,a),h(e,s),h(s,n),h(e,o),h(e,m),h(m,d),v||(g=x(e,"click",t[3]),v=!0)},p(t,e){4&e&&I!==(I=t[2]("button.sound")+"")&&k(n,I)},d(t){t&&u(e),v=!1,g()}}}function K(t){let e,s,I,E,D,k,y;return e=new j({props:{active:t[1],$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=a(),I=r("audio"),E=r("track"),this.h()},l(t){o(e.$$.fragment,t),s=i(t),I=l(t,"AUDIO",{style:!0,volume:!0});var r=c(I);E=l(r,"TRACK",{kind:!0}),r.forEach(u),this.h()},h(){$(E,"kind","captions"),g(I,"display","none"),$(I,"volume","0.8"),I.controls=!0},m(r,n){m(e,r,n),f(r,s,n),f(r,I,n),h(I,E),t[6](I),D=!0,k||(y=x(I,"ended",t[4]),k=!0)},p(t,[s]){const r={};2&s&&(r.active=t[1]),132&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){D||(d(e.$$.fragment,t),D=!0)},o(t){p(e.$$.fragment,t),D=!1},d(r){v(e,r),r&&u(s),r&&u(I),t[6](null),k=!1,y()}}}function C(t,e,s){let r;I(t,b,(t=>s(2,r=t)));let n,a,{letter:l}=e;return t.$$set=t=>{"letter"in t&&s(5,l=t.letter)},[n,a,r,function(){if(!0===a)return;s(1,a=!0);let t="audio/letter/"+l.toString()+"_sound.mp4";console.log(t),s(0,n.src=t,n),n.play()},function(){s(1,a=!1)},l,function(t){y[t?"unshift":"push"]((()=>{n=t,s(0,n)}))}]}class M extends t{constructor(t){super(),e(this,t,C,K,s,{letter:5})}}function O(t){let e,s,n,o,m,d,p,v,g,I=t[2]("button.name")+"";return{c(){e=r("div"),s=r("div"),n=E(I),o=a(),m=r("div"),d=r("img"),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=c(e);s=l(r,"DIV",{class:!0});var a=c(s);n=D(a,I),a.forEach(u),o=i(r),m=l(r,"DIV",{class:!0});var $=c(m);d=l($,"IMG",{class:!0,src:!0,alt:!0}),$.forEach(u),r.forEach(u),this.h()},h(){$(s,"class","text svelte-18jp632"),$(d,"class","illustration svelte-18jp632"),d.src!==(p="/images/nametag.svg")&&$(d,"src","/images/nametag.svg"),$(d,"alt","ear"),$(m,"class","picture svelte-18jp632"),$(e,"class","grid svelte-18jp632")},m(r,a){f(r,e,a),h(e,s),h(s,n),h(e,o),h(e,m),h(m,d),v||(g=x(e,"click",t[3]),v=!0)},p(t,e){4&e&&I!==(I=t[2]("button.name")+"")&&k(n,I)},d(t){t&&u(e),v=!1,g()}}}function R(t){let e,s,I,E,D,k,y;return e=new j({props:{active:t[1],$$slots:{default:[O]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=a(),I=r("audio"),E=r("track"),this.h()},l(t){o(e.$$.fragment,t),s=i(t),I=l(t,"AUDIO",{style:!0,volume:!0});var r=c(I);E=l(r,"TRACK",{kind:!0}),r.forEach(u),this.h()},h(){$(E,"kind","captions"),g(I,"display","none"),$(I,"volume","0.8"),I.controls=!0},m(r,n){m(e,r,n),f(r,s,n),f(r,I,n),h(I,E),t[6](I),D=!0,k||(y=x(I,"ended",t[4]),k=!0)},p(t,[s]){const r={};2&s&&(r.active=t[1]),132&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){D||(d(e.$$.fragment,t),D=!0)},o(t){p(e.$$.fragment,t),D=!1},d(r){v(e,r),r&&u(s),r&&u(I),t[6](null),k=!1,y()}}}function T(t,e,s){let r;I(t,b,(t=>s(2,r=t)));let n,a,{letter:l}=e;return t.$$set=t=>{"letter"in t&&s(5,l=t.letter)},[n,a,r,function(){if(!0===a)return;s(1,a=!0);let t="audio/letter/"+l.toString()+"_name.mp4";console.log(t),s(0,n.src=t,n),n.play()},function(){s(1,a=!1)},l,function(t){y[t?"unshift":"push"]((()=>{n=t,s(0,n)}))}]}class U extends t{constructor(t){super(),e(this,t,T,R,s,{letter:5})}}function G(t){let e,s,n,o,m,d,p,v=t[2]("button.example")+"";return{c(){e=r("div"),s=r("div"),n=E(v),o=a(),m=r("span"),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=c(e);s=l(r,"DIV",{class:!0});var a=c(s);n=D(a,v),a.forEach(u),o=i(r),m=l(r,"SPAN",{class:!0}),c(m).forEach(u),r.forEach(u),this.h()},h(){$(s,"class","text"),$(m,"class","symbol"),$(e,"class","grid svelte-j1y149")},m(r,a){f(r,e,a),h(e,s),h(s,n),h(e,o),h(e,m),d||(p=x(e,"click",t[3]),d=!0)},p(t,e){4&e&&v!==(v=t[2]("button.example")+"")&&k(n,v)},d(t){t&&u(e),d=!1,p()}}}function N(t){let e,s,I,E,D,k,y;return e=new j({props:{active:t[1],$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){n(e.$$.fragment),s=a(),I=r("audio"),E=r("track"),this.h()},l(t){o(e.$$.fragment,t),s=i(t),I=l(t,"AUDIO",{style:!0,volume:!0});var r=c(I);E=l(r,"TRACK",{kind:!0}),r.forEach(u),this.h()},h(){$(E,"kind","captions"),g(I,"display","none"),$(I,"volume","0.8"),I.controls=!0},m(r,n){m(e,r,n),f(r,s,n),f(r,I,n),h(I,E),t[6](I),D=!0,k||(y=x(I,"ended",t[4]),k=!0)},p(t,[s]){const r={};2&s&&(r.active=t[1]),132&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){D||(d(e.$$.fragment,t),D=!0)},o(t){p(e.$$.fragment,t),D=!1},d(r){v(e,r),r&&u(s),r&&u(I),t[6](null),k=!1,y()}}}function F(t,e,s){let r;I(t,b,(t=>s(2,r=t)));let n,a,{letter:l}=e;return t.$$set=t=>{"letter"in t&&s(5,l=t.letter)},[n,a,r,function(){if(!0===a)return;s(1,a=!0);let t="audio/letter/"+l.toString()+"_example.mp4";console.log(t),s(0,n.src=t,n),n.play()},function(){s(1,a=!1)},l,function(t){y[t?"unshift":"push"]((()=>{n=t,s(0,n)}))}]}class P extends t{constructor(t){super(),e(this,t,F,N,s,{letter:5})}}function Y(t){let e,s,g,x,I,E,D,k,y,V,b,j,w;return g=new S({props:{letter:t[0]}}),E=new M({props:{letter:t[0]}}),y=new U({props:{letter:t[0]}}),j=new P({props:{letter:t[0]}}),{c(){e=r("div"),s=r("div"),n(g.$$.fragment),x=a(),I=r("div"),n(E.$$.fragment),D=a(),k=r("div"),n(y.$$.fragment),V=a(),b=r("div"),n(j.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=c(e);s=l(r,"DIV",{class:!0});var n=c(s);o(g.$$.fragment,n),n.forEach(u),x=i(r),I=l(r,"DIV",{class:!0});var a=c(I);o(E.$$.fragment,a),a.forEach(u),D=i(r),k=l(r,"DIV",{class:!0});var $=c(k);o(y.$$.fragment,$),$.forEach(u),V=i(r),b=l(r,"DIV",{class:!0});var f=c(b);o(j.$$.fragment,f),f.forEach(u),r.forEach(u),this.h()},h(){$(s,"class","letter-card svelte-1cl1c1i"),$(I,"class","name-button svelte-1cl1c1i"),$(k,"class","sound-button svelte-1cl1c1i"),$(b,"class","example-button svelte-1cl1c1i"),$(e,"class","outer-grid svelte-1cl1c1i")},m(t,r){f(t,e,r),h(e,s),m(g,s,null),h(e,x),h(e,I),m(E,I,null),h(e,D),h(e,k),m(y,k,null),h(e,V),h(e,b),m(j,b,null),w=!0},p(t,[e]){const s={};1&e&&(s.letter=t[0]),g.$set(s);const r={};1&e&&(r.letter=t[0]),E.$set(r);const n={};1&e&&(n.letter=t[0]),y.$set(n);const a={};1&e&&(a.letter=t[0]),j.$set(a)},i(t){w||(d(g.$$.fragment,t),d(E.$$.fragment,t),d(y.$$.fragment,t),d(j.$$.fragment,t),w=!0)},o(t){p(g.$$.fragment,t),p(E.$$.fragment,t),p(y.$$.fragment,t),p(j.$$.fragment,t),w=!1},d(t){t&&u(e),v(g),v(E),v(y),v(j)}}}async function q({page:t}){return{props:{letter:t.params.letter}}}function z(t,e,s){let{letter:r}=e;return t.$$set=t=>{"letter"in t&&s(0,r=t.letter)},[r]}export default class extends t{constructor(t){super(),e(this,t,z,Y,s,{letter:0})}}export{q as load};
