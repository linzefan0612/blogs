(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{275:function(t,a,e){"use strict";e.r(a);var s=e(28),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("好用的手册 http://gitbook.liuhui998.com/index.html")])]),t._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("ol",[e("li",[t._v("初始开发 git 操作流程")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("克隆最新主分支项目代码 git clone 地址\n创建本地分支 git branch 分支名\n查看本地分支 git branch\n查看远程分支 git branch -a\n切换分支  git checkout 分支名 (一般修改未提交则无法切换，大小写问题经常会有，可强制切换  git checkout 分支名 -f  非必须慎用)\n将本地分支推送到远程分支 git push <远程仓库> <本地分支>:<远程分支>\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("git fetch\n将某个远程主机的更新，全部/分支 取回本地（此时之更新了 Repository）它取回的代码对你本地的开发代码没有影响，如需彻底更新需合并或使用 git pull")]),t._v(" "),e("li",[t._v("git pull\n拉取远程主机某分支的更新，再与本地的指定分支合并（相当与 fetch 加上了合并分支功能的操作）")]),t._v(" "),e("li",[t._v("git push\n将本地分支的更新，推送到远程主机，其命令格式与 git pull 相似")]),t._v(" "),e("li",[t._v("分支操作")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("使用 Git 下载指定分支命令为：git clone -b 分支名仓库地址\n\n拉取远程新分支 git checkout -b serverfix origin/serverfix\n\n合并本地分支 git merge hotfix：(将 hotfix 分支合并到当前分支)\n\n合并远程分支 git merge origin/serverfix\n\n删除本地分支 git branch -d hotfix：(删除本地 hotfix 分支)\n\n删除远程分支 git push origin --delete serverfix\n\n上传新命名的本地分支：git push origin newName;\n\n创建新分支：git branch branchName：(创建名为 branchName 的本地分支)\n\n切换到新分支：git checkout branchName：(切换到 branchName 分支)\n\n创建并切换分支：git checkout -b branchName：(相当于以上两条命令的合并)\n\n查看本地分支：git branch\n\n查看远程仓库所有分支：git branch -a\n\n本地分支重命名：git branch -m oldName newName\n\n重命名远程分支对应的本地分支：git branch -m oldName newName\n\n把修改后的本地分支与远程分支关联：git branch --set-upstream-to origin/newName\n")])])]),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h3",{attrs:{id:"git-add-提交到暂存区，出错怎么办"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-add-提交到暂存区，出错怎么办"}},[t._v("#")]),t._v(" git add 提交到暂存区，出错怎么办")]),t._v(" "),e("blockquote",[e("p",[t._v('一般代码提交流程为：工作区 -> git status 查看状态 -> git add . 将所有修改加入暂存区-> git commit -m "提交描述" 将代码提交到 本地仓库 -> git push 将本地仓库代码更新到 远程仓库')])]),t._v(" "),e("h4",{attrs:{id:"场景-1："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景-1："}},[t._v("#")]),t._v(" 场景 1：")]),t._v(" "),e("ul",[e("li",[t._v("当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 git checkout -- file。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 丢弃工作区的修改\ngit checkout -- <文件名>\n")])])]),e("h4",{attrs:{id:"场景-2："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景-2："}},[t._v("#")]),t._v(" 场景 2：")]),t._v(" "),e("ul",[e("li",[t._v("当你不但改乱了工作区某个文件的内容，还添加到了暂存时，想丢弃修改，分两步，第一步用命令 git reset HEAD file，就回到了场景 1，第二步按场景 1 操作。")])]),t._v(" "),e("h3",{attrs:{id:"git-commit-提交到本地仓库，出错怎么办？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-提交到本地仓库，出错怎么办？"}},[t._v("#")]),t._v(" git commit 提交到本地仓库，出错怎么办？")]),t._v(" "),e("h4",{attrs:{id:"提交信息出错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交信息出错"}},[t._v("#")]),t._v(" 提交信息出错")]),t._v(" "),e("ul",[e("li",[t._v("解决：git commit --amend -m“新提交消息”")])]),t._v(" "),e("h4",{attrs:{id:"漏提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏提交"}},[t._v("#")]),t._v(" 漏提交")]),t._v(" "),e("ul",[e("li",[t._v("commit 时，遗漏提交部分更新，有两种解决方案")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("方案一：再次 commit\ngit commit -m“提交消息”\n此时，git 上会出现两次 commit\n\n方案二：遗漏文件提交到之前 commit 上\ngit add missed-file  // missed-file 为遗漏提交文件\ngit commit --amend --no-edit  // no-edit 表示提交消息不会更改，在 git 上仅为一次提交\n")])])]),e("h3",{attrs:{id:"提交错误文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交错误文件"}},[t._v("#")]),t._v(" 提交错误文件")]),t._v(" "),e("blockquote",[e("p",[t._v("回退到上一个 commit 版本，再 commit")])]),t._v(" "),e("h4",{attrs:{id:"git-reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),e("blockquote",[e("p",[t._v("删除指定的 commit")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 修改版本库，修改暂存区，修改工作区\ngit reset HEAD <文件名> // 把暂存区的修改撤销掉（unstage），重新放回工作区。\n// git版本回退，回退到特定的commit_id版本，可以通过git log查看提交历史，以便确定要回退到哪个版本(commit 之后的即为ID);\ngit reset --hard commit_id\n//将版本库回退1个版本，不仅仅是将本地版本库的头指针全部重置到指定版本，也会重置暂存区，并且会将工作区代码也回退到这个版本\ngit reset --hard HEAD~1\n\n// 修改版本库，保留暂存区，保留工作区\n// 将版本库软回退1个版本，软回退表示将本地版本库的头指针全部重置到指定版本，且将这次提交之后的所有变更都移动到暂存区。\ngit reset --soft HEAD~1\n")])])]),e("h4",{attrs:{id:"git-revert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[t._v("#")]),t._v(" git revert")]),t._v(" "),e("blockquote",[e("p",[t._v("撤销 某次操作，此次操作之前和之后的 commit 和 history 都会保留，并且把这次撤销，作为一次最新的提交")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 撤销前一次 commit\ngit revert HEAD\n// 撤销前前一次 commit\ngit revert HEAD^\n// (比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。\ngit revert commit\n")])])]),e("h4",{attrs:{id:"git-revert-和-git-reset-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-和-git-reset-的区别"}},[t._v("#")]),t._v(" git revert 和 git reset 的区别")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("**git revert**是用一次新的commit来回滚之前的commit，**git reset**是直接删除指定的commit。\n\n在回滚这一操作上看，效果差不多。但是在日后继续merge以前的老版本时有区别。\n因为**git revert**是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现，但是**git reset**是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入。\n\n**git reset** 是把HEAD向后移动了一下，而**git revert**是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容。\n")])])]),e("h2",{attrs:{id:"ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[t._v("#")]),t._v(" SSH")]),t._v(" "),e("h3",{attrs:{id:"查看是否生成了-ssh-公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看是否生成了-ssh-公钥"}},[t._v("#")]),t._v(" 查看是否生成了 SSH 公钥")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cd ~/.ssh\n$ ls\nid_rsa      id_rsa.pub      known_hosts\n")])])]),e("h3",{attrs:{id:"设置个人信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置个人信息"}},[t._v("#")]),t._v(" 设置个人信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git config --list // 查看是否设置了user.name与user.email，没有的话，去设置\n// 设置全局的user.name与user.email\ngit config --global user.name "XX"\ngit config --global user.email "XX"\n')])])]),e("h3",{attrs:{id:"生成ssh-keygen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-keygen"}},[t._v("#")]),t._v(" 生成ssh-keygen")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ssh-keygen 或 `ssh-keygen -t rsa -C "email 或 github 个人账号"`\n')])])]),e("h3",{attrs:{id:"查询公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询公钥"}},[t._v("#")]),t._v(" 查询公钥")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cat ~/.ssh/id_rsa.pub\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);