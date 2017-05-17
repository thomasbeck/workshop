# A TDD example

## prolog
This example will be used to showcase test driven development. The goal is to develop a functional "calculator" app.

## setup
**Tools**
* install git on your local machine
  * [Git downloads](https://git-scm.com/downloads)
* install Node.js on your machine
  * [Node.js download](http://nodejs.org/#download)

**Environment**
* setup the proxy
  * git: ```git config --global http.proxy http://proxy:8080/```
  * npm: ```npm config set proxy http://proxy:8080/```
  * npm: ```npm config set https-proxy http://proxy:8080/```

**Source**
* download the repository as ZIP file 
* alternatively, log in to [GitHub](https://github.com/) and fork [https://github.com/thomasbeck/workshop.git](https://github.com/thomasbeck/workshop.git)
* clone the repo ```git clone https://github.com/YourAccount/workshop.git```

**App Dependencies**
* run ```npm install -g grunt-cli``` in the repo directory to install the grunt command line interface
* run ```npm install``` in the repo directory install package dependencies
* run ```grunt develop``` in the repo directory to start the test runner
* visit your browser at http://localhost:4444

## development
You can now start writing your tests and implement the methods (there's only stubs for now). You'll find 
* the tests in tests/app/calculator.js
* the app in app/calculator.js

You might want to create a separate branch for your features.

# license

Uses parts with Copyright &copy; 2012 Rebecca Murphey.

This work is licensed under the [Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/)
license. You are free to share and remix the work, and to use it for commercial
purposes under the following conditions:

- *Attribution* — You must attribute the work in the manner specified by the
  author or licensor (but not in any way that suggests that they endorse you or
  your use of the work).
- *Share Alike* — If you alter, transform, or build upon this work, you may
  distribute the resulting work only under the same or similar license to this
  one.

Any of these conditions can be waived if you get permission from the copyright
holder.
