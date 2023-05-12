var $l530s$fs = require("fs");
var $l530s$path = require("path");
var $l530s$replaceinfile = require("replace-in-file");
var $l530s$lodashescaperegexp = require("lodash.escaperegexp");

var $874d146683c9f63f$var$__dirname = "";




// the directory in which you're outputting your build
let $874d146683c9f63f$var$baseDir = "public";
// the name for the directory where your static files will be moved to
let $874d146683c9f63f$var$staticDir = "static";
// the directory where your built files (css and JavaScript) will be moved  to
let $874d146683c9f63f$var$assetsDir = "build";
// if the staticDir directory isn't there, create it
if (!$l530s$fs.existsSync($l530s$path.join($874d146683c9f63f$var$__dirname, $874d146683c9f63f$var$baseDir, $874d146683c9f63f$var$staticDir))) $l530s$fs.mkdirSync($l530s$path.join($874d146683c9f63f$var$__dirname, $874d146683c9f63f$var$baseDir, $874d146683c9f63f$var$staticDir));
// same for the assetsDir directory
if (!$l530s$fs.existsSync($l530s$path.join($874d146683c9f63f$var$__dirname, $874d146683c9f63f$var$baseDir, $874d146683c9f63f$var$assetsDir))) $l530s$fs.mkdirSync($l530s$path.join($874d146683c9f63f$var$__dirname, $874d146683c9f63f$var$baseDir, $874d146683c9f63f$var$assetsDir));
// Loop through the baseDir directory
$l530s$fs.readdir(`./${$874d146683c9f63f$var$baseDir}`, (err, files)=>{
    // store all files in custom arrays by type
    let html = [];
    let js = [];
    let css = [];
    let maps = [];
    let staticAssets = [];
    files.forEach((file)=>{
        // first HTML files
        if (file.match(/.+\.(html)$/)) {
            console.log("html match", file);
            html.push(file);
        } else if (file.match(/.+\.(js)$/)) js.push(file);
        else if (file.match(/.+\.(map)$/)) maps.push(file);
        else if (file.match(/.+\.(css)$/)) css.push(file);
        else if (file.match(/.+\..+$/)) staticAssets.push(file);
    });
    // check what went where
    console.log("html", html, "css", css, "js", js, "staticAssets", staticAssets);
    // create an array for all compiled assets
    let assets = css.concat(js).concat(maps);
    // replace all other resources in html
    html.forEach((file)=>{
        staticAssets.forEach((name)=>{
            let options = {
                files: $l530s$path.join("public", file),
                from: new RegExp($l530s$lodashescaperegexp(name), "g"),
                to: $874d146683c9f63f$var$staticDir + "/" + name
            };
            try {
                let changedFiles = $l530s$replaceinfile.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
        assets.forEach((name)=>{
            let options = {
                files: $l530s$path.join("public", file),
                from: new RegExp($l530s$lodashescaperegexp(name), "g"),
                to: $874d146683c9f63f$var$assetsDir + "/" + name
            };
            try {
                let changedFiles = $l530s$replaceinfile.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });
    // replace map links in js
    js.forEach((file)=>{
        maps.forEach((name)=>{
            let options = {
                files: $l530s$path.join("public", file),
                from: name,
                to: "../" + $874d146683c9f63f$var$assetsDir + "/" + name
            };
            try {
                let changedFiles = $l530s$replaceinfile.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });
    // replace links in css
    css.forEach((file)=>{
        staticAssets.forEach((name)=>{
            let options = {
                files: $l530s$path.join("public", file),
                from: new RegExp($l530s$lodashescaperegexp(name), "g"),
                to: "../" + $874d146683c9f63f$var$staticDir + "/" + name
            };
            try {
                let changedFiles = $l530s$replaceinfile.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });
    // move js and css and maps
    assets.forEach((name)=>{
        $l530s$fs.rename($l530s$path.join($874d146683c9f63f$var$__dirname, "public", name), $l530s$path.join($874d146683c9f63f$var$__dirname, "public", $874d146683c9f63f$var$assetsDir, name), function(err) {
            if (err) throw err;
            console.log(`Successfully moved ${name}`);
        });
    });
    // move staticAssets
    staticAssets.forEach((name)=>{
        $l530s$fs.rename($l530s$path.join($874d146683c9f63f$var$__dirname, "public", name), $l530s$path.join($874d146683c9f63f$var$__dirname, "public", $874d146683c9f63f$var$staticDir, name), function(err) {
            if (err) throw err;
            console.log(`Successfully moved ${name}`);
        });
    });
});


//# sourceMappingURL=index.js.map
