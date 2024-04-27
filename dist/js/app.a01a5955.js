(function(){"use strict";var e={4301:function(e,n,t){var o=t(5130),a=t(6768);const l={id:"app"},r={class:"content"};function i(e,n,t,o,i,c){const s=(0,a.g2)("HeaderSection"),u=(0,a.g2)("router-view"),p=(0,a.g2)("FooterSection");return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.bF)(s),(0,a.Lk)("main",r,[(0,a.bF)(u)]),(0,a.bF)(p)])}const c=e=>((0,a.Qi)("data-v-5c19736d"),e=e(),(0,a.jt)(),e),s={class:"header"},u={class:"header-content"},p={class:"router-links-left"},m=c((()=>(0,a.Lk)("div",{class:"title-wrapper"},[(0,a.Lk)("h1",{class:"title"},"CP Construction LTD"),(0,a.Lk)("h3",{class:"subtitle"},"Building and Landscaping")],-1))),d={class:"router-links-right"},f=c((()=>(0,a.Lk)("a",{href:"https://www.facebook.com/profile.php?id=61551104531461",class:"router-link"},"Facebook",-1)));function b(e,n){const t=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("header",s,[(0,a.Lk)("div",u,[(0,a.Lk)("div",p,[(0,a.bF)(t,{to:"/",class:"router-link"},{default:(0,a.k6)((()=>[(0,a.eW)("Home")])),_:1}),(0,a.bF)(t,{to:"/work",class:"router-link"},{default:(0,a.k6)((()=>[(0,a.eW)("Work")])),_:1})]),m,(0,a.Lk)("div",d,[f,(0,a.bF)(t,{to:"/contact",class:"router-link"},{default:(0,a.k6)((()=>[(0,a.eW)("Contact")])),_:1})])])])}var v=t(1241);const g={},k=(0,v.A)(g,[["render",b],["__scopeId","data-v-5c19736d"]]);var h=k;const L=e=>((0,a.Qi)("data-v-9e465e4c"),e=e(),(0,a.jt)(),e),w={class:"footer"},j=L((()=>(0,a.Lk)("h5",null,"Website created by Karl Roe",-1))),y=[j];function _(e,n){return(0,a.uX)(),(0,a.CE)("footer",w,y)}const S={},C=(0,v.A)(S,[["render",_],["__scopeId","data-v-9e465e4c"]]);var F=C,$={name:"App",components:{HeaderSection:h,FooterSection:F}};const I=(0,v.A)($,[["render",i]]);var x=I,A=t(1387),E=t.p+"img/Logo.2d46cd94.png";const O=e=>((0,a.Qi)("data-v-6dcfa6c9"),e=e(),(0,a.jt)(),e),N={class:"logo-wrapper"},V=O((()=>(0,a.Lk)("img",{src:E,alt:"Company Logo",class:"logo"},null,-1))),P=O((()=>(0,a.Lk)("div",{class:"logo-text"},[(0,a.Lk)("p",null,"20 years experience in all aspects of ground work and landscaping")],-1))),R=[V,P];function U(e,n){return(0,a.uX)(),(0,a.CE)("div",N,R)}const D={},J=(0,v.A)(D,[["render",U],["__scopeId","data-v-6dcfa6c9"]]);var W=J,X=(t(4114),t(144)),K=t(2045),Q=t(1586);const G={class:"gallery-wrapper"},H={class:"gallery-column"},T={class:"card flex justify-content-center"},B={class:"galleria-container"},M=["src","alt"],q=["src","alt"];var z={__name:"WorkSection",setup(e){const n=(0,X.KR)(null);(0,a.sV)((()=>{n.value=t.value[0]}));const t=(0,X.KR)([{name:"Gardens",code:"GD"},{name:"Paving",code:"PA"},{name:"Fencing",code:"FE"}]),o=(0,X.KR)([]),l=e=>{if(console.log(e),o.value=[],"Gardens"===e.name)for(let n=1;n<=6;n++)o.value.push({itemImageSrc:`/assets/grass/grass${n}.jpg`,thumbnailImageSrc:`/assets/grass/grass${n}.jpg`,alt:`Description of garden image ${n}`});else if("Fencing"===e.name)for(let n=1;n<=6;n++)o.value.push({itemImageSrc:`/assets/fence/fence${n}.jpg`,thumbnailImageSrc:`/assets/fence/fence${n}.jpg`,alt:`Description of fence image ${n}`});else if("Paving"===e.name)for(let n=1;n<=6;n++)o.value.push({itemImageSrc:`/assets/paving/paving${n}.jpg`,thumbnailImageSrc:`/assets/paving/paving${n}.jpg`,alt:`Description of paving image ${n}`})};(0,a.wB)(n,(e=>{l(e)}));const r=[];return(e,l)=>((0,a.uX)(),(0,a.CE)("section",null,[(0,a.Lk)("div",G,[(0,a.Lk)("div",H,[(0,a.Lk)("div",T,[(0,a.bF)((0,X.R1)(Q.A),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),options:t.value,optionLabel:"name",placeholder:"Select the job",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),(0,a.Lk)("div",B,[(0,a.bF)((0,X.R1)(K.A),{value:o.value,responsiveOptions:r,numVisible:5,containerStyle:"max-width: 400px"},{item:(0,a.k6)((e=>[(0,a.Lk)("img",{src:e.item.itemImageSrc,alt:e.item.alt,class:"gallery-image"},null,8,M)])),thumbnail:(0,a.k6)((e=>[(0,a.Lk)("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,class:"thumbnail-image"},null,8,q)])),_:1},8,["value"])])])])]))}};const Y=(0,v.A)(z,[["__scopeId","data-v-4c72f17a"]]);var Z=Y;const ee=e=>((0,a.Qi)("data-v-0d5d0a79"),e=e(),(0,a.jt)(),e),ne={id:"email1"},te=ee((()=>(0,a.Lk)("h1",null,"Contact Us",-1))),oe=ee((()=>(0,a.Lk)("label",{for:"name"},"Name:",-1))),ae=ee((()=>(0,a.Lk)("br",null,null,-1))),le=ee((()=>(0,a.Lk)("br",null,null,-1))),re=ee((()=>(0,a.Lk)("label",{for:"email"},"Email:",-1))),ie=ee((()=>(0,a.Lk)("br",null,null,-1))),ce=ee((()=>(0,a.Lk)("br",null,null,-1))),se=ee((()=>(0,a.Lk)("label",{for:"phoneNumber"},"Phone Number:",-1))),ue=ee((()=>(0,a.Lk)("br",null,null,-1))),pe=ee((()=>(0,a.Lk)("br",null,null,-1))),me=ee((()=>(0,a.Lk)("label",{for:"note"},"Job:",-1))),de=ee((()=>(0,a.Lk)("br",null,null,-1))),fe=ee((()=>(0,a.Lk)("br",null,null,-1))),be=ee((()=>(0,a.Lk)("br",null,null,-1))),ve=ee((()=>(0,a.Lk)("input",{type:"submit",value:"Submit"},null,-1)));var ge={__name:"ContactSection",setup(e){const n={name:"",email:"",phoneNumber:"",job:""},t=()=>{const e=encodeURIComponent("Contact Form Submission"),t=encodeURIComponent(`Name: ${n.name}\nEmail: ${n.email}\nPhone Number: ${n.phoneNumber}\nJob: ${n.job}`);window.location.href=`cpconstruction_bl@outlook.com?subject=${e}&body=${t}`};return(e,l)=>((0,a.uX)(),(0,a.CE)("div",ne,[te,(0,a.Lk)("form",{onSubmit:(0,o.D$)(t,["prevent"])},[oe,ae,(0,a.bo)((0,a.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":l[0]||(l[0]=e=>n.name=e)},null,512),[[o.Jo,n.name]]),le,re,ie,(0,a.bo)((0,a.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":l[1]||(l[1]=e=>n.email=e)},null,512),[[o.Jo,n.email]]),ce,se,ue,(0,a.bo)((0,a.Lk)("input",{type:"tel",id:"phoneNumber","onUpdate:modelValue":l[2]||(l[2]=e=>n.phoneNumber=e)},null,512),[[o.Jo,n.phoneNumber]]),pe,me,de,(0,a.bo)((0,a.Lk)("textarea",{id:"note","onUpdate:modelValue":l[3]||(l[3]=e=>n.job=e)},null,512),[[o.Jo,n.job]]),fe,be,ve],32)]))}};const ke=(0,v.A)(ge,[["__scopeId","data-v-0d5d0a79"]]);var he=ke,Le=t(9119);const we=(0,A.aE)({history:(0,A.LA)(),routes:[{path:"/",component:W},{path:"/work",component:Z},{path:"/contact",component:he}]}),je=(0,o.Ef)(x);je.use(we),je.use(Le.A),je.mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var l=n[o]={exports:{}};return e[o].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,l){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],l=e[u][2];for(var i=!0,c=0;c<o.length;c++)(!1&l||r>=l)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,l<r&&(r=l));if(i){e.splice(u--,1);var s=a();void 0!==s&&(n=s)}}return n}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,a,l]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,l,r=o[0],i=o[1],c=o[2],s=0;if(r.some((function(n){return 0!==e[n]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(c)var u=c(t)}for(n&&n(o);s<r.length;s++)l=r[s],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(u)},o=self["webpackChunkchriswebsite"]=self["webpackChunkchriswebsite"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(4301)}));o=t.O(o)})();
//# sourceMappingURL=app.a01a5955.js.map