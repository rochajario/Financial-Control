(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],d=0,h=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-tabs",{staticClass:"ml-n9",attrs:{centered:"",color:"grey darken-1"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.loggedIn?e._l(e.authenticatedUserItems,(function(t){return a("v-tab",{key:t},[e._v(" "+e._s(t)+" ")])})):e._l(e.notAuthenticatedUserItems,(function(t){return a("v-tab",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),e.loggedIn?a("logout-dialog",{on:{userLogedOut:e.toggleTabs}}):e._e()],1),a("v-main",{staticClass:"grey lighten-3"},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[e.loggedIn?[a("main-page",{attrs:{referenceTab:e.tab}})]:[a("login-page",{attrs:{referenceTab:e.tab},on:{userAuthenticated:e.toggleTabs}})]],2)],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-logout-variant ")])],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v(" Are you sure? ")]),a("v-card-text",[e._v(" Let me know what you think about this project!"),a("br"),e._v(" Send-me your feedback an see more on Github by clicking in 'More' ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.leave}},[e._v(" Leave ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.more}},[e._v(" More ")])],1)],1)],1)],1)},o=[],c={data:function(){return{dialog:!1}},methods:{leave:function(){this.dialog=!1,this.$emit("userLogedOut")},more:function(){this.dialog=!1,this.$emit("userLogedOut"),window.open("https://github.com/rochajario/Financial-Control","_blank")}}},l=c,u=a("2877"),d=a("6544"),h=a.n(d),f=a("8336"),m=a("b0af"),b=a("99d9"),p=a("169a"),v=a("132d"),g=a("0fd9"),j=a("2fa4"),y=Object(u["a"])(l,i,o,!1,null,null,null),x=y.exports;h()(y,{VBtn:f["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VDialog:p["a"],VIcon:v["a"],VRow:g["a"],VSpacer:j["a"]});var k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-sheet",{staticClass:"ma-5",attrs:{"min-height":"45vh",width:"50vh",rounded:"lg"}},[a("v-tabs-items",{staticClass:"pa-10",model:{value:e.referenceTab,callback:function(t){e.referenceTab=t},expression:"referenceTab"}},[a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("sign-up",{on:{newUser:this.createNewUser}})],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("log-in",{on:{userLogin:this.userAuthentication}})],1)],1)],1)],1),a("snackbar",{attrs:{color:e.snackbarColor,text:e.snackbarMessage,visible:e.snackbarVisibility}})],1)},w=[],_=(a("e9c4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:10,label:"Username",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{"append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.passwordShow?"text":"password",name:"input-10-1",label:"Password",hint:"At least 8 characters",counter:""},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-checkbox",{staticClass:"mb-3",attrs:{"error-messages":e.checkboxErrors,label:"I Agree with the Privacy Policy",required:""},on:{change:function(t){return e.$v.checkbox.$touch()},blur:function(t){return e.$v.checkbox.$touch()}},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),this.isReady?a("v-btn",{staticClass:"mr-6",on:{click:e.submit}},[e._v(" submit ")]):a("v-btn",{staticClass:"mr-6",attrs:{disabled:""}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)}),V=[],C=(a("b0c0"),a("1dce")),$=a("b5ae"),S={mixins:[C["validationMixin"]],validations:{name:{required:$["required"],maxLength:Object($["maxLength"])(10)},email:{required:$["required"],email:$["email"]},select:{required:$["required"]},checkbox:{checked:function(e){return e}}},data:function(){return{name:"",email:"",password:"",select:null,passwordShow:!1,checkbox:!1,isReady:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"}}}},computed:{checkboxErrors:function(){var e=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&e.push("You must agree to continue!"),e):e},nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&e.push("Name must be at most 10 characters long"),!this.$v.name.required&&e.push("Name is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e}},methods:{markCheckBox:function(){this.$v.checkbox.$touch(),this.isReady=!0},submit:function(){this.$v.$touch();var e={username:this.name,email:this.email,password:this.password};this.$emit("newUser",e)},clear:function(){this.$v.$reset(),this.name="",this.email="",this.password="",this.checkbox=!1}}},E=S,D=a("ac7c"),O=a("8654"),T=Object(u["a"])(E,_,V,!1,null,null,null),q=T.exports;h()(T,{VBtn:f["a"],VCheckbox:D["a"],VTextField:O["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{staticClass:"mb-3",attrs:{"append-icon":e.passwordShow?"mdi-eye":"mdi-eye-off",rules:[e.rules.required],type:e.passwordShow?"text":"password",name:"input-10-1",label:"Password"},on:{"click:append":function(t){e.passwordShow=!e.passwordShow}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),""!=e.password&&""!=e.email?a("v-btn",{staticClass:"mr-6",on:{click:e.submit}},[e._v(" submit ")]):a("v-btn",{staticClass:"mr-6",attrs:{disabled:""}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)},A=[],U={mixins:[C["validationMixin"]],validations:{name:{required:$["required"],maxLength:Object($["maxLength"])(10)},email:{required:$["required"],email:$["email"]},select:{required:$["required"]},checkbox:{checked:function(e){return e}}},data:function(){return{email:"",password:"",passwordShow:!1,rules:{required:function(e){return!!e||"Required."}}}},computed:{emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e}},methods:{submit:function(){this.$v.$touch();var e={email:this.email,password:this.password};this.$emit("userLogin",e)},clear:function(){this.$v.$reset(),this.email="",this.password=""}}},M=U,F=Object(u["a"])(M,z,A,!1,null,null,null),L=F.exports;h()(F,{VBtn:f["a"],VTextField:O["a"]});a("99af");var I=a("bc3a"),P=a.n(I),B="https://api-financial-control.herokuapp.com/api";function R(){var e=localStorage.getItem("financial-control-access");if(e)return JSON.parse(e).user.token}var N={signUp:function(e){return P.a.post("".concat(B,"/user"),e)},login:function(e){return P.a.post("".concat(B,"/auth/login"),e)},getAllEntries:function(e){return P.a.get("".concat(B,"/entries"),{headers:{Authorization:e}})},getSummary:function(e,t,a){return P.a.get("".concat(B,"/summary/").concat(t,"/").concat(a),{headers:{Authorization:e}})},getExpenses:function(e,t,a){return P.a.get("".concat(B,"/summary/expenses/").concat(t,"/").concat(a),{headers:{Authorization:e}})},newEntry:function(e,t){return P.a.post("".concat(B,"/entries"),t,{headers:{Authorization:e}})}},J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("v-snackbar",{attrs:{timeout:e.timeout,color:e.color},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")])],1)},H=[],G=(a("a9e3"),{props:{text:{type:String,required:!0},visible:{type:Number,default:0,required:!0},color:{required:!0}},data:function(){return{snackbar:!1,timeout:2e3}},watch:{visible:function(){this.snackbar=!0}}}),Y=G,K=a("2db4"),Q=Object(u["a"])(Y,J,H,!1,null,null,null),W=Q.exports;h()(Q,{VBtn:f["a"],VSnackbar:K["a"]});var X={name:"LoginPage",props:{referenceTab:{required:!0}},components:{"sign-up":q,"log-in":L,snackbar:W},data:function(){return{tab:null,snackbarColor:"",snackbarMessage:"",snackbarVisibility:0}},methods:{createNewUser:function(e){var t=this;N.signUp(e).then((function(){t.snackbarColor="success",t.snackbarMessage="New User Created Successfully",t.snackbarVisibility++})).catch((function(){t.snackbarColor="red accent-2",t.snackbarMessage="Failed to Create new User",t.snackbarVisibility++}))},userAuthentication:function(e){var t=this;N.login(e).then((function(e){localStorage.setItem("financial-control-access",JSON.stringify(e.data)),t.$emit("userAuthenticated",!0)})).catch((function(e){localStorage.clear(),t.snackbarColor="red accent-2",t.snackbarMessage=e.message,t.snackbarVisibility++}))}}},Z=X,ee=a("8dd9"),te=a("c671"),ae=a("aac8"),ne=Object(u["a"])(Z,k,w,!1,null,null,null),re=ne.exports;h()(ne,{VCard:m["a"],VSheet:ee["a"],VTabItem:te["a"],VTabsItems:ae["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"ma-5",attrs:{"min-height":"40vh","min-width":"40vh",width:"90vh",rounded:"lg"}},[a("v-tabs-items",{staticClass:"pa-10",model:{value:e.referenceTab,callback:function(t){e.referenceTab=t},expression:"referenceTab"}},[a("v-tab-item",[a("entries")],1),a("v-tab-item",[a("statistics")],1)],1)],1)},ie=[],oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{staticClass:"d-flex justify-space-between mb-2",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card-title",[e._v("All Entries")])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("v-data-table",{attrs:{headers:e.headers,items:e.entries,search:e.search},scopedSlots:e._u([{key:"item.value",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.getFormattedValue(a.value))+" ")]}},{key:"item.type",fn:function(t){var n=t.item;return[a("v-chip",{attrs:{color:e.getColor(n.type),dark:""}},[e._v(" "+e._s(n.type)+" ")])]}},{key:"item.date",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.getFormattedDate(a.date))+" ")]}}])}),a("span",{staticClass:"d-flex justify-end mt-6"},[a("entry-dialog",{attrs:{title:"New Entry"},on:{entryAdded:e.updateAddedEntry}})],1)],1)},ce=[],le=(a("ac1f"),a("841c"),a("4de4"),a("d3b7"),a("caad"),a("2532"),a("a4d3"),a("e01a"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"grey",dark:""}},"v-btn",r,!1),n),[e._v(" "+e._s(e.title)+" ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"d-flex justify-space-between"},[a("span",{staticClass:"text-h5"},[e._v("New Entry")]),a("span",{staticClass:"group pl-3"},[a("v-chip",{attrs:{color:e.operationType.color,dark:""}},[e._v(" "+e._s(this.operationType.text)+" ")]),a("tooltip",{attrs:{text:"To add an expendig use the minus simbol before value amount."}})],1)]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{counter:"",maxlength:"25",hint:"Give a brief description about the Entry",label:"Description*",rules:e.rules.description,required:""},model:{value:e.entry.description,callback:function(t){e.$set(e.entry,"description",t)},expression:"entry.description"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Amount*",prefix:"$",required:""},model:{value:e.entry.value,callback:function(t){e.$set(e.entry,"value",t)},expression:"entry.value"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[parseFloat(this.entry.value)<0?a("v-select",{attrs:{items:["Food","Health","Home","Transport","Education","Leisure","Unforseen"],label:"Category"},model:{value:e.entry.category,callback:function(t){e.$set(e.entry,"category",t)},expression:"entry.category"}}):e._e()],1)],1)],1),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1)],1)}),ue=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",{attrs:{color:"grey lighten-1"}},[e._v(" mdi-information-outline ")])],1)]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("span",[e._v(e._s(this.text))])])},he=[],fe={props:{text:{required:!0,type:String,default:""}},data:function(){return{show:!1}}},me=fe,be=a("3a2f"),pe=Object(u["a"])(me,de,he,!1,null,null,null),ve=pe.exports;h()(pe,{VBtn:f["a"],VIcon:v["a"],VTooltip:be["a"]});var ge={components:{tooltip:ve},props:{title:{type:String,required:!0}},data:function(){return{dialog:!1,rules:{description:[function(e){return(e||"").length>0||"This field is required"}]},entry:{description:"",value:"0.00",category:""},operationType:{color:"grey",text:"Undefined"}}},methods:{save:function(){this.dialog=!1,this.$emit("entryAdded",this.entry)}},watch:{"entry.value":function(e){var t={color:"grey",text:"Undefined"},a={color:"red",text:"Expense"},n={color:"green",text:"Earning"};if("0.00"!=e&&null!=e&&void 0!=e&&0!=e){var r=parseFloat(e);return this.operationType=r>0?n:a}this.operationType=t}}},je=ge,ye=a("cc20"),xe=a("62ad"),ke=a("a523"),we=a("b974"),_e=Object(u["a"])(je,le,ue,!1,null,null,null),Ve=_e.exports;h()(_e,{VBtn:f["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VChip:ye["a"],VCol:xe["a"],VContainer:ke["a"],VDialog:p["a"],VRow:g["a"],VSelect:we["a"],VSpacer:j["a"],VTextField:O["a"]});var Ce={components:{EntryDialog:Ve},data:function(){return{search:"",headers:[{text:"Description",align:"start",sortable:!1,value:"description"},{text:"Value",value:"value"},{text:"Operation Type",value:"type"},{text:"Operation Date",value:"date"}],entries:[]}},methods:{getColor:function(e){return"Receiving"==e?"#4caf50":"#f44336"},getFilteredEntries:function(){var e=this;return this.search?this.headers.filter((function(t){return t.description.includes(e.search)})):this.headers},getFormattedDate:function(e){return new Date(e).toLocaleDateString("en-US")},getFormattedValue:function(e){var t=Intl.NumberFormat("en-US");return"$ ".concat(t.format(e))},getFinancialEntries:function(){var e=this,t=R();N.getAllEntries(t).then((function(t){return e.entries=t.data}))},updateAddedEntry:function(e){var t=this,a=R();N.newEntry(a,e).then((function(e){return t.entries.push(e.data)}))}},created:function(){this.getFinancialEntries()}},$e=Ce,Se=a("8fea"),Ee=Object(u["a"])($e,oe,ce,!1,null,null,null),De=Ee.exports;h()(Ee,{VCardTitle:b["c"],VChip:ye["a"],VCol:xe["a"],VDataTable:Se["a"],VRow:g["a"],VTextField:O["a"]});var Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"d-flex"},[a("year-month-picker",{on:{dateUpdated:this.getDate}})],1),this.visible?a("v-expansion-panels",{attrs:{disabled:e.disabled,multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("Expenses Summary")]),a("v-expansion-panel-content",[a("pie-chart",{attrs:{chartData:this.expendingsData}})],1)],1),a("v-expansion-panel",[a("v-expansion-panel-header",[e._v("Month Balance")]),a("v-expansion-panel-content",[a("bar-chart",{attrs:{chartData:this.summaryData}})],1)],1)],1):e._e()],1)},Te=[],qe=a("1da1"),ze=(a("1276"),a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{cols:"11",sm:"5"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Summary Year-Month","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{type:"month","no-title":"",scrollable:""},model:{value:e.editedDate,callback:function(t){e.editedDate=t},expression:"editedDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.editedDate)}}},[e._v(" OK ")])],1)],1)],1)],1)}),Ae=[],Ue={data:function(){return{editedDate:"",date:"",menu:!1}},methods:{emitDateUpdated:function(){this.date=this.editedDate,this.$emit("dateUpdated",this.date)}},watch:{date:function(){this.emitDateUpdated()}}},Me=Ue,Fe=a("2e4b"),Le=a("e449"),Ie=Object(u["a"])(Me,ze,Ae,!1,null,null,null),Pe=Ie.exports;h()(Ie,{VBtn:f["a"],VCol:xe["a"],VDatePicker:Fe["a"],VMenu:Le["a"],VRow:g["a"],VSpacer:j["a"],VTextField:O["a"]});a("159b");var Be,Re,Ne,Je,He=a("1fca"),Ge=(a("25f0"),function(){var e=Math.floor(16777215*Math.random()).toString(16);return"#".concat(e)}),Ye={extends:He["b"],props:{chartData:{type:[],required:!0}},data:function(){return{parsedLabels:[],parsedBackgroundColor:[],parsedData:[]}},methods:{cleanUpData:function(){this.parsedLabels=[],this.parsedBackgroundColor=[],this.parsedData=[]},prepareChart:function(){var e=this;this.chartData&&(this.cleanUpData(),this.chartData.forEach((function(t){e.parsedLabels.push(t.category),e.parsedBackgroundColor.push(Ge()),e.parsedData.push(t.totalAmount)})))},elaborateVisualization:function(){this.renderChart({labels:this.parsedLabels,datasets:[{backgroundColor:this.parsedBackgroundColor,data:this.parsedData}]},{responsive:!0,maintainAspectRatio:!1})}},mounted:function(){this.prepareChart(),this.elaborateVisualization()},watch:{chartData:function(){this.prepareChart(),this.elaborateVisualization()}}},Ke=Ye,Qe=Object(u["a"])(Ke,Be,Re,!1,null,null,null),We=Qe.exports,Xe={extends:He["a"],props:{chartData:{type:Object,required:!0}},data:function(){return{monthSummary:{earnings:0,expendings:0,balance:0,balanceColor:""}}},methods:{getOperationColor:function(e){return e>=0?"#44AF69":"#f87979"},cleanUp:function(){this.monthSummary={earnings:0,expendings:0,balance:0,balanceColor:""}},prepareChart:function(){var e=this;this.chartData.entries.forEach((function(t){"Payment"==t.type?e.monthSummary.earnings=t.totalAmount:e.monthSummary.expendings=t.totalAmount,e.monthSummary.balance=e.chartData.balance,e.monthSummary.balanceColor=e.getOperationColor(e.chartData.balance)}))},elaborateVisualization:function(){this.renderChart({labels:["Expendings","Earnings","Balance"],datasets:[{label:"Month Summary",backgroundColor:["#f87979","#44AF69",this.monthSummary.balanceColor],data:[this.monthSummary.earnings,this.monthSummary.expendings,this.monthSummary.balance]}]},{responsive:!0,maintainAspectRatio:!1})}},mounted:function(){this.prepareChart(),this.elaborateVisualization()}},Ze=Xe,et=Object(u["a"])(Ze,Ne,Je,!1,null,null,null),tt=et.exports,at={components:{"year-month-picker":Pe,"bar-chart":tt,"pie-chart":We},data:function(){return{panel:[0,1],disabled:!0,readonly:!1,date:{year:"",month:""},visible:!1,summaryData:void 0,expendingsData:void 0}},mounted:function(){var e=new Date;this.getDate(e.toISOString())},watch:{"date.month":function(){var e=Object(qe["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.getSummary();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},methods:{getDate:function(e){this.date.year=e.split("-")[0],this.date.month=e.split("-")[1]},getExpendings:function(){var e=this,t=R();N.getExpenses(t,this.date.year,this.date.month).then((function(t){e.expendingsData=t.data,e.visible=!0})).catch((function(){e.visible=!1}))},getSummary:function(){var e=this,t=R();N.getSummary(t,this.date.year,this.date.month).then((function(t){e.summaryData=t.data,e.visible=!0})).then((function(){N.getExpenses(t,e.date.year,e.date.month).then((function(t){e.expendingsData=t.data,e.visible=!0}))})).catch((function(){e.visible=!1}))}}},nt=at,rt=a("cd55"),st=a("49e2"),it=a("c865"),ot=a("0393"),ct=Object(u["a"])(nt,Oe,Te,!1,null,null,null),lt=ct.exports;h()(ct,{VExpansionPanel:rt["a"],VExpansionPanelContent:st["a"],VExpansionPanelHeader:it["a"],VExpansionPanels:ot["a"]});var ut={name:"MainPage",components:{entries:De,statistics:lt},props:{referenceTab:{required:!0}}},dt=ut,ht=Object(u["a"])(dt,se,ie,!1,null,null,null),ft=ht.exports;h()(ht,{VSheet:ee["a"],VTabItem:te["a"],VTabsItems:ae["a"]});var mt={name:"App",components:{"logout-dialog":x,"login-page":re,"main-page":ft},data:function(){return{tab:0,loggedIn:!1,notAuthenticatedUserItems:["Sign-in","Login"],authenticatedUserItems:["Entries","Summary"]}},methods:{toggleTabs:function(e){e||localStorage.clear(),this.loggedIn=e}}},bt=mt,pt=a("7496"),vt=a("40dc"),gt=a("f6c4"),jt=a("71a3"),yt=a("fe57"),xt=Object(u["a"])(bt,r,s,!1,null,null,null),kt=xt.exports;h()(xt,{VApp:pt["a"],VAppBar:vt["a"],VContainer:ke["a"],VMain:gt["a"],VRow:g["a"],VTab:jt["a"],VTabs:yt["a"]});var wt=a("f309");n["a"].use(wt["a"]);var _t=new wt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:_t,render:function(e){return e(kt)}}).$mount("#app")}});
//# sourceMappingURL=app.cdb46617.js.map