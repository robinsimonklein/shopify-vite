#!/bin/bash

mkdir ./build
rm -rf ./build/*
cp -R assets config layout locales sections snippets templates ./build
cp translation.yml ./build
