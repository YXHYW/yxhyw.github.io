"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5012],{49710:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(74848),o=r(28453);const i={},d=void 0,a={id:"database/Milvus/\u57fa\u7840/\u67b6\u6784",title:"\u67b6\u6784",description:"\u6982\u8ff0",source:"@site/docs/database/Milvus/\u57fa\u7840/\u67b6\u6784.md",sourceDirName:"database/Milvus/\u57fa\u7840",slug:"/database/Milvus/\u57fa\u7840/\u67b6\u6784",permalink:"/docs/database/Milvus/\u57fa\u7840/\u67b6\u6784",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dbSidebar",previous:{title:"\u5411\u91cf\u6570\u636e\u5e93",permalink:"/docs/database/Milvus/\u57fa\u7840/\u5411\u91cf\u6570\u636e\u5e93"}},s={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u63a5\u5165\u5c42(Access Layer)",id:"\u63a5\u5165\u5c42access-layer",level:2},{value:"\u534f\u8c03\u5668(Coordinate Service)",id:"\u534f\u8c03\u5668coordinate-service",level:2},{value:"root coordinator",id:"root-coordinator",level:3},{value:"query coordinator",id:"query-coordinator",level:3},{value:"data coordinator",id:"data-coordinator",level:3},{value:"\u5de5\u4f5c\u8282\u70b9(Worker nodes)",id:"\u5de5\u4f5c\u8282\u70b9worker-nodes",level:2},{value:"query node",id:"query-node",level:3},{value:"data node",id:"data-node",level:3},{value:"index node",id:"index-node",level:3},{value:"storage",id:"storage",level:2},{value:"meta storage",id:"meta-storage",level:3},{value:"object storage",id:"object-storage",level:3},{value:"log broker",id:"log-broker",level:3}];function c(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsx)(n.p,{children:"Milvus\u652f\u6301\u6570\u636e\u5206\u7247\u3001\u6570\u636e\u6301\u4e45\u5316\u3001\u77e2\u91cf\u548c\u6807\u91cf\u6570\u636e\u7684\u6df7\u5408\u68c0\u7d22\u7b49\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://milvus.io/static/a85f4600a1897497e9a946ea806d20d9/c0f46/milvus_architecture.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"milvus\u57fa\u4e8e\u6570\u636e\u5e73\u9762\u548c\u63a7\u5236\u5e73\u9762\u76f8\u5206\u79bb\u7684\u539f\u5219\uff0c\u67b6\u6784\u4e3b\u8981\u5206\u56db\u5c42\uff1a\u63a5\u5165\u5c42\uff0c\u534f\u8c03\u5c42\u3001\u8ba1\u7b97\u5c42\u548c\u5b58\u50a8\u5c42\u3002\u5728\u6269\u5c55\u548c\u6570\u636e\u6062\u590d\u65f6\uff0c\u8fd9\u4e9b\u5c42\u662f\u76f8\u4e92\u72ec\u7acb\u7684\u3002"}),"\n",(0,t.jsx)(n.mermaid,{value:"mindmap\n\tArchitecture((Architecture))\n\t\tAccess Layer\n\t\t\tProxy\n\t\t\tReduce\n\t\tCoordinate Service\n\t\t\tRoot Coord\n\t\t\tData Coord\n\t\t\tQuery Coord\n\t\tWorker Nodes\n\t\t\tdata node\n\t\t\tquery node\n\t\t\tindex node\n\t\tStorage"}),"\n",(0,t.jsx)(n.h2,{id:"\u63a5\u5165\u5c42access-layer",children:"\u63a5\u5165\u5c42(Access Layer)"}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u5165\u5c42\u7531\u4e00\u7ec4\u65e0\u72b6\u6001\u4ee3\u7406\u670d\u52a1\u7ec4\u6210\uff0c\u662f\u7cfb\u7edf\u524d\u7aef\u548c\u7528\u6237\u7684\u7aef\u70b9\u3002\u5b83\u9a8c\u8bc1\u5ba2\u6237\u7aef\u8bf7\u6c42\u5e76\u51cf\u5c11\u8fd4\u56de\u7ed3\u679c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proxy\u672c\u8eab\u662f\u65e0\u72b6\u6001\u7684\uff0c\u4e00\u822c\u4f7f\u7528nginx\u3001ingress\u7b49\u8d1f\u8f7d\u5747\u8861\u7ec4\u4ef6\u63d0\u4f9b\u7edf\u4e00\u7684\u670d\u52a1\u5730\u5740"}),"\n",(0,t.jsx)(n.li,{children:"\u7531\u4e8eMilvus\u91c7\u7528MPP\u67b6\u6784\uff0c\u4ee3\u7406\u4f1a\u805a\u5408\u5904\u7406\u4e2d\u95f4\u7ed3\u679c\uff0c\u7136\u540e\u5c06\u6700\u7ec8\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u534f\u8c03\u5668coordinate-service",children:"\u534f\u8c03\u5668(Coordinate Service)"}),"\n",(0,t.jsx)(n.p,{children:"\u534f\u8c03\u5c42\u5c06\u4efb\u52a1\u5206\u914d\u7ed9\u5de5\u4f5c\u8282\u70b9\u5e76\u5145\u5f53\u7cfb\u7edf\u7684\u5927\u8111\u3002\u4e3b\u8981\u4efb\u52a1\u5305\u62ec\uff1a\u96c6\u7fa4\u62d3\u6251\u7ba1\u7406\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u751f\u6210\u65f6\u95f4\u6233\u3001\u6570\u636e\u58f0\u660e\u3001\u6570\u636e\u7ba1\u7406\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u534f\u8c03\u5668\u5206\u4e09\u79cd\uff1aroot coord\u3001data coord\u3001query coord"}),"\n",(0,t.jsx)(n.h3,{id:"root-coordinator",children:"root coordinator"}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u534f\u8c03\u5668\u5904\u7406DDL\u548cDCL\u8bf7\u6c42\uff0c\u6bd4\u5982\u521b\u5efa\u548c\u5220\u9664Collection\u3001Partition\u3001index\uff0c\u7ba1\u7406\u65f6\u95f4\u6233\u7b49"}),"\n",(0,t.jsx)(n.h3,{id:"query-coordinator",children:"query coordinator"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u8be2\u534f\u8c03\u5668\u8d1f\u8d23\u67e5\u8be2\u8282\u70b9\u7684\u62d3\u6251\u548c\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,t.jsx)(n.h3,{id:"data-coordinator",children:"data coordinator"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u534f\u8c03\u5668\u8d1f\u8d23\u7ba1\u7406\u6570\u636e\u8282\u70b9\u7684\u62d3\u6251\u3001\u7ef4\u62a4\u5143\u6570\u636e\uff0c\u5e76\u89e6\u53d1\u5237\u65b0\u3001\u538b\u7f29\u7b49\u540e\u53f0\u6570\u636e\u64cd\u4f5c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5de5\u4f5c\u8282\u70b9worker-nodes",children:"\u5de5\u4f5c\u8282\u70b9(Worker nodes)"}),"\n",(0,t.jsx)(n.p,{children:"\u5de5\u4f5c\u8282\u70b9\u9075\u5faa\u534f\u8c03\u5668\u7684\u6307\u4ee4\u5e76\u6267\u884cDML\u547d\u4ee4\u3002\u7531\u4e8e\u5b58\u7b97\u5206\u79bb\uff0c\u5de5\u4f5c\u8282\u70b9\u662f\u65e0\u72b6\u6001\u7684\uff0c\u90e8\u7f72\u5728k8s\u4e0a\u53ef\u4ee5\u76f4\u63a5\u6c34\u5e73\u6269\u5c55\u3002\u5de5\u4f5c\u8282\u70b9\u4e5f\u5206\u4e09\u7c7b\uff1a\u67e5\u8be2\u8282\u70b9\u3001\u6570\u636e\u8282\u70b9\u548c\u7d22\u5f15\u8282\u70b9"}),"\n",(0,t.jsx)(n.h3,{id:"query-node",children:"query node"}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u8be2\u8282\u70b9\u68c0\u7d22\u589e\u91cf\u65e5\u5fd7\u6570\u636e\uff0c\u4ece\u5bf9\u8c61\u5b58\u50a8\u4e2d\u52a0\u8f7d\u5386\u53f2\u6570\u636e\uff0c\u5728\u5411\u91cf\u548c\u6807\u91cf\u6570\u636e\u4e4b\u95f4\u6df7\u5408\u68c0\u7d22\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"data-node",children:"data node"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u8282\u70b9\u901a\u8fc7\u8ba2\u9605log broker\u83b7\u53d6\u589e\u91cf\u65e5\u5fd7\u6570\u636e\uff0c\u5e76\u5c06\u65e5\u5fd7\u5feb\u7167\u5b58\u50a8\u5230\u5bf9\u8c61\u5b58\u50a8\u4e2d\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"index-node",children:"index node"}),"\n",(0,t.jsx)(n.p,{children:"\u7d22\u5f15\u8282\u70b9\u7528\u4e8e\u6784\u5efa\u6570\u636e\u7d22\u5f15\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"storage",children:"storage"}),"\n",(0,t.jsx)(n.p,{children:"storage\u8d1f\u8d23\u6570\u636e\u6301\u4e45\u5316\u3002\u4e5f\u5305\u62ec\u4e09\u79cd\u7ec4\u4ef6\uff1a\u5143\u5b58\u50a8\u3001\u5bf9\u8c61\u5b58\u50a8\u3001\u65e5\u5fd7\u4ee3\u7406"}),"\n",(0,t.jsx)(n.h3,{id:"meta-storage",children:"meta storage"}),"\n",(0,t.jsx)(n.p,{children:"\u5143\u5b58\u50a8\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\uff0c\u5305\u62ec\u8282\u70b9\u72b6\u6001\u3001\u6d88\u606f\u6d88\u8d39\u68c0\u67e5\u70b9\u3001collection schema\u3002milvus\u4f7f\u7528etcd\u8fdb\u884c\u5143\u5b58\u50a8\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"object-storage",children:"object storage"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u8c61\u5b58\u50a8\u5b58\u50a8\u4e86\u65e5\u5fd7\u7684\u5feb\u7167\u6587\u4ef6\u3001\u6807\u91cf\u548c\u5411\u91cf\u6570\u636e\u7684\u7d22\u5f15\u6587\u4ef6\u4ee5\u53ca\u4e2d\u95f4\u67e5\u8be2\u7ed3\u679c\u3002milvus\u4f7f\u7528minio\u505a\u5bf9\u8c61\u5b58\u50a8\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"log-broker",children:"log broker"}),"\n",(0,t.jsx)(n.p,{children:"\u65e5\u5fd7\u4ee3\u7406\u662f\u4e00\u4e2a\u53d1\u5e03-\u8ba2\u9605\u7cfb\u7edf\uff0c\u8d1f\u8d23\u6570\u636e\u6301\u4e45\u5316\u3001\u6267\u884c\u5f02\u6b65\u67e5\u8be2\u3001\u4e8b\u4ef6\u901a\u77e5\u4ee5\u53ca\u67e5\u8be2\u7ed3\u679c\u7684\u8fd4\u56de\u3002milvus\u652f\u6301Pulsar\u3001kafka\u3001nats\u7b49\u505a\u65e5\u5fd7\u4ee3\u7406\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var t=r(96540);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);