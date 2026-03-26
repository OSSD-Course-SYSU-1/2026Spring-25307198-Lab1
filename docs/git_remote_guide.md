# Git 远程仓库操作指南（基于幻灯片）

以下为常用远程仓库命令、作用与示例。照着步骤做即可把本地仓库与远程仓库关联并推送。

1) 查看与管理远程仓库
- git remote -v
  - 查看所有远程仓库（只显示名称和 URL）。

- git remote show [remote]
  - 显示某个远程仓库的详细信息（分支、fetch/push 配置等）。

- git remote add [name] [url]
  - 添加一个新的远程仓库并命名（例如：origin）。
  - 示例：git remote add origin git@github.com:yourname/yourrepo.git
  - 或（HTTPS）：git remote add origin https://github.com/yourname/yourrepo.git

- git remote rename [old] [new]
  - 修改远程仓库的名称。

- git remote rm [remote-name]
  - 删除远程仓库。

2) 获取与合并远程变更
- git fetch [remote]
  - 获取远程仓库的所有变动到本地，但不会自动合并。需要手动合并（例如用 git merge 或 git rebase）。
  - 用处：只想更新远端引用但不改变当前工作分支时使用。

- git pull [remote] [branch]
  - 获取远程变更并自动合并到当前分支（等价于 git fetch + git merge）。
  - 注意：如果你想更可控的流程，建议先 git fetch 再手动合并或 rebase。

- git pull --rebase
  - 使用 rebase 的方式把远程变更整合到本地（保持提交历史直线化）。

3) 推送到远程
- git push
  - 将当前分支推送到默认远程的同名分支。

- git push [remote] [branch]
  - 推送指定分支到指定远程。

- git push -u [remote] [branch]
  - -u 参数会建立本地分支与远程分支的上游关系（tracking）。
  - 第一次使用时加 -u 以便以后直接使用 git push 或 git pull 即可与该远程分支交互。
  - 示例：git push -u origin master

- git push --force / -f
  - 强行推送（会覆盖远程变更），风险很大，谨慎使用。

- git push [remote] --all
  - 推送所有本地分支到远程。

4) 推荐工作流程（示例）
- 初次关联并推送（SSH）：
  1. 在远端创建空仓库（例如 GitHub 上创建仓库），获取仓库 URL（ssh 或 https）。
  2. 本地：git remote add origin git@github.com:yourname/yourrepo.git
  3. git push -u origin master

- 初次关联并推送（HTTPS）：
  1. git remote add origin https://github.com/yourname/yourrepo.git
  2. git push -u origin master
  3. 若需要凭证，按终端提示输入用户名/密码或使用个人访问令牌（PAT）。

- 更新流程：
  1. git fetch origin
  2. git checkout master
  3. git merge origin/master   （或 git rebase origin/master）
  4. 解决冲突 → git add . → git commit → git push

5) 关于 SSH Key（简要说明）
- 如果使用 SSH URL（git@github.com:...），请确保本机有 SSH key，并且把公钥添加到远端账户（GitHub/GitLab/企业 Git）。
- 生成 SSH key 的命令示例（在 PowerShell/CMD 中运行）：
  - ssh-keygen -t rsa -b 4096 -C "yanyibin <2125603667@qq.com>" -f %USERPROFILE%\\.ssh\\id_rsa_openclaw
  - 然后把生成的 id_rsa_openclaw.pub 内容复制并粘到远端的 "SSH keys" 设置页面。

6) 常见提示
- 想要更可控的同步：先 git fetch 再手动合并，而不是直接 git pull。这样可以预览远程变更并避免意外合并。
- 第一次 push 时加 -u（或 --set-upstream），以后直接使用 git push 即可。
- 如果需要我代为生成 SSH key 或把仓库推到远端，请明确授权（我会先展示将要运行的命令并等待你确认）。

---
文件位置：C:\Users\21256\.openclaw\workspace\docs\git_remote_guide.md
