var requirejs = require('requirejs');

requirejs.config({
    nodeRequire: require,
    baseUrl: "./app.js",
    paths: {
        http : 'http',
        url : "url",
        path : "path",
        fs : 'fs',
        db : './script/dbconn.js',
        mysql : 'mysql'
    }
});

/* requirejs(['foo', 'bar'],
function   (foo,   bar) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
}); */