(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"3tIS":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("nKUr"),a=(n("q1tI"),n("dDCJ")),c=n("9vsu"),r=n("APW+"),l=n.n(r),o=n("IP2g"),s=n("WE53"),d=function(e){var t,n=e.sticker,r=e.title;return Object(i.jsx)("div",{className:l.a.sticker,children:Object(i.jsx)(a.a,{trigger:"click",placement:"top",overlay:Object(i.jsxs)(c.a,{id:"popover-positioned-".concat(null===n||void 0===n?void 0:n.id),children:[r?Object(i.jsx)(c.a.Title,{children:r}):"",Object(i.jsx)(c.a.Content,{children:null===n||void 0===n?void 0:n.description})]}),children:Object(i.jsxs)("button",{type:"button",id:null===n||void 0===n||null===(t=n.id)||void 0===t?void 0:t.toString(),className:"".concat(l.a.sticker__btn," ").concat(""),children:[null===n||void 0===n?void 0:n.name," ",Object(i.jsx)(o.a,{width:"33",height:"33",icon:s.u})]})},null===n||void 0===n?void 0:n.id)})}},"67wK":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("nKUr"),a=n("z7pX"),c=n("q1tI"),r=n("D5qE"),l=n("l6Ha"),o=n("A83Z"),s=n("FU9X"),d=n("qPfW"),u=n("IP2g"),b=n("wHSu"),h=function(e){var t,n,a=e.categories,c=e.make,r=e.totalItems,l=e.totalModels,o=e.settings,s=a&&a.length>0;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container-fluid pt-3 pt-md-5 bg-white",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-24 col-md-12",children:Object(i.jsxs)("h2",{className:"mb-2",children:[Object(i.jsx)("mark",{className:"mark-text",children:r})," Deals from ",Object(i.jsx)("mark",{className:"mark-text",children:l})," Matching Models"]})}),Object(i.jsx)("div",{className:"col-24 col-md-6 mb-3 mb-md-0",children:Object(i.jsxs)(d.a,{active:c,indicator:!0,wrapperClass:"w-100",buttonClass:"btn-block bg-light-grey btn-lg text-left",buttonText:"Make",children:[Object(i.jsx)("button",{type:"button",onClick:function(){return o.onMakeChange(null)},children:"All"}),null===(t=o.availableMakes)||void 0===t?void 0:t.map((function(e){return Object(i.jsx)("button",{type:"button",onClick:function(){return o.onMakeChange(e.id)},children:e.name},e.id)}))]})}),Object(i.jsx)("div",{className:"col-24 col-md-6 mb-3 mb-md-0",children:Object(i.jsxs)(d.a,{active:"Price Low > High",indicator:!0,wrapperClass:"w-100",buttonClass:"btn-block bg-light-grey btn-lg text-left",buttonText:"Sort by",children:[Object(i.jsxs)("button",{onClick:function(){return o.onSortOrderChange("price;asc")},type:"button",children:["Price Low ",">"," High"]}),Object(i.jsxs)("button",{onClick:function(){return o.onSortOrderChange("price;desc")},type:"button",children:["Price High ",">"," Low"]})]})})]})}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"container-fluid pt-2 bg-white",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-24 mb-3 mb-md-5",children:[Object(i.jsxs)("button",{type:"button",className:"btn ".concat(s?"btn-light":"btn-primary"," btn-labeled btn-fluid btn-square btn-lg mr-3 mb-3"),onClick:function(){return o.onCategoryChange(null)},children:[Object(i.jsx)("span",{className:"btn-label",children:Object(i.jsx)(u.a,{width:"17",height:"17",icon:s?b.s:b.y})}),Object(i.jsx)("span",{className:"btn-text",children:"Any"})]}),null===(n=o.availableCategories)||void 0===n?void 0:n.map((function(e){return Object(i.jsxs)("button",{type:"button",className:"btn ".concat(a.includes(e.id)?"btn-primary":"btn-light"," btn-labeled btn-fluid btn-square btn-lg mr-3 mb-3"),onClick:function(){return o.onCategoryChange(e.id)},children:[Object(i.jsx)("span",{className:"btn-label",children:Object(i.jsx)(u.a,{width:"17",height:"17",icon:a.includes(e.id)?b.y:b.s})}),Object(i.jsx)("span",{className:"btn-text",children:e.name})]},e.id)}))]})})})]})},v=n("UG5Z"),j=n("Ezaw"),f=n("mmV+"),p=function(e){var t=e.leasingDealType,n=e.vehicleType,d=e.topSpecialOffers,u=e.specialOffersGrouped,b=e.serviceSchema,p=Object(c.useState)([]),m=p[0],x=p[1],O=Object(c.useState)([]),g=O[0],_=O[1],y=Object(c.useState)([]),w=y[0],k=y[1],N=Object(c.useState)(null),S=N[0],C=N[1],T=Object(c.useState)("price;asc"),D=T[0],M=T[1],I=Object(c.useState)(null),A=I[0],P=I[1],L=Object(c.useState)(0),U=L[0],E=L[1],q=Object(c.useState)(0),K=q[0],H=q[1];Object(c.useEffect)((function(){for(var e=JSON.parse(JSON.stringify(u))||[],n=0;n<e.length;n++){var i=e[n];i.vehicles=i.vehicles.filter((function(e){return 2===t?null!==e.personalDeal:null!==e.businessDeal}))}var a=(e=e.filter((function(e){return e.vehicles&&e.vehicles.length>0}))).flatMap((function(e){return e.vehicles})).map((function(e){return e.make})).filter((function(e,t,n){return n.indexOf(e)===t})).sort().map((function(e){return{id:e,name:e}})),c=e.map((function(e){return{id:e.categoryId,name:e.categoryName}}));if(_(c),x(a),S&&!a.map((function(e){return e.id.toLowerCase()})).includes(S.toLowerCase())&&C(null),w&&w.length>0){var r=c.map((function(e){return e.id})),l=w.filter((function(e){return r.includes(e)}));l.length!=w.length&&k(l)}}),[t,u]),Object(c.useEffect)((function(){var e=JSON.parse(JSON.stringify(u))||[];w&&w.length>0&&(e=e.filter((function(e){return w.includes(e.categoryId)})));for(var n=0;n<e.length;n++){var i=e[n];S&&(i.vehicles=i.vehicles.filter((function(e){return e.make.toLowerCase()===S.toLowerCase()}))),i.vehicles=i.vehicles.filter((function(e){return 2===t?null!==e.personalDeal:null!==e.businessDeal}))}for(var a=(e=e.filter((function(e){return e.vehicles&&e.vehicles.length>0}))).flatMap((function(e){return e.vehicles})).map((function(e){return{make:e.make,model:e.model}})),c=0;c<e.length;c++){var r=e[c],l=D.split(";")[1];r.vehicles=r.vehicles.sort((function(e,n){var i=2===t?e.personalDeal:e.businessDeal,a=2===t?n.personalDeal:n.businessDeal;return i.monthlyPrice<a.monthlyPrice?-1:i.monthlyPrice>a.monthlyPrice?1:0})),"desc"===l&&(r.vehicles=r.vehicles.reverse())}E(a.length),H(a.map((function(e){return e.model})).filter((function(e,t,n){return n.indexOf(e)===t})).length),P(e)}),[t,S,w,D]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{children:Object(i.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:b}})}),Object(i.jsxs)(v.a,{children:[(null===d||void 0===d?void 0:d.length)>0&&Object(i.jsxs)("div",{className:"container-fluid py-5 bg-white",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-24",children:Object(i.jsxs)("h1",{className:"mb-5",children:[n==j.a.Car?"Car":"Van"," Lease Deals & Special Offers"]})})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-24 px-md-0",children:Object(i.jsx)(o.a,{tabletArrows:!0,desktopArrows:!0,infinite:d.length>3,children:null===d||void 0===d?void 0:d.map((function(e){return Object(i.jsx)(s.a,{id:"featured-".concat(e.vehicleRef),header:!0,headerColor:"#980000",headerIcon:Object(f.r)(e.optionsType),vehicle:e,dealSelector:t},"featured-".concat(e.vehicleRef))}))})})})]}),Object(i.jsx)(h,{categories:w,make:S,totalItems:U,totalModels:K,settings:{availableCategories:g,availableMakes:m,onCategoryChange:function(e){if(e)if(w.includes(e)){var t=w.filter((function(t){return t!==e}));k(t)}else k((function(t){return[].concat(Object(a.a)(t),[e])}));else k([])},onMakeChange:function(e){C(e)},onSortOrderChange:function(e){e&&D!==e&&M(e)}}}),null===A||void 0===A?void 0:A.map((function(e,n){var a;return Object(i.jsxs)("div",{className:"container-fluid py-3 py-md-5 ".concat(n%2==0?"bg-white":"bg-light-grey"),children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-24",children:Object(i.jsxs)("h3",{className:"mb-3 mb-md-5",children:[Object(i.jsx)("mark",{className:"mark-text",children:e.vehicles.length})," ",e.categoryName," Special Offers"]})})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-24",children:Object(i.jsx)(o.a,{tabletArrows:!0,desktopArrows:!0,infinite:e.vehicles.length>3,children:null===(a=e.vehicles)||void 0===a?void 0:a.map((function(n){return Object(i.jsx)(s.a,{id:"category-1",header:!0,headerColor:"#009892",headerIcon:Object(f.r)(n.optionType),vehicle:n,dealSelector:t},"".concat(e.categoryId,"-").concat(n.vehicleRef))}))})})})]},e.categoryId)}))]}),Object(i.jsx)("div",{className:"container-fluid py-3 py-md-5",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-24",children:[n==j.a.Car&&Object(i.jsx)(l.a,{theme:"light",children:'<p>Browse our best car leasing deals and save money on your next vehicle today. Simply click the icons below to filter by body type or price and find top value on a huge choice of vehicles. Our handpicked special offers won\u2019t be around forever. Check them out now and find the brand new car you want for the lowest price.</p><p>With a wide range of special offers, it\u2019s simple to find the best car lease deals around with Leasing Options. We have a fantastic selection of new vehicles with impressive savings available, guaranteeing you a great price on both <Link href="/car-leasing"><a>personal</a></Link> and <a href="/business-car-leasing">business</a> contracts.</p>\n                                <p>From SUVs to convertibles to hybrids, we have an extensive selection of cars on offer for a limited time. Choose the body type or brand you\u2019re looking to find the right car for your lifestyle and budget. What\u2019s more, we have fantastic discounts on many leading manufacturers, with the likes of <a href="/car-leasing/mercedes-benz">Mercedes-Benz</a>, <a href="/car-leasing/audi">Audi</a> and <a href="/car-leasing/kia">Kia</a> regularly on offer.</p>\n                                <p>Our special offers are perfect if you\u2019re looking for the lowest possible monthly bill, or if you have a specific type of car in mind but aren\u2019t fussy about the model.</p>\n                                <p>If you need your vehicle as soon as possible, check for the In Stock label, where you\u2019ll find cars that are ready to be delivered to your door fast. Don\u2019t forget to view our Mega Deals and Manager Specials for additional price cuts too.</p>\n                                <p>Leasing already offers a flexible, affordable way to drive your chosen car for a fixed monthly rate. And with our latest discounts, you can take advantage of even lower prices and get brilliant savings on a brand-new vehicle today.</p>\n                                <p>Find your perfect car leasing deal today with Leasing Options. If you can\u2019t decide or have any questions, just <a href="/contact">get in touch</a> with our expert team who\u2019ll be happy to help. </p>'}),n==j.a.Commercial&&Object(i.jsx)(l.a,{theme:"light",children:"<p>Buying a van can mean expensive up-front costs that can mean putting your plans on hold. With van leasing, you can get on the move as quickly as possible with affordable monthly payments. Enjoy access to the latest van models, with the benefits of better mileage and lower emissions \u2013 there are no depreciation costs to worry about, and you can even have maintenance included as part of your contract.</p>"})]})})})]})}},"6FTQ":function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,"a",(function(){return i}))},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("6FTQ");function a(e,t){if(e){if("string"===typeof e)return Object(i.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i.a)(e,t):void 0}}},A83Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("cpVT"),a=n("nKUr"),c=(n("q1tI"),n("OS56")),r=n.n(c),l=n("Fygh"),o=n.n(l),s=n("IP2g"),d=n("wHSu");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.className,n=e.dots,i=void 0!==n&&n,c=e.mobileAuto,l=void 0!==c&&c,u=e.mobileArrows,h=void 0===u||u,v=e.tabletAuto,j=void 0!==v&&v,f=e.tabletArrows,p=void 0!==f&&f,m=e.desktopAuto,x=void 0!==m&&m,O=e.desktopArrows,g=void 0!==O&&O,_=e.infinite,y=void 0===_||_,w=e.slidesMax,k=void 0===w?4:w,N=e.children,S=function(e){var t=e.onClick;return Object(a.jsx)("span",{className:"slick-arrow slick-prev",onClick:t,children:Object(a.jsx)(s.a,{width:"25",height:"25",icon:d.f})})},C=function(e){var t=e.onClick;return Object(a.jsx)("span",{className:"slick-arrow slick-next",onClick:t,children:Object(a.jsx)(s.a,{width:"25",height:"25",icon:d.g})})},T={autoplay:x,autoplaySpeed:5e3,lazyLoad:"ondemand",arrows:g,prevArrow:Object(a.jsx)(S,{}),nextArrow:Object(a.jsx)(C,{}),dots:!1,infinite:y,speed:500,slidesToShow:k,slidesToScroll:1,responsive:[{breakpoint:1401,settings:{autoplay:x,arrows:g,slidesToShow:3,slidesToScroll:1,dots:!1}},{breakpoint:1025,settings:{autoplay:j,arrows:p,slidesToShow:2,slidesToScroll:1,dots:i}},{breakpoint:481,settings:{autoplay:l,arrows:h,slidesToShow:1,slidesToScroll:1,dots:i}}]};return Object(a.jsx)("div",{className:"vehicle-carousel ".concat(o.a["vehicle-carousel"]," ").concat(t||""),children:Object(a.jsx)(r.a,b(b({},T),{},{children:N}))})}},"APW+":function(e,t,n){e.exports={sticker:"sticker_sticker__1kSf8",sticker__btn:"sticker_sticker__btn__2uGvo","sticker__btn--bf":"sticker_sticker__btn--bf__1YAur"}},D5qE:function(e,t,n){"use strict";var i=n("nKUr"),a=(n("q1tI"),n("g4pe")),c=n.n(a);t.a=function(e){var t=e.children;return Object(i.jsx)(c.a,{children:t})}},FU9X:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n("nKUr"),a=(n("q1tI"),n("YFqc")),c=n.n(a),r=n("MuaE"),l=n.n(r),o=n("3tIS"),s=n("IP2g"),d=n("mmV+"),u=n("zjkP"),b=n("l7ai"),h=n("oszm"),v=n("/MKj");var j=Object(v.b)((function(e){return{stickerList:e.stickerList}}))((function(e){var t,n,a,r,v,j,f,p,m=e.isATC,x=void 0!==m&&m,O=e.userPostcode,g=void 0===O?"":O,_=e.id,y=e.header,w=void 0!==y&&y,k=e.headerColor,N=void 0===k?"":k,S=e.headerIcon,C=void 0===S?null:S,T=e.vehicle,D=e.dealSelector,M=e.showStickers,I=void 0===M||M,A=e.stickerList,P=D===b.a.Personal,L=null!==T&&void 0!==T&&T.imageUrl?"/fit-in/400x400/"+T.imageUrl:"/fit-in/400x400/website/static/img-placeholder.jpg";return Object(i.jsxs)("div",{className:l.a["card-vehicle"],children:[Object(i.jsxs)("div",{className:l.a["card-vehicle__top"],children:[w&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("style",{dangerouslySetInnerHTML:{__html:"#".concat(_,":before { background-color: ").concat(N,"; } #").concat(_,":after { border-color: transparent transparent transparent ").concat(N,";}")}}),Object(i.jsxs)("div",{id:_,className:l.a["card-vehicle__header"],children:[Object(i.jsx)("span",{children:T.options?T.options:"Special Offer"}),C?Object(i.jsx)(s.a,{width:"24",height:"24",icon:C}):""]})]}),Object(i.jsx)("div",{className:l.a["card-vehicle__img"],children:Object(i.jsx)(c.a,{passHref:!0,href:Object(u.m)(x,g,D),as:Object(u.u)(x,g,D,T.make,T.shortModel,T.model,T.derivative,T.vehicleRef),children:Object(i.jsx)("a",{className:"w-100 d-block text-decoration-none",children:Object(i.jsx)("img",{alt:"".concat(null===T||void 0===T?void 0:T.make," ").concat(null===T||void 0===T?void 0:T.model," ").concat(null===T||void 0===T?void 0:T.derivative),className:"lazyload ".concat(Object(d.t)(L)?"izmo-image":"nonizmopaddingfix"),src:"".concat("https://imagecdn.leasingoptions.co.uk","/fit-in/400x400/website/static/img-placeholder.jpg"),"data-src":"https://imagecdn.leasingoptions.co.uk"+L})})})}),Object(i.jsxs)("div",{className:l.a["card-vehicle__content"],children:[Object(i.jsx)("h4",{className:"mb-2",children:null===T||void 0===T?void 0:T.make}),Object(i.jsx)("h5",{className:"mb-2",children:null===T||void 0===T?void 0:T.model}),Object(i.jsx)("p",{className:l.a["card-vehicle__derivative"],children:null===T||void 0===T?void 0:T.derivative}),I&&T.stickers.length>0&&Object(i.jsx)("div",{className:l.a["card-vehicle__stickers"],children:T.stickers.map((function(e){var t=A.find((function(t){return t&&t.id===e}));return Object(i.jsx)(o.a,{sticker:t},e)}))})]})]}),Object(i.jsxs)("div",{className:l.a["card-vehicle__bottom"],children:[Object(i.jsxs)("div",{className:l.a["personal-deal"],children:[Object(i.jsx)("div",{className:l.a["card-vehicle__details"],children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:12*(P?null===T||void 0===T||null===(t=T.personalDeal)||void 0===t?void 0:t.term:null===T||void 0===T||null===(n=T.businessDeal)||void 0===n?void 0:n.term)})," Months Lease"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:P?null===T||void 0===T||null===(a=T.personalDeal)||void 0===a?void 0:a.mileage:null===T||void 0===T||null===(r=T.businessDeal)||void 0===r?void 0:r.mileage})," Miles Per Annum"]}),Object(i.jsxs)("li",{className:l.a.vehicle_slide_personal,children:[Object(i.jsx)("span",{children:Object(h.a)(P?null===T||void 0===T||null===(v=T.personalDeal)||void 0===v?void 0:v.initialRental:null===T||void 0===T||null===(j=T.businessDeal)||void 0===j?void 0:j.initialRental)})," Initial Rental"]})]})}),Object(i.jsxs)("div",{className:l.a["card-vehicle__price"],children:[Object(i.jsx)("p",{children:Object(h.a)(P?null===T||void 0===T||null===(f=T.personalDeal)||void 0===f?void 0:f.monthlyPrice:null===T||void 0===T||null===(p=T.businessDeal)||void 0===p?void 0:p.monthlyPrice)}),Object(i.jsx)("small",{children:Object(d.e)(D)})]})]}),Object(i.jsx)(c.a,{passHref:!0,href:Object(u.m)(x,g,D),as:Object(u.u)(x,g,D,T.make,T.shortModel,T.model,T.derivative,T.vehicleRef),children:Object(i.jsx)("a",{className:"w-100 text-decoration-none",children:Object(i.jsx)("button",{className:"btn btn-primary btn-lg btn-block",children:"View This Deal"})})})]})]})}))},Fygh:function(e,t,n){e.exports={"vehicle-carousel":"vehicle-carousel_vehicle-carousel__2y6ox"}},MuaE:function(e,t,n){e.exports={"card-vehicle":"card-vehicle_card-vehicle__2xMeU","card-vehicle__top":"card-vehicle_card-vehicle__top__1XUdH","card-vehicle__header":"card-vehicle_card-vehicle__header__3Rd8j","card-vehicle__img":"card-vehicle_card-vehicle__img__1iLXi","card-vehicle__content":"card-vehicle_card-vehicle__content__kCKLq","card-vehicle__derivative":"card-vehicle_card-vehicle__derivative__YAi5g","personal-deal":"card-vehicle_personal-deal__39kAr","business-deal":"card-vehicle_business-deal__1pjs9","card-vehicle__details":"card-vehicle_card-vehicle__details__31wLR","card-vehicle__price":"card-vehicle_card-vehicle__price__K7ffg","card-vehicle__bottom":"card-vehicle_card-vehicle__bottom__3YWga"}},UG5Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("nKUr"),a=n("q1tI"),c=n("/MKj"),r=n("wbKs");var l=Object(c.b)((function(e){return{stickerList:e.stickerList}}),(function(e){return{updatestickerList:function(t){e({type:"UPDATE_STICKER_LIST",data:t})}}}))((function(e){var t=e.stickerList,n=e.updatestickerList,c=e.children;return Object(a.useEffect)((function(){(null===t||void 0===t?void 0:t.length)<1&&Object(r.C)(null).then((function(e){n(e.data)}))}),[]),Object(i.jsx)(i.Fragment,{children:c})}))},dM2G:function(e,t,n){e.exports={"drop-down":"drop-down_drop-down__2EUfj",active:"drop-down_active__1UHN0",btn:"drop-down_btn__3cfvq","btn-label":"drop-down_btn-label__3dskM","drop-down__menu":"drop-down_drop-down__menu__2d5t3","is-active":"drop-down_is-active__1jT7T"}},dvJK:function(e,t,n){e.exports={"expandable-text":"expandable-text_expandable-text__sWgd9","is-limited":"expandable-text_is-limited__1kNcL","expandable-text__inner":"expandable-text_expandable-text__inner__M62dL","is-open":"expandable-text_is-open__1Y0kQ","expandable-text--dark":"expandable-text_expandable-text--dark__2V0DV"}},l6Ha:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var i=n("nKUr"),a=n("q1tI"),c=n.n(a),r=n("i8i4"),l=n.n(r),o=n("dvJK"),s=n.n(o),d=n("qPfW"),u=n("IP2g"),b=n("4Bjl"),h=n("wHSu"),v=n("zjkP"),j=function(e){var t=e.children,n=e.theme,r=e.isATC,o=void 0!==r&&r,j=e.galleryButton,f=void 0!==j&&j,p=e.reviewButton,m=void 0!==p&&p,x=e.modelDropDown,O=void 0!==x&&x,g=e.modelDropDownData,_=e.vehicleFilter,y=e.leasingDealType,w=e.handleModelChange,k=e.handleScrollToTabs,N=c.a.useRef(),S=Object(a.useState)(!1),C=S[0],T=S[1],D=Object(a.useState)(!1),M=D[0],I=D[1];return Object(a.useEffect)((function(){var e=l.a.findDOMNode(N.current).clientHeight,t=0;t=window.innerWidth>767?200:100,e&&e>t&&T(!0)}),[]),Object(i.jsxs)("div",{className:"".concat(s.a["expandable-text"]," ").concat("dark"===n?s.a["expandable-text--dark"]:""," ").concat(C&&!M?s.a["is-limited"]:""," ").concat(M?s.a["is-open"]:""),children:[Object(i.jsx)("div",{ref:N,className:s.a["expandable-text__inner"],dangerouslySetInnerHTML:{__html:t}}),C&&Object(i.jsxs)("button",{role:"button",className:"btn ".concat("dark"===n?"btn-outline-light":"btn-outline-black"," btn-labeled btn-labeled--right ").concat(M?"btn-labeled--rotate":""," ").concat(f&&m?"":"btn-block-xs"," btn-fluid btn-lg mr-sm-3 mt-3"),onClick:function(e){return function(e){e.preventDefault(),I(!M)}(e)},children:[Object(i.jsx)("span",{className:"btn-text",children:M?"Show less":"Read more"}),Object(i.jsx)("span",{className:"btn-label",children:Object(i.jsx)(u.a,{width:"17",height:"17",icon:b.c})})]}),f&&Object(i.jsxs)("button",{role:"button",onClick:function(){return k("gallery")},className:"btn ".concat(o?"btn-outline-light":"btn-outline-primary"," btn-labeled btn-fluid btn-lg mr-3 d-none d-md-inline-block mt-3"),children:[Object(i.jsx)("span",{className:"btn-label",children:Object(i.jsx)(u.a,{width:"16",height:"16",icon:h.l})}),Object(i.jsx)("span",{className:"btn-text",children:"View Gallery"})]}),m&&Object(i.jsxs)("button",{role:"button",onClick:function(){return k("review")},className:"btn ".concat(o?"btn-outline-light":"btn-outline-primary"," btn-labeled btn-fluid btn-lg d-none d-md-inline-block mt-3"),children:[Object(i.jsx)("span",{className:"btn-label",children:Object(i.jsx)(u.a,{width:"16",height:"16",icon:b.d})}),Object(i.jsx)("span",{className:"btn-text",children:"View Review"})]}),O&&g&&Object(i.jsx)(d.a,{wrapperClass:"w-100-xs float-md-right",buttonClass:"".concat(o?" btn-outline-light":"btn-outline-primary"," btn-fluid btn-lg btn-block-xs mt-3"),buttonText:"Quick model select",children:null===g||void 0===g?void 0:g.map((function(e){return Object(i.jsx)("button",{type:"button",className:"text-left",onClick:function(){return w(Object(v.k)(y)+"/"+(null===_||void 0===_?void 0:_.manufacturerUrl)+"/"+e.shortModTextUrl)},children:e.shortModText},e.shortModText)}))})]})}},qPfW:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("nKUr"),a=n("q1tI"),c=n("dM2G"),r=n.n(c),l=n("IP2g"),o=n("wHSu"),s=function(e){var t=e.wrapperClass,n=e.indicator,c=void 0!==n&&n,s=e.active,d=void 0===s?"All":s,u=e.buttonClass,b=e.buttonText,h=e.children,v=Object(a.useState)(!1),j=v[0],f=v[1],p=Object(a.useState)(d),m=p[0],x=p[1],O=function(e){f(!1),x(e.target.innerText)};return Object(i.jsxs)("div",{className:"".concat(r.a["drop-down"]," ").concat(t," ").concat(j?r.a.active:""),children:[Object(i.jsxs)("button",{type:"button",className:"btn ".concat(r.a.btn," ").concat(u),onClick:function(e){f(!j)},children:[b||"Read More"," ",c?Object(i.jsx)("mark",{className:"mark-text",onClick:function(e){return O(e)},children:m}):null," ",Object(i.jsx)(l.a,{width:"14",height:"14",icon:o.e})]}),Object(i.jsx)("div",{className:r.a["drop-down__menu"],onClick:function(e){return O(e)},children:h})]})}},z7pX:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("6FTQ");var a=n("8rE2");function c(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);