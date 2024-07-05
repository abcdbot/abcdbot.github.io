import{b6 as B,bM as Ie,b as me,d as F,ab as pe,al as ue,a as ne,aW as ve,bN as _e,bO as ze,H as ge,u as be,b2 as Le,i as k,bP as Se,bu as Ce,c as w,l as ce,B as we,a1 as ye,o as h,s as de,x as v,v as S,N as y,n as m,f as e,h as fe,P as Ee,g as C,D as O,aZ as Ne,e as x,Q as te,bD as xe,$ as Oe,bQ as Te,bR as Re,O as $e,bS as Ae,bT as Be,az as Ve,a4 as Me,a5 as Ye,r as ae,U as De,ba as Pe,_ as he,m as V,E as A,bU as Xe,w as ke,bV as He,bW as Fe,ag as We,M as je,bi as Ke,a3 as Ue,bX as Ze,bY as Qe}from"./index-80c046a1.js";import{d as qe}from"./debounce-75874e58.js";const Ge=(i,p)=>{if(!B||!i||!p)return!1;const s=i.getBoundingClientRect();let f;return p instanceof Element?f=p.getBoundingClientRect():f={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},s.top<f.bottom&&s.bottom>f.top&&s.right>f.left&&s.left<f.right};var Je="Expected a function";function ie(i,p,s){var f=!0,o=!0;if(typeof i!="function")throw new TypeError(Je);return Ie(s)&&(f="leading"in s?!!s.leading:f,o="trailing"in s?!!s.trailing:o),qe(i,p,{leading:f,maxWait:p,trailing:o})}const ea=me({urlList:{type:F(Array),default:()=>pe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:F(String)}}),aa={close:()=>!0,switch:i=>ue(i),rotate:i=>ue(i)},ta=["src","crossorigin"],na=ne({name:"ElImageViewer"}),sa=ne({...na,props:ea,emits:aa,setup(i,{expose:p,emit:s}){var f;const o=i,b={CONTAIN:{name:"contain",icon:ve(_e)},ORIGINAL:{name:"original",icon:ve(ze)}},{t:se}=ge(),u=be("image-viewer"),{nextZIndex:M}=Le(),E=k(),N=k([]),T=Se(),I=k(!0),c=k(o.initialIndex),R=Ce(b.CONTAIN),l=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=k((f=o.zIndex)!=null?f:M()),le=w(()=>{const{urlList:t}=o;return t.length<=1}),W=w(()=>c.value===0),j=w(()=>c.value===o.urlList.length-1),D=w(()=>o.urlList[c.value]),oe=w(()=>[u.e("btn"),u.e("prev"),u.is("disabled",!o.infinite&&W.value)]),K=w(()=>[u.e("btn"),u.e("next"),u.is("disabled",!o.infinite&&j.value)]),P=w(()=>{const{scale:t,deg:n,offsetX:r,offsetY:_,enableTransition:L}=l.value;let g=r/t,z=_/t;switch(n%360){case 90:case-270:[g,z]=[z,-g];break;case 180:case-180:[g,z]=[-g,-z];break;case 270:case-90:[g,z]=[-z,g];break}const $={transform:`scale(${t}) rotate(${n}deg) translate(${g}px, ${z}px)`,transition:L?"transform .3s":""};return R.value.name===b.CONTAIN.name&&($.maxWidth=$.maxHeight="100%"),$});function X(){U(),s("close")}function re(){const t=ie(r=>{switch(r.code){case A.esc:o.closeOnPressEscape&&X();break;case A.space:J();break;case A.left:ee();break;case A.up:d("zoomIn");break;case A.right:a();break;case A.down:d("zoomOut");break}}),n=ie(r=>{const _=r.deltaY||r.deltaX;d(_<0?"zoomIn":"zoomOut",{zoomRate:o.zoomRate,enableTransition:!1})});T.run(()=>{V(document,"keydown",t),V(document,"wheel",n)})}function U(){T.stop()}function Z(){I.value=!1}function Q(t){I.value=!1,t.target.alt=se("el.image.error")}function q(t){if(I.value||t.button!==0||!E.value)return;l.value.enableTransition=!1;const{offsetX:n,offsetY:r}=l.value,_=t.pageX,L=t.pageY,g=ie($=>{l.value={...l.value,offsetX:n+$.pageX-_,offsetY:r+$.pageY-L}}),z=V(document,"mousemove",g);V(document,"mouseup",()=>{z()}),t.preventDefault()}function G(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function J(){if(I.value)return;const t=Xe(b),n=Object.values(b),r=R.value.name,L=(n.findIndex(g=>g.name===r)+1)%t.length;R.value=b[t[L]],G()}function H(t){const n=o.urlList.length;c.value=(t+n)%n}function ee(){W.value&&!o.infinite||H(c.value-1)}function a(){j.value&&!o.infinite||H(c.value+1)}function d(t,n={}){if(I.value)return;const{minScale:r,maxScale:_}=o,{zoomRate:L,rotateDeg:g,enableTransition:z}={zoomRate:o.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(t){case"zoomOut":l.value.scale>r&&(l.value.scale=Number.parseFloat((l.value.scale/L).toFixed(3)));break;case"zoomIn":l.value.scale<_&&(l.value.scale=Number.parseFloat((l.value.scale*L).toFixed(3)));break;case"clockwise":l.value.deg+=g,s("rotate",l.value.deg);break;case"anticlockwise":l.value.deg-=g,s("rotate",l.value.deg);break}l.value.enableTransition=z}return ce(D,()=>{we(()=>{const t=N.value[0];t!=null&&t.complete||(I.value=!0)})}),ce(c,t=>{G(),s("switch",t)}),ye(()=>{var t,n;re(),(n=(t=E.value)==null?void 0:t.focus)==null||n.call(t)}),p({setActiveItem:H}),(t,n)=>(h(),de(Pe,{to:"body",disabled:!t.teleported},[v(De,{name:"viewer-fade",appear:""},{default:S(()=>[y("div",{ref_key:"wrapper",ref:E,tabindex:-1,class:m(e(u).e("wrapper")),style:fe({zIndex:Y.value})},[y("div",{class:m(e(u).e("mask")),onClick:n[0]||(n[0]=Ee(r=>t.hideOnClickModal&&X(),["self"]))},null,2),C(" CLOSE "),y("span",{class:m([e(u).e("btn"),e(u).e("close")]),onClick:X},[v(e(O),null,{default:S(()=>[v(e(Ne))]),_:1})],2),C(" ARROW "),e(le)?C("v-if",!0):(h(),x(te,{key:0},[y("span",{class:m(e(oe)),onClick:ee},[v(e(O),null,{default:S(()=>[v(e(xe))]),_:1})],2),y("span",{class:m(e(K)),onClick:a},[v(e(O),null,{default:S(()=>[v(e(Oe))]),_:1})],2)],64)),C(" ACTIONS "),y("div",{class:m([e(u).e("btn"),e(u).e("actions")])},[y("div",{class:m(e(u).e("actions__inner"))},[v(e(O),{onClick:n[1]||(n[1]=r=>d("zoomOut"))},{default:S(()=>[v(e(Te))]),_:1}),v(e(O),{onClick:n[2]||(n[2]=r=>d("zoomIn"))},{default:S(()=>[v(e(Re))]),_:1}),y("i",{class:m(e(u).e("actions__divider"))},null,2),v(e(O),{onClick:J},{default:S(()=>[(h(),de($e(e(R).icon)))]),_:1}),y("i",{class:m(e(u).e("actions__divider"))},null,2),v(e(O),{onClick:n[3]||(n[3]=r=>d("anticlockwise"))},{default:S(()=>[v(e(Ae))]),_:1}),v(e(O),{onClick:n[4]||(n[4]=r=>d("clockwise"))},{default:S(()=>[v(e(Be))]),_:1})],2)],2),C(" CANVAS "),y("div",{class:m(e(u).e("canvas"))},[(h(!0),x(te,null,Ve(t.urlList,(r,_)=>Me((h(),x("img",{ref_for:!0,ref:L=>N.value[_]=L,key:r,src:r,style:fe(e(P)),class:m(e(u).e("img")),crossorigin:t.crossorigin,onLoad:Z,onError:Q,onMousedown:q},null,46,ta)),[[Ye,_===c.value]])),128))],2),ae(t.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var la=he(sa,[["__file","image-viewer.vue"]]);const oa=ke(la),ra=me({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:F([String,Object])},previewSrcList:{type:F(Array),default:()=>pe([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:F(String)}}),ia={load:i=>i instanceof Event,error:i=>i instanceof Event,switch:i=>ue(i),close:()=>!0,show:()=>!0},ua=["src","loading","crossorigin"],ca={key:0},da=ne({name:"ElImage",inheritAttrs:!1}),fa=ne({...da,props:ra,emits:ia,setup(i,{emit:p}){const s=i;let f="";const{t:o}=ge(),b=be("image"),se=He(),u=Fe(),M=k(),E=k(!1),N=k(!0),T=k(!1),I=k(),c=k(),R=B&&"loading"in HTMLImageElement.prototype;let l,Y;const le=w(()=>[b.e("inner"),D.value&&b.e("preview"),N.value&&b.is("loading")]),W=w(()=>se.style),j=w(()=>{const{fit:a}=s;return B&&a?{objectFit:a}:{}}),D=w(()=>{const{previewSrcList:a}=s;return Array.isArray(a)&&a.length>0}),oe=w(()=>{const{previewSrcList:a,initialIndex:d}=s;let t=d;return d>a.length-1&&(t=0),t}),K=w(()=>s.loading==="eager"?!1:!R&&s.loading==="lazy"||s.lazy),P=()=>{B&&(N.value=!0,E.value=!1,M.value=s.src)};function X(a){N.value=!1,E.value=!1,p("load",a)}function re(a){N.value=!1,E.value=!0,p("error",a)}function U(){Ge(I.value,c.value)&&(P(),q())}const Z=Qe(U,200,!0);async function Q(){var a;if(!B)return;await we();const{scrollContainer:d}=s;Ke(d)?c.value=d:Ue(d)&&d!==""?c.value=(a=document.querySelector(d))!=null?a:void 0:I.value&&(c.value=Ze(I.value)),c.value&&(l=V(c,"scroll",Z),setTimeout(()=>U(),100))}function q(){!B||!c.value||!Z||(l==null||l(),c.value=void 0)}function G(a){if(a.ctrlKey){if(a.deltaY<0)return a.preventDefault(),!1;if(a.deltaY>0)return a.preventDefault(),!1}}function J(){D.value&&(Y=V("wheel",G,{passive:!1}),f=document.body.style.overflow,document.body.style.overflow="hidden",T.value=!0,p("show"))}function H(){Y==null||Y(),document.body.style.overflow=f,T.value=!1,p("close")}function ee(a){p("switch",a)}return ce(()=>s.src,()=>{K.value?(N.value=!0,E.value=!1,q(),Q()):P()}),ye(()=>{K.value?Q():P()}),(a,d)=>(h(),x("div",{ref_key:"container",ref:I,class:m([e(b).b(),a.$attrs.class]),style:fe(e(W))},[E.value?ae(a.$slots,"error",{key:0},()=>[y("div",{class:m(e(b).e("error"))},We(e(o)("el.image.error")),3)]):(h(),x(te,{key:1},[M.value!==void 0?(h(),x("img",je({key:0},e(u),{src:M.value,loading:a.loading,style:e(j),class:e(le),crossorigin:a.crossorigin,onClick:J,onLoad:X,onError:re}),null,16,ua)):C("v-if",!0),N.value?(h(),x("div",{key:1,class:m(e(b).e("wrapper"))},[ae(a.$slots,"placeholder",{},()=>[y("div",{class:m(e(b).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),e(D)?(h(),x(te,{key:2},[T.value?(h(),de(e(oa),{key:0,"z-index":a.zIndex,"initial-index":e(oe),infinite:a.infinite,"zoom-rate":a.zoomRate,"min-scale":a.minScale,"max-scale":a.maxScale,"url-list":a.previewSrcList,"hide-on-click-modal":a.hideOnClickModal,teleported:a.previewTeleported,"close-on-press-escape":a.closeOnPressEscape,onClose:H,onSwitch:ee},{default:S(()=>[a.$slots.viewer?(h(),x("div",ca,[ae(a.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var va=he(fa,[["__file","image.vue"]]);const ga=ke(va);export{ga as E};
