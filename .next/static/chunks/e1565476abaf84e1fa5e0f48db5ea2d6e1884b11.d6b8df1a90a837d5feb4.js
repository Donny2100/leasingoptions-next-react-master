(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{A83Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n("cpVT"),a=n("nKUr"),s=(n("q1tI"),n("OS56")),i=n.n(s),r=n("Fygh"),l=n.n(r),o=n("IP2g"),d=n("wHSu");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.className,n=e.dots,c=void 0!==n&&n,s=e.mobileAuto,r=void 0!==s&&s,h=e.mobileArrows,b=void 0===h||h,m=e.tabletAuto,u=void 0!==m&&m,v=e.tabletArrows,x=void 0!==v&&v,p=e.desktopAuto,O=void 0!==p&&p,g=e.desktopArrows,f=void 0!==g&&g,w=e.infinite,y=void 0===w||w,_=e.slidesMax,N=void 0===_?4:_,k=e.children,T=function(e){var t=e.onClick;return Object(a.jsx)("span",{className:"slick-arrow slick-prev",onClick:t,children:Object(a.jsx)(o.a,{width:"25",height:"25",icon:d.f})})},C=function(e){var t=e.onClick;return Object(a.jsx)("span",{className:"slick-arrow slick-next",onClick:t,children:Object(a.jsx)(o.a,{width:"25",height:"25",icon:d.g})})},S={autoplay:O,autoplaySpeed:5e3,lazyLoad:"ondemand",arrows:f,prevArrow:Object(a.jsx)(T,{}),nextArrow:Object(a.jsx)(C,{}),dots:!1,infinite:y,speed:500,slidesToShow:N,slidesToScroll:1,responsive:[{breakpoint:1401,settings:{autoplay:O,arrows:f,slidesToShow:3,slidesToScroll:1,dots:!1}},{breakpoint:1025,settings:{autoplay:u,arrows:x,slidesToShow:2,slidesToScroll:1,dots:c}},{breakpoint:481,settings:{autoplay:r,arrows:b,slidesToShow:1,slidesToScroll:1,dots:c}}]};return Object(a.jsx)("div",{className:"vehicle-carousel ".concat(l.a["vehicle-carousel"]," ").concat(t||""),children:Object(a.jsx)(i.a,j(j({},S),{},{children:k}))})}},Fygh:function(e,t,n){e.exports={"vehicle-carousel":"vehicle-carousel_vehicle-carousel__2y6ox"}},UG5Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n("nKUr"),a=n("q1tI"),s=n("/MKj"),i=n("wbKs");var r=Object(s.b)((function(e){return{stickerList:e.stickerList}}),(function(e){return{updatestickerList:function(t){e({type:"UPDATE_STICKER_LIST",data:t})}}}))((function(e){var t=e.stickerList,n=e.updatestickerList,s=e.children;return Object(a.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<1&&Object(i.C)(null).then((function(e){n(e.data)}))}),[]),Object(c.jsx)(c.Fragment,{children:s})}))},dM2G:function(e,t,n){e.exports={"drop-down":"drop-down_drop-down__2EUfj",active:"drop-down_active__1UHN0",btn:"drop-down_btn__3cfvq","btn-label":"drop-down_btn-label__3dskM","drop-down__menu":"drop-down_drop-down__menu__2d5t3","is-active":"drop-down_is-active__1jT7T"}},iCm1:function(e,t,n){e.exports={"card-vehicle-short":"card-vehicle-short_card-vehicle-short__29fg_","card-vehicle-short__top":"card-vehicle-short_card-vehicle-short__top__2PZBv","card-vehicle-short__header":"card-vehicle-short_card-vehicle-short__header__2IPvz","card-vehicle-short__img":"card-vehicle-short_card-vehicle-short__img__1-bXU","card-vehicle-short__content":"card-vehicle-short_card-vehicle-short__content__3-VXr","card-vehicle-short__derivative":"card-vehicle-short_card-vehicle-short__derivative__aPFKi","personal-deal":"card-vehicle-short_personal-deal__2CtFP","business-deal":"card-vehicle-short_business-deal__3mxcw","card-vehicle-short__details":"card-vehicle-short_card-vehicle-short__details__16btk","card-vehicle-short__price":"card-vehicle-short_card-vehicle-short__price__1Ki4Y","card-vehicle-short__bottom":"card-vehicle-short_card-vehicle-short__bottom__1vATz"}},qPfW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("nKUr"),a=n("q1tI"),s=n("dM2G"),i=n.n(s),r=n("IP2g"),l=n("wHSu"),o=function(e){var t=e.wrapperClass,n=e.indicator,s=void 0!==n&&n,o=e.active,d=void 0===o?"All":o,h=e.buttonClass,j=e.buttonText,b=e.children,m=Object(a.useState)(!1),u=m[0],v=m[1],x=Object(a.useState)(d),p=x[0],O=x[1],g=function(e){v(!1),O(e.target.innerText)};return Object(c.jsxs)("div",{className:"".concat(i.a["drop-down"]," ").concat(t," ").concat(u?i.a.active:""),children:[Object(c.jsxs)("button",{type:"button",className:"btn ".concat(i.a.btn," ").concat(h),onClick:function(e){v(!u)},children:[j||"Read More"," ",s?Object(c.jsx)("mark",{className:"mark-text",onClick:function(e){return g(e)},children:p}):null," ",Object(c.jsx)(r.a,{width:"14",height:"14",icon:l.e})]}),Object(c.jsx)("div",{className:i.a["drop-down__menu"],onClick:function(e){return g(e)},children:b})]})}},x7xT:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var c=n("nKUr"),a=n("vJKn"),s=n.n(a),i=n("rg98"),r=n("q1tI"),l=n("kRh9"),o=n("Esmv"),d=n("e2ni"),h=n("uxQs"),j=n("A83Z"),b=n("iCm1"),m=n.n(b),u=n("IP2g"),v=n("uB96"),x=n("l7ai"),p=n("mmV+"),O=n("oszm"),g=function(e){var t,n,a,s,i,r,l,o,d=e.vehicle,h=e.leasingDealType,j=e.settings,b=h===x.a.Personal,g=null!==d&&void 0!==d&&d.imageUrl?"/fit-in/400x400/"+d.imageUrl:"/fit-in/400x400/website/static/img-placeholder.jpg";return Object(c.jsxs)("div",{className:m.a["card-vehicle-short"],children:[Object(c.jsxs)("div",{className:m.a["card-vehicle-short__top"],children:[Object(c.jsxs)("div",{className:"".concat(m.a["card-vehicle-short__header"]," d-flex justify-content-between align-items-center"),children:[Object(c.jsx)("span",{children:"Short Term Leasing"}),Object(c.jsx)(u.a,{width:"24",height:"24",icon:v.h})]}),Object(c.jsx)("div",{className:m.a["card-vehicle-short__img"],children:Object(c.jsx)("img",{alt:"".concat(null===d||void 0===d?void 0:d.make," ").concat(null===d||void 0===d?void 0:d.model," ").concat(null===d||void 0===d?void 0:d.derivative),className:"lazyload ".concat(Object(p.t)(g)?"izmo-image":"nonizmopaddingfix"),"data-src":"https://imagecdn.leasingoptions.co.uk"+g})}),Object(c.jsxs)("div",{className:m.a["card-vehicle-short__content"],children:[Object(c.jsx)("h4",{className:"mb-2",children:null===d||void 0===d?void 0:d.make}),Object(c.jsx)("h5",{className:"mb-2",children:null===d||void 0===d?void 0:d.model}),Object(c.jsx)("p",{className:m.a["card-vehicle-short__derivative"],children:null===d||void 0===d?void 0:d.derivative})]})]}),Object(c.jsxs)("div",{className:m.a["card-vehicle-short__bottom"],children:[Object(c.jsxs)("div",{className:m.a["personal-deal"],children:[Object(c.jsx)("div",{className:m.a["card-vehicle-short__details"],children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:b?null===d||void 0===d||null===(t=d.personalDeal)||void 0===t?void 0:t.term:null===d||void 0===d||null===(n=d.businessDeal)||void 0===n?void 0:n.term})," Months Lease"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:b?null===d||void 0===d||null===(a=d.personalDeal)||void 0===a?void 0:a.mileage:null===d||void 0===d||null===(s=d.businessDeal)||void 0===s?void 0:s.mileage})," Miles Per Annum"]}),Object(c.jsxs)("li",{className:m.a.vehicle_slide_personal,children:[Object(c.jsxs)("span",{children:["\xa3",b?null===d||void 0===d||null===(i=d.personalDeal)||void 0===i?void 0:i.initialRental:null===d||void 0===d||null===(r=d.businessDeal)||void 0===r?void 0:r.initialRental]})," Initial Rental"]})]})}),Object(c.jsxs)("div",{className:m.a["card-vehicle-short__price"],children:[Object(c.jsx)("p",{children:Object(O.a)(b?null===d||void 0===d||null===(l=d.personalDeal)||void 0===l?void 0:l.monthlyPrice:null===d||void 0===d||null===(o=d.businessDeal)||void 0===o?void 0:o.monthlyPrice)}),Object(c.jsx)("small",{children:Object(p.e)(h)})]})]}),Object(c.jsx)("button",{className:"btn btn-primary btn-lg btn-block",onClick:function(){j.onEnquiry&&j.onEnquiry(d)},children:"Enquire Now"})]})]})},f=n("qPfW"),w=n("ehjK"),y=n("dsaI"),_=n("a2hv"),N=n("HFnU"),k=n("9U2n"),T=n("UG5Z"),C=n("xG9w"),S=n("Ezaw"),P=n("MlS6"),L=n("wbKs"),D={name:"All",value:null},I=function(e){var t=e.leasingDealType,n=e.vehicleType,a=e.shortTermDeals,b=e.faqList,m=e.categoryList,p=Object(r.useContext)(_.a),O="".concat("https://imagecdn.leasingoptions.co.uk","/website/short-term-leasing").concat(n===S.a.Commercial?"-van":""),I=n===S.a.Commercial?"stvl":"stl",E=Object(r.useState)(a.length),A=E[0],F=E[1],M=Object(r.useState)({label:"Price High >Low",value:"monthlyPrice",direction:"DESC"}),U=M[0],R=M[1],H=Object(r.useState)(D),q=H[0],K=H[1],z=Object(r.useState)(a),B=z[0],G=z[1],W=Object(r.useState)(a),Z=W[0],V=W[1],Y=Object(r.useState)([D]),J=Y[0],Q=Y[1];Object(r.useEffect)((function(){$(U)}),[U]),Object(r.useEffect)((function(){if(q.value){var e=C.b(B,(function(e){return e.make===q.value}));V(e)}else V(B)}),[q]),Object(r.useEffect)((function(){Promise.resolve(te(n,t)).then((function(e){F(e.data.length),ee(e.data)}))}),[t]);var X=function(){p.showModal(N.a,{show:!0,title:"Contact"})},$=function(e){if(Z.length>0){var n=C.f(Z,(function(n){var c=t===x.a.Personal?n.personalDeal:n.businessDeal;if(c)return c[e.value]}));"DESC"===e.direction&&(n=n.reverse()),V(n)}},ee=function(e){var t=JSON.parse(JSON.stringify(e)),n=C.f(C.g(C.e(t,(function(e){return e.make})))),c=[D];n.forEach((function(e){c.push({value:e,name:e})})),$(U),Q(c),K(D),G(t),V(t),F(B.length)},te=function(){var e=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.y)(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(e){if(e&&e.id){var n={dealType:3,dealId:e.id,leasingDealType:t,details:e.make+" "+e.model+" "+e.derivative};p.showModal(k.a,{show:!0,title:"Enquire Now",baseData:n,settings:{isIntrenal:!1,leasingMessage:e.make+" "+e.model+" "+e.derivative,proceededToApplyForFinanceDirectly:!1}})}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a,{className:"page-banner--".concat(I),image:"",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"col-24 col-md-20 col-lg-18 pt-md-3",children:[Object(c.jsxs)("h1",{className:"text-white",children:["Short Term ",n===S.a.Commercial?"Van":"Car"," Leasing"]}),Object(c.jsx)("p",{className:"text-white mb-3 mb-md-5",children:"Find a flexible lease contract with our range of short term car and van leases."}),Object(c.jsxs)("ul",{className:"mb-3 mb-md-5",children:[Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," No long-term commitment"]}),Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," More cost-effective than daily rentals"]}),Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," Simple, fixed monthly payments"]}),Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," New vehicle in as little as three days"]}),Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," Maintenance and servicing included"]}),Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," Get a Brand New Car Delivered within 3 days (subject to vehicle availability)"]}),Object(c.jsxs)("li",{className:"text-white",children:[Object(c.jsx)(u.a,{width:"16",height:"16",icon:v.b})," Fully Covered with Road Tax, Maintenance and Servicing Included"]})]}),Object(c.jsx)("button",{className:"btn btn-primary btn-lg",onClick:function(){return X()},children:"Get in touch"})]})})}),Object(c.jsxs)(o.a,{className:"bg-light-grey",logoUrl:"".concat(O,"/stl-logo.svg"),children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{"data-src":"".concat(O,"/contract.svg"),className:"lazyload",alt:""}),Object(c.jsx)("span",{children:"Shorter Contract"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{"data-src":"".concat(O,"/repairs.svg"),className:"lazyload",alt:""}),Object(c.jsx)("span",{children:"Maintenance & Repairs"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{"data-src":"".concat(O,"/payments.svg"),className:"lazyload",alt:""}),Object(c.jsx)("span",{children:"Fixed Monthly Payments"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{"data-src":"".concat(O,"/delivery.svg"),className:"lazyload",alt:""}),Object(c.jsx)("span",{children:"Fast Delivery"})]})]}),B.length>0?Object(c.jsxs)("section",{className:"container-fluid py-3 py-md-5 bg-white",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24",children:Object(c.jsxs)("h2",{className:"mb-3 mb-md-5",children:[Object(c.jsx)("mark",{className:"mark-text",children:A})," Short Term Deals Available"]})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-24 col-md-12 col-lg-6 mb-3 mb-md-5",children:Object(c.jsx)(f.a,{indicator:!0,active:D.name,wrapperClass:"w-100",buttonClass:"btn-block btn-outline-secondary",buttonText:"Make",children:J.map((function(e){return Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return K(e)},children:e.name},"make-".concat(e.value))}))})}),Object(c.jsx)("div",{className:"col-24 col-md-12 col-lg-6 offset-lg-12 mb-3 mb-md-5",children:Object(c.jsxs)(f.a,{indicator:!0,active:U.label,wrapperClass:"w-100",buttonClass:"btn-block btn-outline-secondary",buttonText:"Sort by",children:[Object(c.jsxs)("button",{type:"button",className:"text-left",onClick:function(){return R({label:"Price High >Low",value:"monthlyPrice",direction:"DESC"})},children:["Price High ",">"," Low"]}),Object(c.jsxs)("button",{type:"button",className:"text-left",onClick:function(){return R({label:"Price Low > High",value:"monthlyPrice",direction:"ASC"})},children:["Price Low ",">"," High"]}),Object(c.jsxs)("button",{type:"button",className:"text-left",onClick:function(){return R({label:"Term Low > High",value:"term",direction:"DESC"})},children:["Term Low ",">"," High"]}),Object(c.jsxs)("button",{type:"button",className:"text-left",onClick:function(){return R({label:"Term High > Low",value:"term",direction:"ASC"})},children:["Term High ",">"," Low"]})]})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24 px-2 px-md-0",children:Object(c.jsx)(T.a,{children:Object(c.jsx)(j.a,{tabletArrows:!0,desktopArrows:!0,infinite:B.length>3,children:Z.map((function(e){return Object(c.jsx)(g,{vehicle:e,leasingDealType:t,settings:{onEnquiry:ne}},"featured-".concat(e.id))}))})})})})]}):null,Object(c.jsx)("section",{className:"container-fluid bg-light-grey py-5",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-24 col-lg-6 d-flex flex-wrap order-lg-2",children:[Object(c.jsx)(d.a,{title:"About Short Term Car Leasing",children:Object(c.jsxs)("nav",{children:[Object(c.jsx)("a",{href:"#what",className:"anchor-link",children:"What is Short Term Leasing?"}),Object(c.jsx)("a",{href:"#leasing",className:"anchor-link",children:"Personal or Business Short Term Leasing?"}),Object(c.jsx)("a",{href:"#faqs",className:"anchor-link",children:"FAQs"}),Object(c.jsx)("a",{onClick:function(e){return X()},"aria-label":"Contact",children:"Contact"})]})}),Object(c.jsx)(h.a,{categoryList:m})]}),Object(c.jsx)("div",{className:"col-24 col-lg-18 d-flex flex-wrap order-lg-1",children:Object(c.jsxs)("div",{id:"what",className:"box p-3 p-md-5 bg-white page-content",children:[n===S.a.Car?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"What is Short Term Car Leasing?"}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Our short term lease deals make choosing your next vehicle easy. With more flexibility, shorter contract lengths and maintenance included, you're just a few clicks away from a brand new car."})}),Object(c.jsx)("p",{children:"Sometimes a two, three or four year agreement is longer than necessary and you may only need a short term lease to fill a gap for a few months. Leasing Options are here to help with a range of short term contracts that allow a fixed rate of payment over terms as little as just three months. All short-term contracts come with maintenance and your new car could be delivered in as little as three days!"})]}):null,n===S.a.Commercial?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"What is Short Term Van Leasing?"}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Our short term lease deals make choosing your next vehicle easy. With more flexibility, shorter contract lengths and maintenance included, you're just a few clicks away from a brand new van or pickup."})}),Object(c.jsx)("p",{children:"Sometimes a two, three or four year agreement is longer than necessary and you may only need a short term lease to fill a gap for a few months. Leasing Options are here to help with a range of short term contracts that allow a fixed rate of payment over terms even as short as just three months. All short term contracts come with maintenance and your new van or pickup could be delivered in as little as three days!"})]}):null,t===x.a.Business&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Benefits"}),Object(c.jsx)("p",{children:" Reclaimable VAT on monthly leasing payments (100% reclaimable for sole business use or 50% for mixed business-private usage)"}),Object(c.jsx)("p",{children:"Reclaimable monthly lease payments (for cars emitting 110g/km or less CO2 100% is reclaimable or 85% if emissions are 111/km or more)"})]}),Object(c.jsx)(y.a,{theme:P.a.Dark})]})})]})}),Object(c.jsx)("section",{id:"leasing",className:"container-fluid bg-".concat(I," py-3 py-md-5"),children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24",children:Object(c.jsxs)("div",{className:"w-100 bg-white p-3 p-md-5",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24 text-center",children:Object(c.jsx)("h2",{className:"mb-4 mb-md-5",children:"Do I Need Personal or Business Short Term Leasing?"})})}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-24 col-md-12 d-flex",children:Object(c.jsxs)("div",{className:"w-100 box box--stl p-3 p-md-4 mb-3 mb-md-0 text-center",children:[Object(c.jsx)("h3",{className:"text-center mb-3 mb-md-5",children:"Personal Short Term Leasing"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"You have a new vehicle on order with a longer than usual waiting period"}),Object(c.jsx)("li",{children:"You have a little or no credit history or a poor credit history"}),Object(c.jsx)("li",{children:"Want flexibility and a quick delivery time"})]})]})}),Object(c.jsx)("div",{className:"col-24 col-md-12 d-flex",children:Object(c.jsxs)("div",{className:"w-100 box box--stl p-3 p-md-4 mb-3 mb-md-0 text-center",children:[Object(c.jsx)("h3",{className:"text-center mb-3 mb-md-5",children:"Business Short Term Leasing"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"You do not want to commit to a long term contract"}),Object(c.jsx)("li",{children:"Have contract, seasonal or temporary employees"}),Object(c.jsx)("li",{children:"If your business is seasonal, with a varying need for vehicles"})]})]})})]})]})})})}),b?Object(c.jsx)(w.a,{title:"Short Term Leasing FAQs",titleCentered:!0,className:"bg-light-grey",faqs:b}):null]})}},"z+X5":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n("nKUr"),a=n("q1tI"),s=n("g4pe"),i=n.n(s),r=n("20a2"),l=n("8xcb"),o=n("voCN"),d=n("+CZG"),h=n("jD8p"),j=n("PYSM"),b=n("EXpO"),m=n("/MKj"),u=n("acQV"),v=n("v878"),x=n("EMmP"),p=n("sZbk"),O=n("7jhi"),g=n("uDbZ"),f=Object(m.b)((function(e){return{isInternal:e.isInternal,trustPilotRating:e.trustPilotRating}}),(function(e){return{dispatchInternalCheck:function(t){e({type:"UPDATE_INTERNAL",internal:t})},updateTrustPilotRating:function(t){e({type:"UPDATE_TRUSTPILOT_RATING",data:t})}}}))((function(e){var t=e.isInternal,n=e.dispatchInternalCheck,s=e.metaData,m=e.breadcrumbs,f=e.children,w=e.className,y=e.trustPilotRating,_=e.updateTrustPilotRating;return function(e){var m=Object(r.useRouter)(),N=new Date;N.setFullYear(N.getFullYear()+1);var k=function(){var e=document.getElementById("liveChatLink"),t=document.getElementById("chatwrapper");Object(j.a)()?(null===t||void 0===t||t.classList.remove("d-none"),null===e||void 0===e||e.classList.add("d-none")):(null===t||void 0===t||t.classList.add("d-none"),null===e||void 0===e||e.classList.remove("d-none"))};Object(a.useEffect)((function(){C(),T(),r.Router.events.on("routeChangeComplete",(function(){C(),T()}))}),[]);var T=function(){null==y&&Object(g.c)().then((function(e){_(e.data)}))};function C(){null===t&&b.a.IsInternalPage().then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}Object(a.useEffect)((function(){k();var e=setInterval(k,15e3);return function(){return clearInterval(e)}}),[]);e=Object(u.a)(m);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(i.a,{children:[s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("title",{children:s.title}),Object(c.jsx)("meta",{name:"description",content:s.description}),Object(c.jsx)("meta",{name:"keywords",content:s.keywords}),Object(c.jsx)("meta",{property:"og:type",content:"website"}),Object(c.jsx)("meta",{property:"og:url",content:"https://www.leasingoptions.co.uk"+m.asPath}),Object(c.jsx)("meta",{property:"og:title",content:s.title}),Object(c.jsx)("meta",{property:"og:description",content:s.description}),Object(c.jsx)("meta",{property:"og:image",content:s.imageUrl?s.imageUrl:"https://imagecdn.leasingoptions.co.uk/fit-in/400x400/website/static/img-placeholder.jpg"}),Object(c.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(c.jsx)("meta",{property:"twitter:url",content:"https://www.leasingoptions.co.uk"+m.asPath}),Object(c.jsx)("meta",{property:"twitter:title",content:s.title}),Object(c.jsx)("meta",{property:"twitter:description",content:s.description}),Object(c.jsx)("meta",{property:"twitter:image",content:s.imageUrl?s.imageUrl:"https://imagecdn.leasingoptions.co.uk/fit-in/400x400/website/static/img-placeholder.jpg"})]}):null,s&&s.canonicalUrl?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("link",{rel:"canonical",href:s.canonicalUrl})}):null,s&&s.ampHTML?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("link",{rel:"amphtml",href:s.ampHTML})}):null,s&&s.noIndex?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("meta",{name:"robots",content:"noindex,nofollow"})}):null,s&&s.author?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("meta",{name:"author",content:s.author})}):null,e&&e.length>0?Object(c.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:Object(d.c)(Object(d.a)(e))}}):null,Object(c.jsx)("script",{type:"application/javascript",dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PG5CHN');"}})]}),Object(c.jsx)(v.a,{}),Object(c.jsx)(l.a,{breadcrumbs:e}),Object(c.jsx)("main",{className:w,children:f}),Object(c.jsx)(x.a,{}),Object(c.jsx)(p.a,{}),Object(c.jsx)(o.a,{}),Object(c.jsx)(O.a,{}),Object(c.jsx)(h.a,{})]})}(m)}))}}]);