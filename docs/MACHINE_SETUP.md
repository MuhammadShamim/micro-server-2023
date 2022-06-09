# Machine Setup
Setting up local machine or server to run micro server
#### Pre-requisites
    Note: The below will be installed as part of Nodejs
* Chocolatey v0.10.15
* Python3 v3.10.5
## Nodejs [https://nodejs.org/en/]
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.
### Installing Nodejs
#### Version
```bash
node -v
# v18.3.0
npm -v
# 7.18.1
```
#### Testing Nodejs Installation
```bash
node ./docs/nodejs-test.js
# Hello Micro Server 2013!
``