(this.webpackJsonpbinarycolorpicker=this.webpackJsonpbinarycolorpicker||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(4),l=c.n(i),s=(c(9),c(2)),r=(c(10),c(11),c(12),c(0));var o=function(e){var t=e.setBinVal,c=e.binVal;return Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",onChange:t,checked:c}),Object(r.jsx)("span",{className:"slider"})]})};var j=function(e){var t=e.binVal,c=e.setBinVal,a=e.expVal;return Object(r.jsxs)("div",{className:"ControlContainer",children:[Object(r.jsx)("div",{className:"binVal",children:t}),Object(r.jsx)(o,{setBinVal:c,binVal:t}),Object(r.jsxs)("div",{children:["2",Object(r.jsx)("sup",{children:a}),0===a?"":"+"]})]})};var b=function(){return Object(r.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-info-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(r.jsx)("path",{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(r.jsx)("path",{d:"M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"}),Object(r.jsx)("circle",{cx:"8",cy:"4.5",r:"1"})]})},d={"0000":{decimalPos1Val:"0",decimalPos2Val:"0",Hexadecimal:"0"},"0001":{decimalPos1Val:"1",decimalPos2Val:"16",Hexadecimal:"1"},"0010":{decimalPos1Val:"2",decimalPos2Val:"32",Hexadecimal:"2"},"0011":{decimalPos1Val:"3",decimalPos2Val:"48",Hexadecimal:"3"},"0100":{decimalPos1Val:"4",decimalPos2Val:"64",Hexadecimal:"4"},"0101":{decimalPos1Val:"5",decimalPos2Val:"80",Hexadecimal:"5"},"0110":{decimalPos1Val:"6",decimalPos2Val:"96",Hexadecimal:"6"},"0111":{decimalPos1Val:"7",decimalPos2Val:"112",Hexadecimal:"7"},1e3:{decimalPos1Val:"8",decimalPos2Val:"128",Hexadecimal:"8"},1001:{decimalPos1Val:"9",decimalPos2Val:"144",Hexadecimal:"9"},1010:{decimalPos1Val:"10",decimalPos2Val:"160",Hexadecimal:"A"},1011:{decimalPos1Val:"11",decimalPos2Val:"176",Hexadecimal:"B"},1100:{decimalPos1Val:"12",decimalPos2Val:"192",Hexadecimal:"C"},1101:{decimalPos1Val:"13",decimalPos2Val:"208",Hexadecimal:"D"},1110:{decimalPos1Val:"14",decimalPos2Val:"224",Hexadecimal:"E"},1111:{decimalPos1Val:"15",decimalPos2Val:"240",Hexadecimal:"F"}};var u=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(0),l=Object(s.a)(i,2),o=l[0],u=l[1],x=Object(a.useState)(0),O=Object(s.a)(x,2),V=O[0],m=O[1],h=Object(a.useState)(0),S=Object(s.a)(h,2),g=S[0],f=S[1],v=Object(a.useState)(1),p=Object(s.a)(v,2),B=p[0],P=p[1],N=Object(a.useState)(1),H=Object(s.a)(N,2),y=H[0],C=H[1],w=Object(a.useState)(0),k=Object(s.a)(w,2),_=k[0],M=k[1],z=Object(a.useState)(1),A=Object(s.a)(z,2),D=A[0],E=A[1],G=Object(a.useState)(0),R=Object(s.a)(G,2),I=R[0],J=R[1],F=Object(a.useState)(0),K=Object(s.a)(F,2),L=K[0],U=K[1],X=Object(a.useState)(0),q=Object(s.a)(X,2),Q=q[0],T=q[1],W=Object(a.useState)(0),Y=Object(s.a)(W,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(0),te=Object(s.a)(ee,2),ce=te[0],ae=te[1],ne=Object(a.useState)(1),ie=Object(s.a)(ne,2),le=ie[0],se=ie[1],re=Object(a.useState)(1),oe=Object(s.a)(re,2),je=oe[0],be=oe[1],de=Object(a.useState)(1),ue=Object(s.a)(de,2),xe=ue[0],Oe=ue[1],Ve=Object(a.useState)(0),me=Object(s.a)(Ve,2),he=me[0],Se=me[1],ge=Object(a.useState)(1),fe=Object(s.a)(ge,2),ve=fe[0],pe=fe[1],Be=Object(a.useState)(1),Pe=Object(s.a)(Be,2),Ne=Pe[0],He=Pe[1],ye=Object(a.useState)(0),Ce=Object(s.a)(ye,2),we=Ce[0],ke=Ce[1],_e=Object(a.useState)(0),Me=Object(s.a)(_e,2),ze=Me[0],Ae=Me[1],De=Object(a.useState)(1),Ee=Object(s.a)(De,2),Ge=Ee[0],Re=Ee[1],Ie=Object(a.useState)(1),Je=Object(s.a)(Ie,2),Fe=Je[0],Ke=Je[1],Le=Object(a.useState)(1),Ue=Object(s.a)(Le,2),Xe=Ue[0],qe=Ue[1];function Qe(){return Number(d["".concat(String(g)).concat(String(V)).concat(String(o)).concat(String(c))].decimalPos1Val)+Number(d["".concat(String(D)).concat(String(_)).concat(String(y)).concat(String(B))].decimalPos2Val)}function Te(){return Number(d["".concat(String(Z)).concat(String(Q)).concat(String(L)).concat(String(I))].decimalPos1Val)+Number(d["".concat(String(xe)).concat(String(je)).concat(String(le)).concat(String(ce))].decimalPos2Val)}function We(){return Number(d["".concat(String(we)).concat(String(Ne)).concat(String(ve)).concat(String(he))].decimalPos1Val)+Number(d["".concat(String(Xe)).concat(String(Fe)).concat(String(Ge)).concat(String(ze))].decimalPos2Val)}function Ye(){var e=0;return Qe()>106&&(e+=1),Te()>106&&(e+=1),We()>106&&(e+=1),e>1?"rgb(70,70,70)":"rgb(136,136,136)"}return Object(r.jsxs)("div",{className:"Background",children:[Object(r.jsxs)("div",{className:"ColorDisplay",style:{backgroundColor:"rgb(".concat(String(Qe()),",").concat(String(Te()),",").concat(String(We()),")"),color:Qe()<192&&Te()<192&&We()<192?"rgb(255,255,255)":"rgb(0,0,0)"},children:[Object(r.jsx)("div",{className:"instructions",children:"Use the binary controls to pick a color and explore the relationship between the Hex and RGB values"}),Object(r.jsxs)("div",{className:"col-for-codes",children:[Object(r.jsxs)("div",{className:"hex-codes-wrapper",children:[Object(r.jsx)("div",{className:"hex-codes-label",style:{color:Ye()},children:"HEX #"}),Object(r.jsx)("div",{className:"hex-val hex-val1",children:d["".concat(String(D)).concat(String(_)).concat(String(y)).concat(String(B))].Hexadecimal}),Object(r.jsx)("div",{className:"hex-val hex-val2",children:d["".concat(String(g)).concat(String(V)).concat(String(o)).concat(String(c))].Hexadecimal}),Object(r.jsx)("div",{className:"hex-val hex-val3",children:d["".concat(String(xe)).concat(String(je)).concat(String(le)).concat(String(ce))].Hexadecimal}),Object(r.jsx)("div",{className:"hex-val hex-val4",children:d["".concat(String(Z)).concat(String(Q)).concat(String(L)).concat(String(I))].Hexadecimal}),Object(r.jsx)("div",{className:"hex-val hex-val5",children:d["".concat(String(Xe)).concat(String(Fe)).concat(String(Ge)).concat(String(ze))].Hexadecimal}),Object(r.jsx)("div",{className:"hex-val hex-val6",children:d["".concat(String(we)).concat(String(Ne)).concat(String(ve)).concat(String(he))].Hexadecimal})]}),Object(r.jsxs)("div",{className:"rgb-codes-wrapper",children:[Object(r.jsx)("div",{className:"rgb-codes-label",style:{color:Ye()},children:"RGB"}),Object(r.jsxs)("div",{className:"rgb-val rgb-val1",children:[Qe(),","]}),Object(r.jsxs)("div",{className:"rgb-val rgb-val2",children:[Te(),","]}),Object(r.jsx)("div",{className:"rgb-val rgb-val3",children:We()})]})]}),Object(r.jsxs)("div",{className:"info-icon-wrapper",children:[Object(r.jsxs)("div",{className:"info-text",children:[Object(r.jsxs)("div",{children:["Made by ",Object(r.jsx)("a",{href:"https://github.com/d-murphy",children:"Dan Murphy"})]}),Object(r.jsxs)("div",{className:"credit-line",children:["Inspiration credit to ",Object(r.jsx)("a",{href:"https://outofips.netlify.app/",children:"Kat Huang"})]})]}),Object(r.jsx)(b,{})]})]}),Object(r.jsxs)("div",{className:"Container",children:[Object(r.jsxs)("div",{className:"Byte",id:"ByteRed",children:[Object(r.jsxs)("div",{className:"Bits4ControlsContainer",id:"Bits4Pos0_1",children:[Object(r.jsx)(j,{binVal:D,setBinVal:function(){return E((function(e){return 0===e?1:0}))},expVal:7}),Object(r.jsx)(j,{binVal:_,setBinVal:function(){return M((function(e){return 0===e?1:0}))},expVal:6}),Object(r.jsx)(j,{binVal:y,setBinVal:function(){return C((function(e){return 0===e?1:0}))},expVal:5}),Object(r.jsx)(j,{binVal:B,setBinVal:function(){return P((function(e){return 0===e?1:0}))},expVal:4})]}),Object(r.jsxs)("div",{className:"Bits4ControlsContainer",id:"Bits4Pos0_0",children:[Object(r.jsx)(j,{binVal:g,setBinVal:function(){return f((function(e){return 0===e?1:0}))},expVal:3}),Object(r.jsx)(j,{binVal:V,setBinVal:function(){return m((function(e){return 0===e?1:0}))},expVal:2}),Object(r.jsx)(j,{binVal:o,setBinVal:function(){return u((function(e){return 0===e?1:0}))},expVal:1}),Object(r.jsx)(j,{binVal:c,setBinVal:function(){return n((function(e){return 0===e?1:0}))},expVal:0})]})]}),Object(r.jsxs)("div",{className:"Byte",id:"ByteGreen",children:[Object(r.jsxs)("div",{className:"Bits4ControlsContainer",id:"Bits4Pos1_1",children:[Object(r.jsx)(j,{binVal:xe,setBinVal:function(){return Oe((function(e){return 0===e?1:0}))},expVal:7}),Object(r.jsx)(j,{binVal:je,setBinVal:function(){return be((function(e){return 0===e?1:0}))},expVal:6}),Object(r.jsx)(j,{binVal:le,setBinVal:function(){return se((function(e){return 0===e?1:0}))},expVal:5}),Object(r.jsx)(j,{binVal:ce,setBinVal:function(){return ae((function(e){return 0===e?1:0}))},expVal:4})]}),Object(r.jsxs)("div",{className:"Bits4ControlsContainer",id:"Bits4Pos1_0",children:[Object(r.jsx)(j,{binVal:Z,setBinVal:function(){return $((function(e){return 0===e?1:0}))},expVal:3}),Object(r.jsx)(j,{binVal:Q,setBinVal:function(){return T((function(e){return 0===e?1:0}))},expVal:2}),Object(r.jsx)(j,{binVal:L,setBinVal:function(){return U((function(e){return 0===e?1:0}))},expVal:1}),Object(r.jsx)(j,{binVal:I,setBinVal:function(){return J((function(e){return 0===e?1:0}))},expVal:0})]})]}),Object(r.jsxs)("div",{className:"Byte",id:"ByteBlue",children:[Object(r.jsxs)("div",{className:"Bits4ControlsContainer",id:"Bits4Pos2_1",children:[Object(r.jsx)(j,{binVal:Xe,setBinVal:function(){return qe((function(e){return 0===e?1:0}))},expVal:7}),Object(r.jsx)(j,{binVal:Fe,setBinVal:function(){return Ke((function(e){return 0===e?1:0}))},expVal:6}),Object(r.jsx)(j,{binVal:Ge,setBinVal:function(){return Re((function(e){return 0===e?1:0}))},expVal:5}),Object(r.jsx)(j,{binVal:ze,setBinVal:function(){return Ae((function(e){return 0===e?1:0}))},expVal:4})]}),Object(r.jsxs)("div",{className:"Bits4ControlsContainer",id:"Bits4Pos2_0",children:[Object(r.jsx)(j,{binVal:we,setBinVal:function(){return ke((function(e){return 0===e?1:0}))},expVal:3}),Object(r.jsx)(j,{binVal:Ne,setBinVal:function(){return He((function(e){return 0===e?1:0}))},expVal:2}),Object(r.jsx)(j,{binVal:ve,setBinVal:function(){return pe((function(e){return 0===e?1:0}))},expVal:1}),Object(r.jsx)(j,{binVal:he,setBinVal:function(){return Se((function(e){return 0===e?1:0}))},expVal:0})]})]})]})]})};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.141678d3.chunk.js.map