# es6-lib-seed

This is a simple seed project for an ES6 library. You could also use it as an ES2015/ES6 scratchpad.

_Disclaimer: This is my first Webpack project, so I am still learning. Suggestions welcome!_

The goal of this repo is to get a simplest possible useful boilerplate project to be used to author libraries using ES2015, AKA ES6 (seriously, why did they have to name it after the year!)

This is also part of a two repo exploration of an ES6 ecosystem, check out [es6-web-app-seed](https://github.com/tinisi/es6-web-app-seed) which is a simple web app that depends on this library.

If you have suggestions that are in the spirit of "keep it simple" please submit a pull request.

## Setup

* Clone the repo
* Install or otherwise make available Node 5.11.0 (others will probably work, I use nodenv to avoid system installs)
* cd into the project
* run `npm install`

## Testing and Development

* `npm test` will run the jasmine specs
* `npm run build` will build to the lib folder
* `npm run repl` will get you into the groovy babel-node REPL, with the ES6 polyfill in scope.

Thanks to the babel test helper, jasmine is automatically transpiling the source code. However, in this simplest format, the source code can only be run through a babel transpiler, so you can't debug using the node cli directly. Since this is a library, I am NOT using babel-register to hook into require nor requiring the polyfill, so TDD is your most convenient way to work or play.

