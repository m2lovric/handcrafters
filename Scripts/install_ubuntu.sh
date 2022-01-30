#!/usr/bin/env bash

echo "This script installs all needed dependencies to successfully run the \"Handcrafters\" application!"
echo -e "\e[31m!!!! Run this script with \e[33msudo\e[31m privileges in order to properly install all libraries and dependencies !!!!\e[0m"

if [[ `whoami` != root ]]; then
    echo -e " -- \e[31mPlease run this script as root or using sudo\e[0m"
    exit
fi

echo -e " -- \e[33mFetching updates\e[0m"
apt update -qq

echo -e " -- \e[33mInstalling system packages\e[0m"
apt install -y python3.9 \
               python3.9-venv \
               python3-pip \
               postgresql \
               postgresql-contrib

echo -e " -- \e[33mInstalling Python3 packages\e[0m"
python3 -m pip install uvicorn

