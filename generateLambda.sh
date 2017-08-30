#!/usr/bin/env bash

DIR="`pwd`"/"`dirname \"$0\"`"
TMP=${DIR}/tmp;
#BORRO dist
rm -rf ${DIR}/dist
mkdir -p ${DIR}/dist

array=( 'project' )

for lambda in "${array[@]}"
do
    rm -rf ${TMP}
    mkdir ${TMP}
    cd ${DIR}/${lambda}/
    if [ -f ${DIR}/${lambda}/package.json ];
    then
      npm install
    fi
    rsync -acv ${DIR}/${lambda}/ ${TMP}/ --recursive
    rsync -acv ${DIR}/lib/ ${TMP}/lib/ --recursive
    cd ${TMP}
    zip -r ${DIR}/dist/${lambda}.zip *
done

rm -rf ${TMP}/*


