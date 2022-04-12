#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const template = process.argv[2];
const outDir = process.argv[3];

if (!template || !outDir) {
  console.log(`Some info are missed. 
  
To run this command you must specify the template path and the output directory, followed by all parameters.

For example, if you have this template in the templates/$x.js folder

// $x.js
console.log($y)

You can create a file based on this template as follows:

npx t6e templates/$test.js src/tests test=test y="hello world"
  
  
  Exiting...`);
  process.exit(1);
}

const params = process.argv.slice(4);
console.log("params: ", params);
const paramsMap = {};
for (let p of params) {
  const equalIndex = p.indexOf("=");
  const paramName = p.substring(0, equalIndex);
  const paramValue = p.substring(equalIndex + 1);
  console.log("params: ", paramName, paramValue);
  paramsMap[paramName] = paramValue;
}

const templateFileName = path.basename(template);
let fileName = templateFileName;
const templateString = fs.readFileSync(template, "utf8");
let fileContent = templateString;
for (let param in paramsMap) {
  console.log(`replacing $${param} with "${paramsMap[param]}" in ${fileName}`);
  const paramRegexp = new RegExp(`${"\\$" + param}`, "ig");
  fileName = fileName.replace(paramRegexp, paramsMap[param]);
  fileContent = fileContent.replace(paramRegexp, paramsMap[param]);
  console.log("fileName: ", fileName);
  console.log("fileContent: ", fileContent);
}

fs.mkdirSync(outDir, { recursive: true });
console.log(`Saving to file ${outDir} as ${fileName} the content: 
${fileContent}`);
fs.writeFileSync(`${outDir}/${fileName}`, fileContent);
console.log(`${outDir}/${fileName} saved`);
