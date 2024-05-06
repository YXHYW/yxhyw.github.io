"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3576],{39890:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var o=s(74848),r=s(28453);const i={sidebar_position:2,description:"\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f"},c=void 0,t={id:"database/PostgreSQL/\u5907\u4efd\u4e0e\u6062\u590d/\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f",title:"\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f",description:"\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f",source:"@site/docs/database/PostgreSQL/\u5907\u4efd\u4e0e\u6062\u590d/\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f.md",sourceDirName:"database/PostgreSQL/\u5907\u4efd\u4e0e\u6062\u590d",slug:"/database/PostgreSQL/\u5907\u4efd\u4e0e\u6062\u590d/\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f",permalink:"/docs/database/PostgreSQL/\u5907\u4efd\u4e0e\u6062\u590d/\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u903b\u8f91\u5907\u4efd\u4e0e\u8fd8\u539f"},sidebar:"dbSidebar",previous:{title:"\u5f52\u6863\u6a21\u5f0f",permalink:"/docs/database/PostgreSQL/\u5907\u4efd\u4e0e\u6062\u590d/\u5f52\u6863\u6a21\u5f0f"},next:{title:"\u76d1\u63a7\u4e0e\u4f18\u5316\u6570\u636e\u5e93",permalink:"/docs/category/\u76d1\u63a7\u4e0e\u4f18\u5316\u6570\u636e\u5e93"}},a={},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u903b\u8f91\u5907\u4efd",id:"\u903b\u8f91\u5907\u4efd",level:2},{value:"\u903b\u8f91\u8fd8\u539f",id:"\u903b\u8f91\u8fd8\u539f",level:2},{value:"\u5907\u4efd\u811a\u672c",id:"\u5907\u4efd\u811a\u672c",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,o.jsxs)(e.p,{children:["Postgres\u63d0\u4f9b",(0,o.jsx)(e.code,{children:"pg_dump"}),"\u548c",(0,o.jsx)(e.code,{children:"pg_dumpall"}),"\u7528\u4e8e\u6570\u636e\u5e93\u903b\u8f91\u5907\u4efd\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"pg_dumpall"}),"\uff1a\u5c06\u4e00\u4e2aPostgreSQL\u6570\u636e\u5e93\u96c6\u7fa4\u5168\u90e8\u8f6c\u50a8\u5230\u4e00\u4e2a\u811a\u672c\u6587\u4ef6\u4e2d"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"pg_dump"}),"\uff1a\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u6570\u636e\u5e93\u6216\u90e8\u5206\u8868\u8fdb\u884c\u5907\u4efd\uff0c\u751f\u6210\u7684\u6587\u4ef6\u53ef\u4ee5\u662f\u4e00\u4e2aSQL\u811a\u672c\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5f52\u6863\u6587\u4ef6\u3002SQL\u6587\u4ef6\u5141\u8bb8\u81ea\u884c\u4fee\u6539\uff0c\u4fee\u6539\u540e\u53ef\u4ee5\u8f6c\u5230\u5176\u5b83\u7c7b\u578b\u7684\u6570\u636e\u5e93\uff08postgres\u6709\u4e0d\u5c11\u7279\u6709\u7684\u4e1c\u897f\uff0c\u5b9e\u9645\u4e0a\u8fc1\u79fb\u53ef\u80fd\u4f1a\u6709\u95ee\u9898\uff09\u3002\u5f52\u6863\u6587\u4ef6\u53ea\u80fd\u548c",(0,o.jsx)(e.code,{children:"pg_restore"}),"\u914d\u5408\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"\u903b\u8f91\u5907\u4efd",children:"\u903b\u8f91\u5907\u4efd"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"# \u67e5\u770b\u5e2e\u52a9\npg_dump --help\n\n# \u5907\u4efddbtest\u5e93\u5230\u6307\u5b9a\u6587\u4ef6\npg_dump -h 127.0.0.1 -p 5432 -U postgres dbtest -f /var/lib/postgresql/backup/dbtest.sql\n\n# \u5982\u679c\u5c31\u5728\u672c\u5730\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u7528dba\u8d26\u6237\u5907\u4efd\npg_dump dbtest -f /var/lib/postgresql/backup/dbtest.sql\n\n# \u5bfc\u51fa\u4e3a\u81ea\u5b9a\u4e49\u683c\u5f0f, postgres\u5efa\u8bae\u7684\u5907\u4efd\u65b9\u5f0f\npg_dump -Fc -h 192.168.0.10 -Uzhangsan zhangsan -f zhangsan.dump \n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u903b\u8f91\u8fd8\u539f",children:"\u903b\u8f91\u8fd8\u539f"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"# \u4f7f\u7528dump\u6587\u4ef6\u8fd8\u539f\u5230zhangsan2\u6570\u636e\u5e93\uff0c\u9700\u8981\u5148\u521b\u5efa\npg_restore -d zhangsan2 zhangsan.dump\n"})}),"\n",(0,o.jsx)(e.h2,{id:"\u5907\u4efd\u811a\u672c",children:"\u5907\u4efd\u811a\u672c"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"postgresql\u4f7f\u7528docker\u5b89\u88c5\u3002\u5bbf\u4e3b\u673a\u8c03\u7528\u5bb9\u5668\u5185\u90e8\u7684\u5907\u4efd\u811a\u672c\uff0c\u7136\u540e\u4ece\u5bb9\u5668\u4e2d\u62f7\u8d1d\u51fa\u6765\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u5bb9\u5668\u5185\u7684\u5907\u4efd\u811a\u672c\uff1a",(0,o.jsx)(e.code,{children:"/root/backup_in_docker.sh"})]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"#!/bin/bash\n# description: \u914d\u5728\u5bb9\u5668\u91cc\u7684\u5907\u4efd\u811a\u672c\uff0c\u9700\u8981\u653e\u5230\u5bb9\u5668\u5185\u7684/root\u8def\u5f84\n\nset -u\n\nfunction premkdir() {\n    # \u63d0\u524d\u521b\u5efa\u76ee\u5f55\n    mkdir -p /root/backup\n}\n\nfunction cleandir() {\n    # \u6e05\u7406\u5907\u4efd\u76ee\u5f55\n    cd /root/backup\n    rm -f ./*\n}\n\nfunction backup() {\n    # \u6267\u884c\u5907\u4efd\n    pg_dump -U postgres -Fc wikijs -f /root/backup/wikijs.dump\n}\n\nfunction main() {\n    # \u4e3b\u51fd\u6570\n    premkdir\n    cleandir\n    backup\n}\n\nmain\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u5bbf\u4e3b\u673a\u7684\u5907\u4efd\u811a\u672c\uff1a",(0,o.jsx)(e.code,{children:"/home/apps/postgresql/backup_in_host.sh"})]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:'#!/bin/bash\n# description: \u8c03\u7528\u5bb9\u5668\u5185\u7684\u5907\u4efd\u811a\u672c -> \u5c06\u5907\u4efd\u6587\u4ef6\u62f7\u8d1d\u5230\u5bbf\u4e3b\u673a -> \u5f52\u6863 -> \u5220\u9664\u5386\u53f2\u6587\u4ef6\n\nfunction log_info() {\n    # \u65e5\u5fd7\u51fd\u6570\n    logfile="/home/apps/postgresql/backup.log"\n    logtime=$(date "+%Y-%m-%d %H:%M:%S")\n    echo "${logtime} | $@"\n    echo "${logtime} | $@" >> ${logfile}\n}\n\nfunction exe_backupscript_docker() {\n    # \u8c03\u7528\u5bb9\u5668\u5185\u7684\u5907\u4efd\u811a\u672c\n    log_info "\u8c03\u7528\u5bb9\u5668\u5185\u5907\u4efd\u811a\u672c"\n    /usr/local/bin/docker exec -it postgresql bash /root/backup_in_docker.sh\n    # \u7b4960\u79d2\n    sleep 60\n}\n\nfunction copy_to_host() {\n    # \u5c06\u5907\u4efd\u6587\u4ef6\u4ecedocker\u5bb9\u5668\u5185\u62f7\u8d1d\u5230\u5bbf\u4e3b\u673a\n    /usr/local/bin/docker cp postgresql:/root/backup /home/apps/postgresql\n    # cd /home/apps/postgresql\n}\n\nfunction cleanfile() {\n    # \u5220\u966415\u5929\u4e4b\u524d\u7684\u5907\u4efd\u6587\u4ef6\n    find /home/apps/postgresql/archived_backupfiles/* -ctime +15 -type f -exec rm -f {} \\;\n\n    # \u5220\u9664backup\u76ee\u5f55\n    cd /home/apps/postgresql\n    if [[ -d "./backup" ]]; then\n        rm -rf ./backup\n    fi\n}\n\nfunction arrange() {\n    # \u6574\u7406\u5907\u4efd\u6587\u4ef6\n    cd /home/apps/postgresql\n    if [[ ! -d "./backup" ]]; then\n        log_info "\u5907\u4efd\u76ee\u5f55\u4e0d\u5b58\u5728"\n        exit 1\n    fi\n\n    # \u5c06\u538b\u7f29\u540e\u7684\u76ee\u5f55\u8f6c\u79fb\u5230\u5f52\u6863\u76ee\u5f55\n    archive_dir="/home/apps/postgresql/archived_backupfiles"\n    if [[ ! -d ${archive_dir} ]]; then\n        mkdir -p /home/apps/postgresql/archived_backupfiles\n    fi\n    baktime=$(date "+%Y%m%d-%H%M%S")\n    bakname="wikijs_${baktime}.tar.gz"\n    tar zcf ${bakname} ./backup\n\n    mv ${bakname} ${archive_dir}\n}\n\nfunction main() {\n    exe_backupscript_docker\n    copy_to_host\n    arrange\n    cleanfile\n}\n\nmain\n'})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"crontab\u914d\u7f6e"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"0 3 * * * /home/apps/postgresql/backup_in_host.sh\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var o=s(96540);const r={},i=o.createContext(r);function c(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);