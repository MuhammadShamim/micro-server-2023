# Project Setup
```bash
npm init -y
```
# Add dependencies
## Express
```bash
npm install express
# 4.16.1
```
## Typescript
Notice TypeScript-related dependencies are installed as devDependencies. This is because even though code is written in TypeScript, it will be compiled as “vanilla” JavaScript. TypeScript is not required, or used, for runtime and is only used during development. Since the developer is the only “consumer” of TypeScript, it should be installed as a dev dependency.
```bash
npm install typescript ts-node @types/node @types/express --save-dev
```
### Configure TypeScript
So far, you only installed TypeScript, but you cannot use it yet. The reason is that you need to configure it. You need to create a file called tsconfig.json, which indicates that the directory is the root of a TypeScript or JavaScript project.
```bash
npx tsc --init
```
Running the above command creates the tsconfig.json file where we can customize the TypeScript configuration. The newly created file will contain a lot of code, most of which is commented out. However, there are some settings that are important to know:
* target: using this option, you can specify which ECMAScript version to use in your project. For instance, if you set the target to ES5 and then you use arrow functions, the code is compiled to an equivalent ES5 function. The available versions are ES3 (default), ES5, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, or ESNEXT.
* module: with this option, you can specify which module manager to use in the generated JavaScript code. You can choose between the following values none, commonjs, amd, system, umd, es2015, es2020, or ESNext. The most common module manager and the default one is commonjs.
* outDir: with this option, we can specify where to output the “vanilla” JavaScript code.
* rootDir: specifies where the TypeScript files are located.
* strict: enabled by default, this toggles strict type-checking options.
* esModuleInterop: this option is true by default; it controls interoperability between CommonJS and ES modules. It does this by creating namespace objects for all imports.
### Create an Express server
npx tsc --project ./
created index.ts file running on port 8080
## Build
```bash
npm run build
```
## Start
```bash
npm run start
goto http://localhost:8080/
```
## Test
```bash
npm run test
# Hello Micro Server 2023 TEST!
```
## Production
```bash
npm run prod
# Hello Micro Server 2023 PROD! 
```