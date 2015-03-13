"use strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        "babel": {
            options: {},
            dist: {
                files: [{
                    expand: true,
                    cwd: "src",
                    src: ["**/*.js"],
                    dest: "lib",
                    ext: ".js",
                }]
            }
        }
    });

    grunt.registerTask("build", ["babel"]);
};