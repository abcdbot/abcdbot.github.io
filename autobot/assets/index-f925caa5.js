import{b as T,bI as w,a as v,K as N,u as I,c as M,o as l,e as P,N as t,r as m,n as o,f as a,s as c,v as r,x as g,aZ as k,P as y,D as C,g as b,h,U as V,_ as $,w as K}from"./index-80c046a1.js";const D=T({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:w},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:n=>n instanceof MouseEvent,click:n=>n instanceof MouseEvent},U=v({name:"ElTag"}),Z=v({...U,props:D,emits:F,setup(n,{emit:i}){const _=n,S=N(),s=I("tag"),u=M(()=>{const{type:e,hit:f,effect:B,closable:E,round:z}=_;return[s.b(),s.is("closable",E),s.m(e||"primary"),s.m(S.value),s.m(B),s.is("hit",f),s.is("round",z)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(l(),P("span",{key:0,class:o(a(u)),style:h({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(C),{key:0,class:o(a(s).e("close")),onClick:y(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(l(),c(V,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[t("span",{class:o(a(u)),style:h({backgroundColor:e.color}),onClick:d},[t("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(l(),c(a(C),{key:0,class:o(a(s).e("close")),onClick:y(p,["stop"])},{default:r(()=>[g(a(k))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)]),_:3},8,["name"]))}});var j=$(Z,[["__file","tag.vue"]]);const A=K(j);export{A as E};
