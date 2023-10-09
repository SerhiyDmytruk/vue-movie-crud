import{h as d,r as I,j,o as m,b as u,k as r,v as c,d as t,t as l,l as q,F as B,f as N,m as $,n as A}from"./index-0234a162.js";const E=["onSubmit"],O={class:"movie-form-input-wrapper"},G=t("label",{for:"name"},"Name",-1),L={class:"movie-form-error"},R={class:"movie-form-input-wrapper"},z=t("label",{for:"description"},"Description",-1),H={class:"movie-form-error"},J={class:"movie-form-input-wrapper"},K=t("label",{for:"image"},"Image",-1),P={class:"movie-form-error"},Q={class:"movie-form-input-wrapper"},W=t("label",{for:"genre"},"Genres",-1),X=["value"],Y={class:"movie-form-error"},Z={class:"movie-form-input-wrapper"},ee={for:"genre",class:"movie-form-checkbox-label"},te=t("span",null,"In theaters",-1),ne={class:"movie-form-error"},oe={class:"movie-form-actions-wrapper"},se={type:"submit",class:"button-primary"},ae={key:0},ie={key:1},le={__name:"MovieForm",props:{modelValue:{type:Object,default:null}},emits:["update:modelValue","cancel"],setup(T,{emit:p}){var _,g,h,b,x,V,y;const a=T,w=d([{text:"Drama",value:"Drama"},{text:"Crime",value:"Crime"},{text:"Action",value:"Action"},{text:"Comedy",value:"Comedy"}]),s=d({name:null,description:null,image:null,inTheaters:null,genres:null,rating:null}),e=d({id:(_=a.modelValue)==null?void 0:_.id,name:(g=a.modelValue)==null?void 0:g.name,description:(h=a.modelValue)==null?void 0:h.description,image:(b=a.modelValue)==null?void 0:b.image,inTheaters:((x=a.modelValue)==null?void 0:x.inTheaters)||!1,genres:((V=a.modelValue)==null?void 0:V.genres)||[],rating:((y=a.modelValue)==null?void 0:y.rating)||null}),C=d({name:"required",genres:"required"}),M=i=>i==="required"?/^ *$/:null;function U(){let i=!0;f();for(const[o,n]of Object.entries(C)){const k=M(n);k&&k.test(e[o]||"")&&(s[o]=`${o} is ${n}`,i=!1)}return i}function D(){S(),p("cancel")}function F(){if(U()){const i={id:e.id||Number(Date.now()),name:e.name,description:e.description,image:e.image,genres:e.genres,inTheaters:e.inTheaters,rating:e.rating};p("update:modelValue",i)}}function S(){e.name=null,e.description=null,e.image=null,e.genres=null,e.inTheaters=!1,f()}function f(){s.name=null,s.description=null,s.image=null,s.genres=null,s.inTheaters=null}const v=I();return j(()=>v.value.focus()),(i,o)=>(m(),u("form",{onSubmit:A(F,["prevent"])},[r(t("input",{type:"hidden",name:"id","onUpdate:modelValue":o[0]||(o[0]=n=>e.id=n)},null,512),[[c,e.id]]),t("div",O,[G,r(t("input",{ref_key:"nameInput",ref:v,type:"text",name:"name","onUpdate:modelValue":o[1]||(o[1]=n=>e.name=n),class:"movie-form-input"},null,512),[[c,e.name]]),t("span",L,l(s.name),1)]),t("div",R,[z,r(t("textarea",{type:"text",name:"description","onUpdate:modelValue":o[2]||(o[2]=n=>e.description=n),class:"movie-form-textarea"},null,512),[[c,e.description]]),t("span",H,l(s.description),1)]),t("div",J,[K,r(t("input",{type:"text",name:"image","onUpdate:modelValue":o[3]||(o[3]=n=>e.image=n),class:"movie-form-input"},null,512),[[c,e.image]]),t("span",P,l(s.image),1)]),t("div",Q,[W,r(t("select",{name:"genre","onUpdate:modelValue":o[4]||(o[4]=n=>e.genres=n),class:"movie-form-input",multiple:""},[(m(!0),u(B,null,N(w,n=>(m(),u("option",{key:n.value,value:n.value},l(n.text),9,X))),128))],512),[[q,e.genres]]),t("span",Y,l(s.genres),1)]),t("div",Z,[t("label",ee,[r(t("input",{type:"checkbox","onUpdate:modelValue":o[5]||(o[5]=n=>e.inTheaters=n),"true-value":!0,"false-value":!1,class:"movie-form-checkbox"},null,512),[[$,e.inTheaters]]),te]),t("span",ne,l(s.inTheaters),1)]),t("div",oe,[t("button",{type:"button",class:"button text-white",onClick:D},"Cancel"),t("button",se,[e.id?(m(),u("span",ae,"Save")):(m(),u("span",ie,"Create"))])])],40,E))}};export{le as default};