redux-boilerplate
=====================

A simple React starter boilerplate


### Table of Contents
1. [Developing](#start)
2. [Building](#building)
   * 2.1. [Normal build](#build)
   * 2.2. [Building with stats](#stats)
3. [Linting](#lint)
4. [Dependencies](#dependencies)



<div id="start"></div>

### 1. Developing

```
npm install
npm start
open http://localhost:3000
```


<div id="building"></div>

### 2. Building

<div id="build"></div>

#### 2.1 Normal build
The build process will generate the minified files for a production enviroment. 
These files will be saved into the build folder.

It will generate a *.js* file for the vendor libraries (installed as dependencies at the package.json) 
with **vendor.[hash].js** name.

The app *.js* file with **app.[hash].js** name.

And the styles with **styles.[hash].css**.

It will also generate the respective **map** file for each one.
```
npm run build
```

<div id="stats"></div>

#### 2.2 Building with stats
Building in this way, it will generate a **stats.json** file with webpack build details.

These files can be uploaded to [webpack analyse tool](http://webpack.github.io/analyse/) 
for a more detailed visual info.
```
npm run stats
```


<div id="lint"></div>

### 3. Linting

This boilerplate project includes React-friendly **ESLint** configuration.

```
npm run lint
```



<div id="dependencies"></div>

### Dependencies

* [react](https://www.npmjs.com/package/react)
* [react-dom](https://www.npmjs.com/package/react-dom)
