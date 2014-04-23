'use strict';

var sass = require('node-sass');

//libsass can not support expanded or compact
var OUTPUT_STYLE = {
    nested: 0,
    compressed: 1
};


function prepareOpts(opts) {
    opts = opts || {};

    opts.outputStyle = opts.outputStyle ||  OUTPUT_STYLE[0];

}

module.exports = function(opts) {

    opts = prepareOpts(opts);

    //now i just prefer use renderSync
    //TODO support render folder 
    sass.renderSync(opts);
};

