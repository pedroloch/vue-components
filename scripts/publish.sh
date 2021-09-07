#/bin/bash
if [ $# -eq 0 ]
  then
    echo "Please, specify the commit message"
  else 
    git add . && git commit -m "$1" && npm run release && git push origin master && npm run rebuild && npm publish --access public
fi
