(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{225:function(e,t,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("7388ab72",content,!0,{sourceMap:!1})},260:function(e,t,r){"use strict";var n={name:"default",data:function(){return{drawer:null,links:[{text:"Stok Takip",icon:"mdi-image",route:"/malzemeler"},{text:"Stok Hareketleri",icon:"mdi-help-box",route:"/stok-hareketleri"},{text:"Ayarlar",icon:"mdi-help-box",route:"/ayarlar"}]}}},o=r(81),c=r(114),m=r.n(c),l=r(397),d=r(402),f=r(167),_=r(388),v=r(403),h=r(398),E=r(168),R=r(169),x=r(108),D=r(113),w=r(399),L=r(389),O=r(401),S=r(176),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",dense:"",color:"white",fixed:"",flat:""}},[n("v-avatar",{attrs:{tile:!0}},[n("img",{attrs:{src:r(305),alt:"logo"}})]),e._v(" "),n("v-toolbar-title",[e._v("\n      Depo "),n("span",{staticStyle:{"font-weight":"bold"}},[e._v("Takip")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({staticClass:"text--darken-2",attrs:{text:"",color:"grey"}},r),[n("v-icon",{attrs:{left:""}},[e._v("mdi-chevron-down")]),e._v(" "),n("span",[e._v("Menu")])],1)]}}])},[e._v(" "),n("v-list",e._l(e.links,(function(link,t){return n("v-list-item",{key:t,attrs:{to:link.route}},[n("v-list-item-title",[e._v(e._s(link.text))])],1)})),1)],1)],1),e._v(" "),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),e._v(" "),n("v-footer",{attrs:{app:""}})],1)}),[],!1,null,null,null);t.a=component.exports;m()(component,{VApp:l.a,VAppBar:d.a,VAvatar:f.a,VBtn:_.a,VContainer:v.a,VFooter:h.a,VIcon:E.a,VList:R.a,VListItem:x.a,VListItemTitle:D.c,VMain:w.a,VMenu:L.a,VSpacer:O.a,VToolbarTitle:S.b})},272:function(e,t,r){r(273),e.exports=r(274)},295:function(e,t,r){"use strict";r(225)},296:function(e,t,r){var n=r(18)(!1);n.push([e.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),e.exports=n},305:function(e,t,r){e.exports=r.p+"img/sari_elektronik.3c5257e.jpg"},355:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n}));var n=function(){return{}}},356:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return d}));var n=r(4),o=(r(41),r(76),r(68),r(12),r(22),r(23),r(89),r(0)),c={},m=function(){return{depolar:[]}},l={SET_DEPOLAR:function(e,data){e.depolar=data},ADD_DEPO:function(e,data){e.depolar.push(data)},EDIT_DEPO:function(e,data){var t=e.depolar.findIndex((function(e){return e.depo_id===data.depo_id}));o.a.set(e.depolar,t,data)},DELETE_DEPO:function(e,data){var t=e.depolar.findIndex((function(e){return e.depo_id===data}));e.depolar.splice(t,1)}},d={getDepolar:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$axios.$get("http://127.0.0.1:8000/api/depolar");case 3:o=r.sent,n("SET_DEPOLAR",o);case 5:case"end":return r.stop()}}),r)})))()},saveDepo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("depo_adi",t.depo_adi),m={params:c},n.next=6,r.$axios.post("http://127.0.0.1:8000/api/depolar",null,m);case 6:l=n.sent,o("ADD_DEPO",l.data);case 8:case"end":return n.stop()}}),n)})))()},editDepo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("depo_adi",t.depo_adi),m={params:c},n.next=6,r.$axios.put("http://127.0.0.1:8000/api/depolar/"+t.depo_id,null,m);case 6:l=n.sent,o("EDIT_DEPO",l.data);case 8:case"end":return n.stop()}}),n)})))()},deleteDepo:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$axios.delete("http://127.0.0.1:8000/api/depolar/"+t);case 3:n.sent,o("DELETE_DEPO",t);case 5:case"end":return n.stop()}}),n)})))()}}},357:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return d}));var n=r(4),o=(r(41),r(58),r(76),r(68),r(12),r(22),r(23),r(89),r(0)),c={getSorumluByDepoID:function(e){return function(t){return e.depo_sorumlulari.find((function(e){return e.depo_id===t}))}}},m=function(){return{depo_sorumlulari:[]}},l={SET_DEPO_SORUMLULARI:function(e,data){e.depo_sorumlulari=data},ADD_DEPO_SORUMLULARI:function(e,data){e.depo_sorumlulari.push(data)},EDIT_DEPO_SORUMLULARI:function(e,data){var t=e.depo_sorumlulari.findIndex((function(e){return e.depo_sorumlu_id===data.depo_sorumlu_id}));o.a.set(e.depo_sorumlulari,t,data)},DELETE_DEPO_SORUMLU:function(e,data){var t=e.depo_sorumlulari.findIndex((function(p){return p.depo_sorumlu_id===data}));e.depo_sorumlulari.splice(t,1)}},d={getDepoSorumlulari:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$axios.$get("http://127.0.0.1:8000/api/depo-sorumlulari");case 3:o=r.sent,n("SET_DEPO_SORUMLULARI",o);case 5:case"end":return r.stop()}}),r)})))()},saveDepoSorumlulari:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("depo_id",t.depo_id),c.append("sorumlu_id",t.sorumlu_id),m={params:c},n.next=7,r.$axios.post("http://127.0.0.1:8000/api/depo-sorumlulari",null,m);case 7:l=n.sent,o("ADD_DEPO_SORUMLULARI",l.data[0]);case 9:case"end":return n.stop()}}),n)})))()},editDepoSorumlulari:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("sorumlu_id",t.sorumlu_id),c.append("depo_id",t.depo_id),m={params:c},n.next=7,r.$axios.put("http://127.0.0.1:8000/api/depo-sorumlulari/"+t.depo_sorumlu_id,null,m);case 7:l=n.sent,o("EDIT_DEPO_SORUMLULARI",l.data[0]);case 9:case"end":return n.stop()}}),n)})))()},deleteDepoSorumlulari:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$axios.delete("http://127.0.0.1:8000/api/depo-sorumlulari/"+t);case 3:n.sent,o("DELETE_DEPO_SORUMLU",t);case 5:case"end":return n.stop()}}),n)})))()}}},358:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return d}));var n=r(4),o=(r(41),r(76),r(68),r(12),r(22),r(23),r(89),r(0)),c={},m=function(){return{firmalar:[]}},l={SET_FIRMALAR:function(e,data){e.firmalar=data},ADD_FIRMA:function(e,data){e.firmalar.push(data)},EDIT_FIRMA:function(e,data){var t=e.firmalar.findIndex((function(e){return e.firma_id===data.firma_id}));o.a.set(e.firmalar,t,data)},DELETE_FIRMA:function(e,data){var t=e.firmalar.findIndex((function(p){return p.firma_id===data}));e.firmalar.splice(t,1)}},d={getFirmalar:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$axios.$get("http://127.0.0.1:8000/api/firmalar");case 3:o=r.sent,n("SET_FIRMALAR",o);case 5:case"end":return r.stop()}}),r)})))()},saveFirma:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("firma_unvan",t.firma_unvan),c.append("firma_tip",t.firma_tip),c.append("firma_tur",t.firma_tur),m={params:c},n.next=8,r.$axios.post("http://127.0.0.1:8000/api/firmalar",null,m);case 8:l=n.sent,o("ADD_FIRMA",l.data);case 10:case"end":return n.stop()}}),n)})))()},editFirma:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("firma_unvan",t.firma_unvan),c.append("firma_tip",t.firma_tip),c.append("firma_tur",t.firma_tur),m={params:c},n.next=8,r.$axios.put("http://127.0.0.1:8000/api/firmalar/"+t.firma_id,null,m);case 8:l=n.sent,o("EDIT_FIRMA",l.data);case 10:case"end":return n.stop()}}),n)})))()},deleteFirma:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$axios.delete("http://127.0.0.1:8000/api/firmalar/"+t);case 3:n.sent,o("DELETE_FIRMA",t);case 5:case"end":return n.stop()}}),n)})))()}}},359:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return d}));var n=r(4),o=(r(41),r(58),r(76),r(68),r(12),r(22),r(23),r(89),r(0)),c={getAllMalzemes:function(e){return e.malzemeler},getMalzemeBirimByID:function(e){return function(t){return e.malzemeler.find((function(e){return e.malzeme_id===t}))}}},m=function(){return{malzemeler:[]}},l={SET_MALZEMELER:function(e,data){e.malzemeler=data},ADD_MALZEME:function(e,data){e.malzemeler.push(data)},EDIT_MALZEME:function(e,data){var t=e.malzemeler.findIndex((function(e){return e.malzeme_id===data.malzeme_id}));o.a.set(e.malzemeler,t,data)},DELETE_MALZEME:function(e,data){var t=e.malzemeler.findIndex((function(e){return e.malzeme_id===data}));e.malzemeler.splice(t,1)}},d={getMalzemeler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$axios.$get("http://127.0.0.1:8000/api/malzemeler");case 3:o=r.sent,n("SET_MALZEMELER",o);case 5:case"end":return r.stop()}}),r)})))()},saveMalzemeler:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("malzeme_adi",t.malzeme_adi),c.append("malzeme_birim",t.malzeme_birim),c.append("depo_id",t.depo_id),m={params:c},n.next=8,r.$axios.post("http://127.0.0.1:8000/api/malzemeler",null,m);case 8:l=n.sent,o("ADD_MALZEME",l.data);case 10:case"end":return n.stop()}}),n)})))()},editMalzemeler:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("malzeme_adi",t.malzeme_adi),c.append("malzeme_birim",t.malzeme_birim),c.append("depo_id",t.depo_id),m={params:c},n.next=8,r.$axios.put("http://127.0.0.1:8000/api/malzemeler/"+t.malzeme_id,null,m);case 8:l=n.sent,o("EDIT_MALZEME",l.data);case 10:case"end":return n.stop()}}),n)})))()},deleteMalzemeler:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$axios.delete("http://127.0.0.1:8000/api/malzemeler/"+t);case 3:n.sent,o("DELETE_MALZEME",t);case 5:case"end":return n.stop()}}),n)})))()}}},360:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return c})),r.d(t,"state",(function(){return m})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return d}));var n=r(4),o=(r(41),r(76),r(68),r(12),r(22),r(23),r(89),r(0)),c={},m=function(){return{sorumlular:[]}},l={SET_SORUMLULAR:function(e,data){e.sorumlular=data},ADD_SORUMLU:function(e,data){e.sorumlular.push(data)},EDIT_SORUMLU:function(e,data){var t=e.sorumlular.findIndex((function(e){return e.sorumlu_id===data.sorumlu_id}));o.a.set(e.sorumlular,t,data)},DELETE_SORUMLU:function(e,data){var t=e.sorumlular.findIndex((function(p){return p.sorumlu_id===data}));e.sorumlular.splice(t,1)}},d={getSorumlular:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$axios.$get("http://127.0.0.1:8000/api/sorumlular");case 3:o=r.sent,n("SET_SORUMLULAR",o);case 5:case"end":return r.stop()}}),r)})))()},saveSorumlular:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("sorumlu_ad_soyad",t.sorumlu_ad_soyad),m={params:c},n.next=6,r.$axios.post("http://127.0.0.1:8000/api/sorumlular",null,m);case 6:l=n.sent,o("ADD_SORUMLU",l.data);case 8:case"end":return n.stop()}}),n)})))()},editSorumlular:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,c,m,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,(c=new URLSearchParams).append("sorumlu_ad_soyad",t.sorumlu_ad_soyad),m={params:c},n.next=6,r.$axios.put("http://127.0.0.1:8000/api/sorumlular/"+t.sorumlu_id,null,m);case 6:l=n.sent,o("EDIT_SORUMLU",l.data);case 8:case"end":return n.stop()}}),n)})))()},deleteSorumlular:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$axios.delete("http://127.0.0.1:8000/api/sorumlular/"+t);case 3:n.sent,o("DELETE_SORUMLU",t);case 5:case"end":return n.stop()}}),n)})))()}}},361:function(e,t,r){"use strict";r.r(t),r.d(t,"getters",(function(){return o})),r.d(t,"state",(function(){return c})),r.d(t,"mutations",(function(){return m})),r.d(t,"actions",(function(){return l}));var n=r(4),o=(r(41),r(24),{}),c=function(){return{stok_hareketleri:[],temp:[]}},m={SET_STOK_HAREKETLERI:function(e,data){e.stok_hareketleri=data},ADD_STOK_HAREKETI:function(e,data){e.temp=data,e.stok_hareketleri=e.stok_hareketleri.concat(e.temp)}},l={getStokHareketleri:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,t.$axios.$get("http://127.0.0.1:8000/api/stok-hareketleri");case 3:o=r.sent,n("SET_STOK_HAREKETLERI",o);case 5:case"end":return r.stop()}}),r)})))()},saveStokHareketi:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,r.$axios.post("http://127.0.0.1:8000/api/stok-hareketleri",t).then((function(e){o("ADD_STOK_HAREKETI",e.data)}));case 3:case"end":return n.stop()}}),n)})))()}}},74:function(e,t,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(295),r(81)),c=r(114),m=r.n(c),l=r(397),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[404===e.error.statusCode?r("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):r("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);t.a=component.exports;m()(component,{VApp:l.a})}},[[272,15,5,16]]]);