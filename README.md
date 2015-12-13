Understanding ECMAScript 6
==========================

Setting up the Dev Environment with NPM, GULP & JSPM
-------------------------------------------------------

__Step 1.__ Run `npm install` to install all the npm packages

__Step 2.__ Run `jspm install` to install all the jspm packages

__Step 3.__ Create & remove the bundles

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
