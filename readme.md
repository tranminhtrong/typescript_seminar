* Init package.js
npm init

* Install lasted version TypeScript
npm install --save-dev typescript 

* Install lasted version build tool Gulp
npm install --save-dev gulp-cli
npm install --save-dev gulp
npm install --save-dev gulp-typescript
npm install --save-dev gulp-clean

* Init tsconfig.json
tsc --init 

* Generate .d.ts
npm install -g dts-gen

dts-gen -m <your-module>

* Combine all .js files to 1 file : Browserify
First, install browserify, tsify, and vinyl-source-stream.  
tsify is a Browserify plugin that, like gulp-typescript, gives access to the TypeScript compiler. 
vinyl-source-stream lets us adapt the file output of Browserify back into a format that gulp understands called vinyl.
npm install --save-dev browserify tsify vinyl-source-stream

* Watchify, Babel, and Uglify
Watchify starts gulp and keeps it running, incrementally compiling whenever you save a file. This lets you keep an edit-save-refresh cycle going in the browser.

Babel is a hugely flexible compiler that converts ES2015 and beyond into ES5 and ES3. This lets you add extensive and customized transformations that TypeScript doesn’t support.

Uglify compacts your code so that it takes less time to download.

npm install --save-dev watchify gulp-util

