#!/usr/bin/env bash

DIR="`pwd`"/"`dirname \"$0\"`"
TMP=${DIR}/tmp
LIB=${DIR}/lib
LIB_TMP=${DIR}/tmp_lib

array=( 'project' )


#BORRO ANTERIORES
rm -rf ${DIR}/dist
rm -rf ${TMP}
rm -rf ${LIB_TMP}

#START
mkdir -p ${DIR}/dist

#CARPETA TEMPORAL DE LIB
rsync -acv ${LIB}/ ${LIB_TMP}/ --recursive
cd ${LIB_TMP}
npm install

#GENERAMOS CADA LAMBDA
for lambda in "${array[@]}"
do
    rm -rf ${TMP}
    mkdir -p ${TMP}/lib
    mkdir -p ${TMP}/node_modules
    rsync -acv ${LIB_TMP}/ ${TMP}/lib/ --recursive --exclude 'package.json' --exclude 'package-lock.json' --exclude 'node_modules'
    cd ${DIR}/${lambda}/
    if [ -f ${DIR}/${lambda}/package.json ];
    then
      npm install
    fi
    rsync -acv ${DIR}/${lambda}/ ${TMP}/ --recursive
    rsync -acv ${DIR}/lib/ ${TMP}/lib/ --recursive
    rsync -acv ${LIB_TMP}/node_modules/ ${TMP}/node_modules/ --recursive
    rm -rf node_modules
    cd ${TMP}
    zip -r ${DIR}/dist/${lambda}.zip *
done

rm -rf ${TMP}
rm -rf ${LIB_TMP}

