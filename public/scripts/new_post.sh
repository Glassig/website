#!/bin/bash

fname=$1
ID=$2
DATE=`date +%Y-%m-%d`
src_name=${BASH_SOURCE%/*}/../src/$ID':'$DATE':'$fname.md
echo $src_name
touch $src_name
echo "---">$src_name
echo "title:">>$src_name
echo "id: "$ID>>$src_name
echo -e "icon: \nsubtitle: \nlayout: boxes.hbs\ntags: ">>$src_name
echo "date: "$DATE"">>$src_name
echo -e "---\n\n<br><br>\nTimeperiod: {{date}}">>$src_name