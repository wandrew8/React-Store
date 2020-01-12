(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a(65),o=a(67),c=a(66),l=a(5),u=a(6),h=a(8),m=a(7),p=a(9);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}var v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{ref:this.myInput,type:"text",required:!0,placeholder:"Store Name",defaultValue:"The-".concat(f(["Cool","Fresh","Clean","Raw","Frosty","Frigid","Chilly","Chilled"]),"-Seafood-").concat(f(["Shop","Store","Market","Marketplace","Center","Location","Spot"]))}),r.a.createElement("button",{type:"submit"},"Visit Store")))}}]),t}(r.a.Component),g=a(12),b=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},y=a(18),E=a.n(y),O=a(22),j=a(17),S=a(15),w=a.n(S),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,description:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inventory"},r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh"),r.a.createElement("option",{value:"unavailable"},"Sold Out")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Description"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish")))}}]),t}(r.a.Component),F=a(20),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(g.a)({},a.props.fish,Object(F.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:d(this.props.fish.price)}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",null,"Fresh"),r.a.createElement("option",null,"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(n.Component),N=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory."),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With GitHub"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log In Anonymously"))},x=a(31),T=a.n(x),R=w.a.initializeApp({apiKey:"AIzaSyA4S-nM4__gMXYXs3eW3AsJTsQT_WLZHKo",authDomain:"react-store-andrew.firebaseapp.com",databaseURL:"https://react-store-andrew.firebaseio.com"}),A=T.a.createClass(R.database()),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(O.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.fetch(a.props.storeId,{context:Object(j.a)(Object(j.a)(a))});case 2:if(n=e.sent,console.log(n),n.owner){e.next=7;break}return e.next=7,A.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 7:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(w.a.auth["".concat(e,"AuthProvider")]);R.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(O.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Logging out!"),e.next=3,w.a.auth().signOut();case 3:a.setState({uid:null});case 4:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{className:"logout",onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you are not the owner!"),t):r.a.createElement("div",{className:"inventory"},t,r.a.createElement("h2",null,"Inventory"),r.a.createElement(k,{addFish:this.props.addFish}),Object.keys(this.props.fishes).map(function(t){return r.a.createElement(C,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(N,{authenticate:this.authenticate})}}]),t}(r.a.Component),L=a(16),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.fishes[e],n=a.props.order[e],s={classNames:"order",key:e,timeout:{enter:500,exit:500}},i=t&&"available"===t.status;return t?i?r.a.createElement(L.CSSTransition,s,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(L.TransitionGroup,{className:"count",component:"span"},r.a.createElement(L.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),n>1?"lbs":"lb"," ",t.name," ",d(n*t.price)),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7"))):r.a.createElement(L.CSSTransition,s,r.a.createElement("li",{key:e},"Sorry, ",t?t.name:"fish"," is no longer available")):null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(L.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total: ",r.a.createElement("strong",null,d(a))))}}]),t}(r.a.Component),D={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.addToOrder(a.props.index)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.name,n=e.price,s=e.desc,i="available"===e.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},d(n))),r.a.createElement("p",null,s),r.a.createElement("button",{onClick:this.handleClick,disabled:!i},i?"Add to Cart":"Sold Out"))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){console.log("Fish was added");var t=Object(g.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t}),console.log(a.state.fishes)},a.updateFish=function(e,t){var n=Object(g.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(g.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.removeFromOrder=function(e){var t=Object(g.a)({},a.state.order);delete t[e],a.setState({order:t}),console.log("This was removed to your order")},a.loadSampleFishes=function(){console.log("Samples loaded"),a.setState({fishes:D})},a.addToOrder=function(e){var t=Object(g.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t}),console.log("This was added to your order")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem(this.props.match.params.storeId);e&&this.setState({order:JSON.parse(e)}),this.ref=A.syncState("".concat(this.props.match.params.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentWillUnmount",value:function(){A.removeBinding(this.ref)}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(P,{key:t,details:e.state.fishes[t],addToOrder:e.addToOrder,index:t})}))),r.a.createElement(M,{fishes:this.state.fishes,removeFromOrder:this.removeFromOrder,order:this.state.order}),r.a.createElement(I,{storeId:this.props.match.params.storeId,deleteFish:this.deleteFish,updateFish:this.updateFish,fishes:this.state.fishes,addFish:this.addFish,loadSampleFishes:this.loadSampleFishes}))}}]),t}(r.a.Component),H=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found"))},J=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:v}),r.a.createElement(c.a,{path:"/store/:storeId",component:W}),r.a.createElement(c.a,{component:H})))};a(62);Object(s.render)(r.a.createElement(J,null),document.querySelector("#main"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3042039f.chunk.js.map