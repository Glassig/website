#!/bin/bash

fname=$1
ID=$2
DATE=`date +%Y-%m-%d`
echo $fname'_'$DATE
touch ../src/$DATE':'$fname.md
echo "---">../src/$DATE':'$fname.md
echo "title:">>../src/$DATE':'$fname.md
echo "id: "$ID>>../src/$DATE':'$fname.md
echo "layout: boxes.hbs">>../src/$DATE':'$fname.md
echo "tags:">>../src/$DATE':'$fname.md
echo "date: "$DATE"">>../src/$DATE':'$fname.md
echo "---">>../src/$DATE':'$fname.md