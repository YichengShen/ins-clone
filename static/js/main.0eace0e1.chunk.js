(this["webpackJsonpins-clone"]=this["webpackJsonpins-clone"]||[]).push([[0],[,,function(e,t,s){e.exports={postContainer:"Post_postContainer__2H-c_",postHeader:"Post_postHeader__SB-fC",avatarContainer:"Post_avatarContainer__3rGKb",postContent:"Post_postContent__3CGHk",postPhoto:"Post_postPhoto__3ttJA",indent:"Post_indent__2V9C2",likeCommentIcons:"Post_likeCommentIcons__1QIg2",iconItem:"Post_iconItem__2PxYT",likeCount:"Post_likeCount__2HW9H",commentRow:"Post_commentRow__1SVG-",commentor:"Post_commentor__3hWxV",time:"Post_time__O-7a6",addComment:"Post_addComment__aGSqH"}},,function(e,t,s){e.exports={profileContainer:"Profile_profileContainer__EA21Y",profileHeader:"Profile_profileHeader__2NZ-u",avatarContainer:"Profile_avatarContainer__2vtcu",personalInfo:"Profile_personalInfo__-JHIT",fullName:"Profile_fullName__WxqJ6",bio:"Profile_bio__3BO67",stats:"Profile_stats__ST0M5",statsNumber:"Profile_statsNumber__XzFBZ",statsText:"Profile_statsText__1U3NK",posts:"Profile_posts__rwx78"}},,function(e,t,s){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},,function(e,t,s){e.exports={navbar:"Navbar_navbar__31-FB"}},function(e,t,s){e.exports={topHeader:"Header_topHeader__AVvIi"}},function(e,t,s){e.exports={square:"PostThumbnail_square__OpQB1",content:"PostThumbnail_content__2t9tR",image:"PostThumbnail_image__2x5f-"}},,function(e,t,s){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},,function(e,t,s){e.exports={container:"Home_container__3-qjB"}},function(e,t,s){e.exports={userAvatar:"Avatar_userAvatar__1N_1m"}},function(e,t,s){e.exports={userId:"Name_userId__1p1xR"}},,,,,,,,,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),o=s(13),r=s.n(o),i=(s(25),s(5)),c=s(3),l=s(9),d=s.n(l),u=function(e){var t=e.startsWith("data:image")?"":"/ins-clone";return t+e},j=s(0);var m=function(){return Object(j.jsxs)("header",{className:d.a.topHeader,children:[Object(j.jsx)("div",{className:d.a.headerItem,children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:u("/assets/camera.svg"),alt:"Camera"})})}),Object(j.jsx)("div",{className:d.a.headerLogo,children:Object(j.jsx)("img",{src:u("/assets/logo.png"),alt:"Logo"})}),Object(j.jsx)("div",{className:d.a.headerItem,children:Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:u("/assets/message.svg"),alt:"Message"})})})]})},p=s(8),h=s.n(p);var b=function(e){function t(t){e.onNavChange&&e.onNavChange(t)}return Object(j.jsxs)("nav",{className:h.a.navbar,children:[Object(j.jsx)("div",{className:h.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("home")},children:Object(j.jsx)("img",{src:u("/assets/home.svg"),alt:"Home"})})}),Object(j.jsx)("div",{className:h.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("explore")},children:Object(j.jsx)("img",{src:u("/assets/explore.svg"),alt:"Explore"})})}),Object(j.jsx)("div",{className:h.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("newpost")},children:Object(j.jsx)("img",{src:u("/assets/newpost.svg"),alt:"New Post"})})}),Object(j.jsx)("div",{className:h.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("activity")},children:Object(j.jsx)("img",{src:u("/assets/like.svg"),alt:"activity"})})}),Object(j.jsx)("div",{className:h.a.navItem,children:Object(j.jsx)("button",{onClick:function(e){return t("profile")},children:Object(j.jsx)("img",{src:u("/assets/profile.svg"),alt:"Profile"})})})]})},f=s(14),v=s.n(f),O=function(e,t){return 1===e?t.slice(0,-1):t},g=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+O(s," years"):(s=Math.floor(t/2592e3))>=1?s+O(s," months"):(s=Math.floor(t/86400))>=1?s+O(s," days"):(s=Math.floor(t/3600))>=1?s+O(s," hours"):(s=Math.floor(t/60))>=1?s+O(s," minutes"):Math.floor(t)+O(s," seconds")},x=s(15),_=s.n(x);function I(e){return Object(j.jsx)("img",{className:_.a.userAvatar,src:u(e.photo),alt:"Avatar"})}var N=s(16),k=s.n(N);function C(e){return Object(j.jsx)("p",{className:k.a.userId,children:e.name})}var D=s(2),w=s.n(D);function P(e){return Object(j.jsxs)("div",{className:w.a.commentRow,children:[Object(j.jsxs)("span",{className:w.a.commentor,children:[e.user," "]}),Object(j.jsx)("span",{children:e.comments})]})}var y=function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),a=s[0],o=s[1],r=Object(n.useState)(!1),i=Object(c.a)(r,2),l=i[0],d=i[1];return Object(j.jsxs)("div",{className:w.a.postContainer,children:[Object(j.jsxs)("header",{className:w.a.postHeader,children:[Object(j.jsx)("div",{className:w.a.avatarContainer,children:Object(j.jsx)(I,{photo:e.user.photo})}),Object(j.jsx)(C,{name:e.user.id})]}),Object(j.jsxs)("article",{className:w.a.postContent,children:[Object(j.jsx)("img",{className:w.a.postPhoto,src:u(e.post.photo),alt:"Post"}),Object(j.jsxs)("div",{className:w.a.indent,children:[Object(j.jsxs)("div",{className:w.a.likeCommentIcons,children:[e.likes.self?Object(j.jsx)("img",{className:w.a.iconItem,src:u("/assets/unlike.svg"),alt:"Unlike",onClick:function(){e.onUnlike(e.post.id)}}):Object(j.jsx)("img",{className:w.a.iconItem,src:u("/assets/like.svg"),alt:"Like",onClick:function(){e.onLike(e.post.id)}}),Object(j.jsx)("button",{onClick:function(e){return d(!l)},children:Object(j.jsx)("img",{className:w.a.iconItem,src:u("/assets/comment.svg"),alt:"Comment Action"})})]}),Object(j.jsxs)("div",{className:w.a.likeCount,children:[e.likes.count," likes"]}),Object(j.jsx)(P,{user:e.post.userId,comments:e.post.desc}),Object(j.jsx)("div",{children:e.comments.map((function(e,t){return Object(j.jsx)(P,{user:e.userId,comments:e.text},t)}))}),Object(j.jsxs)("div",{className:w.a.time,children:[g(e.post.datetime).toUpperCase()," AGO"]})]})]}),l&&Object(j.jsxs)("form",{className:w.a.addComment,onSubmit:function(t){e.onComment(e.post.id,a),o(""),d(!1),t.preventDefault()},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:a,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Post"})]})]})};function T(e,t){return t.users.find((function(t){return t.id===e.userId}))}function S(e,t){return t.comments.filter((function(t){return t.postId===e.id}))}function H(e,t){var s=t.likes.filter((function(t){return t.postId===e.id}));return{self:s.some((function(e){return e.userId===t.currentUserId})),count:s.length}}var L=function(e){var t=e.store;return Object(j.jsx)("div",{className:v.a.container,children:t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(s){return Object(j.jsx)(y,{user:T(s,t),post:s,comments:S(s,t),likes:H(s,t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment},s.id)}))})};var A=function(){return Object(j.jsx)("div",{children:"Explore"})},U=s(6),Z=s.n(U),E=s(17),M=s(18),B=s(7),F=s(20),G=s(19),J=function(e){Object(F.a)(s,e);var t=Object(G.a)(s);function s(e){var n;return Object(E.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(B.a)(n)),n.handleDrop=n.handleDrop.bind(Object(B.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(B.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(B.a)(n)),n}return Object(M.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=a.a.Children.only(this.props.children);return a.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var R=function(e){var t=Object(n.useState)(!1),s=Object(c.a)(t,2),a=s[0],o=s[1],r=Object(n.useState)(""),i=Object(c.a)(r,2),l=i[0],d=i[1],u=Object(n.useState)(null),m=Object(c.a)(u,2),p=m[0],h=m[1],b=Object(n.useState)(""),f=Object(c.a)(b,2),v=f[0],O=f[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:Z.a.photo,children:[p?Object(j.jsx)("img",{src:p,alt:"New Post"}):Object(j.jsx)("div",{className:Z.a.message,children:"Drop your image"}),Object(j.jsx)(J,{onDragEnter:function(e){o(!0)},onDragLeave:function(e){o(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return void O("Upload failed. Image cannot be larger than 1MB.");if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){h(e.target.result)},s.readAsDataURL(t)}else O("Upload failed. The file is not an image.")}o(!1)}},children:Object(j.jsx)("div",{className:[Z.a.dropArea,a?Z.a.dragging:null].join(" ")})})]}),Object(j.jsx)("div",{className:Z.a.desc,children:Object(j.jsx)("textarea",{rows:"3",placeholder:"Describe...",onChange:function(e){d(e.target.value)}})}),""!==v&&Object(j.jsxs)("div",{className:Z.a.error,children:["Error: ",v]}),Object(j.jsxs)("div",{className:Z.a.actions,children:[Object(j.jsx)("button",{onClick:function(){e.onCancel()},children:"Cancel"}),Object(j.jsx)("button",{onClick:function(t){if(t.preventDefault(),""!==v)return alert(v),void O("");if(null!==p)try{e.onShare(p,l)}catch(s){alert(s.message)}},children:"Share"})]})]})};var q=function(){return Object(j.jsx)("div",{children:"Activity"})},W=s(10),z=s.n(W);var V=function(e){return Object(j.jsx)("div",{className:z.a.square,children:Object(j.jsx)("div",{className:z.a.content,children:Object(j.jsx)("img",{className:z.a.image,src:u(e.post.photo),alt:"Post Thumbnail"})})})},Q=s(4),X=s.n(Q);function Y(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:X.a.statsNumber,children:e.number}),Object(j.jsx)("div",{className:X.a.statsText,children:e.text})]})}var K=function(e){var t=e.store.currentUserId,s=e.store.users.find((function(e){return e.id===t})),n=function(e,t){return e.filter((function(e){return e.userId===t}))}(e.store.posts,t),a=function(e,t){return e.filter((function(e){return e.userId===t}))}(e.store.followers,t),o=function(e,t){return e.filter((function(e){return e.followerId===t}))}(e.store.followers,t);return Object(j.jsxs)("div",{className:X.a.profileContainer,children:[Object(j.jsxs)("header",{className:X.a.profileHeader,children:[Object(j.jsx)("div",{className:X.a.avatarContainer,children:Object(j.jsx)(I,{photo:s.photo})}),Object(j.jsx)(C,{name:s.id})]}),Object(j.jsxs)("section",{className:X.a.personalInfo,children:[Object(j.jsx)("div",{className:X.a.fullName,children:s.name}),Object(j.jsx)("div",{className:X.a.bio,children:s.bio})]}),Object(j.jsxs)("div",{className:X.a.stats,children:[Object(j.jsx)(Y,{number:n.length,text:"posts"}),Object(j.jsx)(Y,{number:a.length,text:"followers"}),Object(j.jsx)(Y,{number:o.length,text:"following"})]}),Object(j.jsx)("div",{className:X.a.posts,children:n.map((function(e){return Object(j.jsx)(V,{post:e},e.id)}))})]})},$={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var ee=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t},te=s(12),se=s.n(te);var ne=function(){var e=Object(n.useState)("home"),t=Object(c.a)(e,2),s=t[0],a=t[1],o=Object(n.useState)($),r=Object(c.a)(o,2),l=r[0],d=r[1];return Object(j.jsxs)("div",{className:se.a.container,children:[Object(j.jsx)(m,{}),Object(j.jsx)("main",{className:se.a.content,children:function(e){switch(e){case"home":return Object(j.jsx)(L,{store:l,onLike:u,onUnlike:p,onComment:h});case"explore":return Object(j.jsx)(A,{});case"newpost":return Object(j.jsx)(R,{store:l,onShare:f,onCancel:v});case"activity":return Object(j.jsx)(q,{});case"profile":return Object(j.jsx)(K,{store:l});default:return Object(j.jsx)(L,{})}}(s)}),Object(j.jsx)(b,{onNavChange:a})]});function u(e){var t={userId:l.currentUserId,postId:e,datetime:(new Date).toISOString()};d(Object(i.a)(Object(i.a)({},l),{},{likes:l.likes.concat(t)}))}function p(e){d(Object(i.a)(Object(i.a)({},l),{},{likes:l.likes.filter((function(t){return!(t.postId===e&&t.userId===l.currentUserId)}))}))}function h(e,t){var s={userId:l.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};d(Object(i.a)(Object(i.a)({},l),{},{comments:l.comments.concat(s)}))}function f(e,t){var s={id:ee("post"),userId:l.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};d(Object(i.a)(Object(i.a)({},l),{},{posts:l.posts.concat(s)})),a("home")}function v(){a("home")}},ae=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ne,{})}),document.getElementById("root")),ae()}],[[27,1,2]]]);
//# sourceMappingURL=main.0eace0e1.chunk.js.map