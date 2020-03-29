(this["webpackJsonpcovid19-statistics"]=this["webpackJsonpcovid19-statistics"]||[]).push([[0],{188:function(e,t,a){e.exports=a(392)},193:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(57),i=a.n(c),o=(a(193),a(194),a(13)),s=a.n(o),l=a(26),u=a(39),d=a(5),m=a.n(d),h=(a(196),a(417)),f=a(415),p=a(414),v=a(62),E=a(411),C=a(412),_=a(413),y=function(e){var t=e.title,a=e.dateString,n=e.statistic,c=new Date(Date.parse(a)).toLocaleDateString("nl-NL",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),i="Total Confirmed"===t?r.a.createElement(E.a,null):"Total Deaths"===t?r.a.createElement(C.a,null):"Total Recovered"===t?r.a.createElement(_.a,null):"",o=m()("StatisticCard__Avatar",{"StatisticCard__Avatar--confirmed":"Total Confirmed"===t,"StatisticCard__Avatar--deaths":"Total Deaths"===t,"StatisticCard__Avatar--recovered":"Total Recovered"===t}),s=m()("StatisticCard__Content",{"StatisticCard__Content--confirmed":"Total Confirmed"===t,"StatisticCard__Content--deaths":"Total Deaths"===t,"StatisticCard__Content--recovered":"Total Recovered"===t});return r.a.createElement(h.a,{className:"StatisticCard",variant:"outlined"},r.a.createElement(p.a,{classes:{avatar:o},avatar:i,title:t,subheader:"Updated at: ".concat(c)}),r.a.createElement(f.a,{classes:{root:s}},r.a.createElement(v.a,{variant:"h3",component:"p"},n)))},b=a(416),S=function(){return r.a.createElement("div",null,r.a.createElement(b.a,{size:100,color:"secondary",thickness:3.5,variant:"indeterminate"}))},D=a(85),g=a.n(D),T=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://api.covid19api.com","/summary")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://api.covid19api.com","/total/country/").concat(t,"/status/confirmed")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(u.a)(i,2),d=o[0],m=o[1],h=0,f=0,p=0;return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1),m(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d&&!a&&function(){e.apply(this,arguments)}()})),a&&a.Countries.forEach((function(e){h+=e.TotalConfirmed,f+=e.TotalDeaths,p+=e.TotalRecovered})),r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(S,null),!d&&a&&r.a.createElement("div",{className:"Covid19__GlobalStatistics"},r.a.createElement(y,{title:"Total Confirmed",dateString:a.Date,statistic:h}),r.a.createElement(y,{title:"Total Deaths",dateString:a.Date,statistic:f}),r.a.createElement(y,{title:"Total Recovered",dateString:a.Date,statistic:p})))},w=a(23),j=(a(391),function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(u.a)(i,2),d=o[0],m=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,N("netherlands");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d&&!a&&function(){e.apply(this,arguments)}()})),Object(n.useEffect)((function(){a&&a&&(a.forEach((function(e){var t=new Date(Date.parse(e.Date)).toLocaleDateString("nl-NL",{year:"numeric",month:"numeric",day:"numeric"});e.Date=t})),m(!1))}),[a,d]),r.a.createElement(r.a.Fragment,null,d&&r.a.createElement(S,null),a&&r.a.createElement("div",{className:"CountryLineChart"},r.a.createElement(w.d,{width:600,height:300,data:a},r.a.createElement(w.a,{strokeDasharray:"1 1"}),r.a.createElement(w.f,{dataKey:"Date"}),r.a.createElement(w.g,null),r.a.createElement(w.e,null),r.a.createElement(w.b,{verticalAlign:"top",height:36}),r.a.createElement(w.c,{type:"monotone",dataKey:"Cases",stroke:"#8884d8",activeDot:{r:8}})),r.a.createElement("span",{className:"CountryLineChart__Country--label"},"The Netherlands")))}),k=function(){return r.a.createElement("div",{className:"Covid19"},r.a.createElement("header",{className:"Covid19__Header"},"COVID-19 Statistics"),r.a.createElement("div",{className:"Covid19__GlobalStatistics"},r.a.createElement(O,null)),r.a.createElement("div",{className:"Covid19__CountryLineChart"},r.a.createElement(j,null)),r.a.createElement("footer",{className:"Covid19__Footer"},r.a.createElement("h3",{className:"Covid19__Footer--h3"},"About this data"),r.a.createElement("h4",{className:"Covid19__Footer--h4"},"It changes rapidly"),r.a.createElement("p",{className:"Covid19__Footer--p"},"\nThis data changes rapidly, so what\u2019s shown may be out of date.\nInformation about reported cases is also available on the World Health\nOrganization site."),r.a.createElement("h4",{className:"Covid19__Footer--h4"},"It doesn\u2019t include all cases"),r.a.createElement("p",{className:"Covid19__Footer--p"},"\nConfirmed cases aren\u2019t all cases. They only include people who tested\npositive. Testing rules and availability vary by country.\n")))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.c3c975df.chunk.js.map