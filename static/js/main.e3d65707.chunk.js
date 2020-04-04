(this["webpackJsonpcovid19-statistics"]=this["webpackJsonpcovid19-statistics"]||[]).push([[0],{218:function(e,t,a){e.exports=a(425)},223:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},246:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),i=a.n(c),o=(a(223),a(12)),s=a.n(o),u=a(17),l=a(21),m=(a(225),a(8)),d=a.n(m),f=(a(226),a(467)),p=a(469),h=a(468),v=a(86),y=a(461),b=a(465),E=a(466),C={year:"numeric",month:"numeric",day:"numeric"},_=function(e){var t=e.title,a=e.dateString,n=e.statistic,c=new Date(Date.parse(a)).toLocaleDateString("nl-NL",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),i="Total Confirmed"===t?r.a.createElement(y.a,null):"Total Deaths"===t?r.a.createElement(b.a,null):"Total Recovered"===t?r.a.createElement(E.a,null):"",o=d()("StatisticCard__Avatar",{"StatisticCard__Avatar--confirmed":"Total Confirmed"===t,"StatisticCard__Avatar--deaths":"Total Deaths"===t,"StatisticCard__Avatar--recovered":"Total Recovered"===t}),s=d()("StatisticCard__Content",{"StatisticCard__Content--confirmed":"Total Confirmed"===t,"StatisticCard__Content--deaths":"Total Deaths"===t,"StatisticCard__Content--recovered":"Total Recovered"===t});return r.a.createElement(f.a,{className:"StatisticCard",variant:"outlined"},r.a.createElement(h.a,{classes:{avatar:o},avatar:i,title:t,subheader:"Updated at: ".concat(c)}),r.a.createElement(p.a,{classes:{root:s}},r.a.createElement(v.a,{variant:"h3",component:"p"},n)))},O=a(470),j=function(){return r.a.createElement("div",null,r.a.createElement(O.a,{size:100,color:"secondary",thickness:3.5,variant:"indeterminate"}))},w=a(84),S=a.n(w),g=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat("https://api.covid19api.com","/summary")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat("https://api.covid19api.com","/countries")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("".concat("https://api.covid19api.com","/total/country/").concat(t,"/status/").concat(a)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(l.a)(i,2),m=o[0],d=o[1],f=0,p=0,h=0;return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1),d(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m&&!a&&function(){e.apply(this,arguments)}()})),a&&a.Countries.forEach((function(e){f+=e.TotalConfirmed,p+=e.TotalDeaths,h+=e.TotalRecovered})),r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(j,null),!m&&a&&r.a.createElement("div",{className:"Covid19__GlobalStatistics"},r.a.createElement(_,{title:"Total Confirmed",dateString:a.Date,statistic:f}),r.a.createElement(_,{title:"Total Deaths",dateString:a.Date,statistic:p}),r.a.createElement(_,{title:"Total Recovered",dateString:a.Date,statistic:h})))},T=(a(246),a(22)),N=function(e){var t=e.country,a=Object(n.useState)(!0),c=Object(l.a)(a,2),i=c[0],o=c[1],m=Object(n.useState)(void 0),d=Object(l.a)(m,2),f=d[0],p=d[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var a,n,r,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,"confirmed");case 2:return a=e.sent,e.next=5,D(t,"deaths");case 5:return n=e.sent,e.next=8,D(t,"recovered");case 8:return r=e.sent,e.next=11,h(a);case 11:return c=e.sent,e.next=14,v(n,c);case 14:return i=e.sent,e.next=17,y(r,i);case 17:o=e.sent,p(o);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),o(!1)}),[t]);var h=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&Object.keys(t).length>0)){e.next=2;break}return e.abrupt("return",t.map((function(e){var t=b(e.Date);return e.Date=t,e.Confirmed=e.Cases,e})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&a&&Object.keys(t).length>0)){e.next=2;break}return e.abrupt("return",a.map((function(e){var a=t.find((function(t){return b(t.Date)===e.Date}));return a&&(e.Deaths=a.Cases),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&a&&Object.keys(t).length>0)){e.next=2;break}return e.abrupt("return",a.map((function(e){var a=t.find((function(t){return b(t.Date)===e.Date}));return a&&(e.Recovered=a.Cases),e})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(e){return new Date(Date.parse(e)).toLocaleDateString("nl-NL",C)};return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(j,null),f&&r.a.createElement("div",{style:{width:"50%",height:300},className:"CountryAreaChart"},r.a.createElement(T.e,null,r.a.createElement(T.b,{width:600,height:400,data:f},r.a.createElement(T.c,{strokeDasharray:"1 1"}),r.a.createElement(T.g,{dataKey:"Date"}),r.a.createElement(T.h,null),r.a.createElement(T.f,null),r.a.createElement(T.d,{verticalAlign:"top",height:36}),r.a.createElement(T.a,{type:"monotone",dataKey:"Confirmed",fillOpacity:.5,stroke:"#027be3",fill:"#027be3"}),r.a.createElement(T.a,{type:"monotone",dataKey:"Deaths",fillOpacity:.5,stroke:"#f44336",fill:"#f44336"}),r.a.createElement(T.a,{type:"monotone",dataKey:"Recovered",fillOpacity:.5,stroke:"#009688",fill:"#009688"})))))},F=(a(424),a(471)),A=a(475),R=a(472),I=a(473),K=a(474),L=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(void 0),m=Object(l.a)(o,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),d&&d.splice(0,2),r.a.createElement(F.a,null,r.a.createElement(A.a,{id:"country__input--label"},"Country"),r.a.createElement(I.a,{value:c,onChange:function(t){i(t.target.value),e.setCountryState(t.target.value)},id:"country__input",labelId:"country__input--label"},d&&d.map((function(e){return r.a.createElement(K.a,{key:e.Country,value:e.Slug},e.Country)}))),r.a.createElement(R.a,null,"Fill in the Country for which you require Statistics."))},z=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Covid19"},r.a.createElement("header",{className:"Covid19__Header"},"COVID-19 Statistics"),r.a.createElement("div",{className:"Covid19__GlobalStatistics"},r.a.createElement(k,null)),r.a.createElement("div",{className:"Covid19__SearchForm"},r.a.createElement(L,{setCountryState:i})),r.a.createElement("div",{className:"Covid19__CountryAreaChart"},a&&r.a.createElement(N,{country:a})),r.a.createElement("footer",{className:"Covid19__Footer"},r.a.createElement("h3",{className:"Covid19__Footer--h3"},"About this data"),r.a.createElement("h4",{className:"Covid19__Footer--h4"},"It changes rapidly"),r.a.createElement("p",{className:"Covid19__Footer--p"},"\nThis data changes rapidly, so what\u2019s shown may be out of date.\nInformation about reported cases is also available on the World Health\nOrganization site."),r.a.createElement("h4",{className:"Covid19__Footer--h4"},"It doesn\u2019t include all cases"),r.a.createElement("p",{className:"Covid19__Footer--p"},"\nConfirmed cases aren\u2019t all cases. They only include people who tested\npositive. Testing rules and availability vary by country.\n")))};i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.e3d65707.chunk.js.map