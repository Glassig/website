#!/bin/bash

SRC=${BASH_SOURCE%/*}/../src/*

for file in $SRC
do
  echo "Processing $file file..."
  echo -e "\n<br><br>\nTimeperiod: {{date}}">>$file
done