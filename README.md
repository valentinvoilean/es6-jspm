Understanding ECMAScript 6
==========================

Setting up the Dev Environment with NPM, GULP & JSPM
-------------------------------------------------------

__Step 0.__ Checkout the repository

__Step 1.__ Install Node.js. Just go to https://nodejs.org/ and get an installer.

__Step 2.__ Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

```shell
npm install -g gulp
```  
> **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.  
  
__Step 3.__ Ensure that [jspm](http://jspm.io/) is installed globally. If you need to install it, use the following command:

```shell
npm install -g jspm  
```  
> **Note:** jspm must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

__Step 4.__ Create this folder structure:

    src  
    |_ js  
    |   |_ main.js
    |_ scss  
    |   |_ styles.scss (leave it empty for now )  
    |_ index.html (leave it empty for now)  
  
__Step 5.__ Open the console and run `npm init`. Answer to all the next questions in order to generate the 
`package.json` file. You can leave them all empty, just press the Enter key to finish faster.  

__Step 6.__  Install the first node module of the project: 

```shell
npm install jspm --save-dev`
```
  
__Step 7.__ Initialize and configure jspm:

```shell
jspm init
```
            
Another bunch of questions will appear. Please add the following answers:  

* Would you like jspm to prefix the jspm package.json properties under jspm? [yes]: (press Enter)  
* Enter server baseURL (public folder path) [./]: src  
* Enter jspm packages folder [src/jspm_packages]: (press Enter) 
* Enter config file path [src/config.js]: (press Enter) 
* Configuration file src/config.js doesn't exist, create it? [yes]:  (press Enter)  
* Enter client baseURL (public folder URL) [/]: (press Enter)
* Do you wish to use a transpiler? [yes]: (press Enter)
* Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]: (press Enter)

__Step 8.__ Update your index.html file to match the following code:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <link rel="stylesheet" type="text/css" href="./css/styles.css">
  <script src="./jspm_packages/system.js"></script>
  <script src="./config.js"></script>
  <script>
    System.import('./js/main');
  </script>
</head>
<body>
  <h1>Understanding ECMAScript 6</h1>
</body>
</html>
```

__Step 9.__ Inside the "./src/js/main.js" file, add the following code:
    
```javascript            
console.log('Hello World');
```

__Step 10.__ Install Gulp locally: 

```shell
npm install gulp --save-dev  
```

__Step 11.__ It is necessary a server and something that will reload the page automatically. Therefore, install "browser sync":  
        
```shell
npm install browser-sync --save-dev
```
            
__Step 12.__ In your root folder, create a new js file named "gulpfile.js" and add the following code:

```javascript
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});

gulp.task('default', ['browser-sync']);
```

__Step 13.__ Run `gulp` in your console. Your default browser should start automatically. Please check your console. 
Did you get the "hello world" message ? (ignore the css error for now )
            
__Step 14.__ Update the script so whenever a file is changed inside the "src" folder, the browser is reloaded.

Open the "gulpfile.js" and add a new task named "watch", set the path & the callback:

```javascript
gulp.task('watch', function() {
    gulp.watch('./src/**/*', browserSync.reload);
});
```

Now if you run `gulp watch` in your console, everytime you modify a file inside the "src" folder, the browser will reload.

Let's go even further and let's run this task by default when we run the `gulp` command.
Modify the default task like this :

```javascript
gulp.task('default', ['browser-sync', 'watch']);
```

How about displaying  which file has been changed in the console ?
Create a new function called "reportChange", which returns the filename modified to the console:

```javascript
// outputs changes to files to the console
function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}
```

Let's chain this function to the "watch" task:

```javascript
gulp.task('watch', function() {
    gulp.watch('./src/**/*', browserSync.reload).on('change', reportChange);
});
```

__Step 15.__ Install libsass & sourcemaps : 

```shell
npm install --save-dev gulp-sass gulp-sourcemaps
```
    
__Step 16.__ Configure libsass

Require the gulp-sass, gulp-sourcemaps on top of the gulpfile.js  

```javascript
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
```

Create the sass task  

```javascript
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});
```

Update the "watch" task again, so when an "scss" file is changed, to run the "sass" task.
    
```javascript
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', './src/**/*.js'], browserSync.reload).on('change', reportChange);
    gulp.watch('./src/**/*.scss', ['sass']).on('change', reportChange);
});
```

Also, update the default task to match the following code:

```javascript
gulp.task('default', ['browser-sync', 'sass', 'watch']);
```


Restart the server by running `gulp` again, and modify the styles.scss by adding the following code:

```css
body {
  background: black;
  color: white;
}
```

__Step 17.__ Install jQuery as jspm module

Run the following command in the console : 

```shell
jspm install jquery
```
    
Import jquery in your main.js file:

```javascript
import $ from 'jquery';
console.log($.fn.jquery);
```

##EXTRA STUFF

__Step 18.__ Normalize html elements

Install the "normalize.scss" through jspm:

```shell
jspm install npm:normalize.scss
```
    
Install  sass-jspm-importer through npm :

```shell
npm install sass-jspm-importer --save-dev
```
    
Update the "gulpfile.js":

* require the module :

```javascript
var sassJspm = require('sass-jspm-importer');
```
    
* update the "sass" task, to include the jspm-importer:

```javascript
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            functions: sassJspm.resolve_function('/src/jspm_packages/'),
            importer: sassJspm.importer
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});
```
    
* import the normalize file in the style.scss:

```shell
@import "jspm:normalize.scss/normalize";
```
    
__Step 19.__ Create a bootstrap dropdown

Install bootstrap through jspm:

```shell
jspm install bootstrap
```

Create a new file named "dropdown.js" inside the "/src/js/" folder.

Import the bootstrap package, and create the dropdown component using jQuery, and finally export it to be used later
in the "main.js" file:

```javascript
import 'bootstrap';
import $ from 'jquery';

const dropdown = $(`
    <div class="btn-group">
      <button type="button" class="btn btn-danger">Action</button>
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="caret"></span>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
`);

export {dropdown};
```

Inside the main.js file, import the dropdown element, and append it to $('body')

```javascript
import {dropdown} from 'js/dropdown';
$('body').append(dropdown);
```

Now we have the element displayed in our browser, but it's not stylised.   

JSPM was created specially for web components, therefore we can include CSS files directly in our js file.  
Let's install the css package for JSPM:

```shell
jspm install css
```

For the rest of the packages supported, please follow this link: https://github.com/jspm/registry/blob/master/registry.json

Next, add the following line to your dropdown.js file:

```javascript
import 'bootstrap/css/bootstrap.css!';
```
> **Note:** The exclamation mark is necessary, so a plugin will be called to load the file.


__Step 20.__ Create & remove the bundles

If you had a chance to check the Network tab inside the Developer Tools, you noticed there were done extra xhr requests
to load the main.js, dropdown.js, jquery, bootstrap, bootstrap.css. 
To combine and minify all these files, we need to create a bundle.

To do this, you must run `jspm bundle module1 + module2 --inject `,  where "module1, module2" represent 
the modules created:

In our case:

```shell
jspm bundle js/main + js/dropdown + jquery + bootstrap --inject
```

First time, you get an error related to the "css" jspm package, therefore install the next package to solve it:

```shell
jspm install npm:clean-css --dev
```

Restart the server and check the Network tab. You should see a new file called "build.js" instead of all the bunch of
files you had before.

To unbundle, use 
```shell
jspm unbundle
```

There are also gulp plugins to detect automatically the modules created, to create bundles and to save them in a 
specific location (like /target )
