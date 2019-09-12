echo 'stop egg.js and pull latest code'

git reset --hard

git pull --rebase origin master

cnpm i --production

# 编译处 js 版本的代码
npm run clean 
npm run tsc

pm2 restart admin-api

echo 'deploy success...'
