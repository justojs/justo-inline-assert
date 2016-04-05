module.exports = function(grunt) {
  "use strict";

  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),

    // Task configuration
    babel: {
      options: {
        sourceMap: false,
        retainLines: true,
        comments: false,
        presets: ["es2015"]
      },

      es5: {
        files: {
          "build/es5/index.js": "index.js"
        }
      },
    },

    clean: {
      es5: {
        src: ["build/es5", "dist/es5"]
      }
    },

    copy: {
      nodejs: {
        files: [
          {src: ["build/es5/index.js"], dest: "dist/es5/nodejs/<%= pkg.name %>/index.js", expand: false},
          {src: ["package.json", "README.md"], dest: "dist/es5/nodejs/<%= pkg.name %>/", expand: true}
        ]
      }
    },

    jshint: {
      gruntfile: {
        src: ["Gruntfile.js"]
      },

      lib: {
        options: {
          jshintrc: true
        },

        src: ["index.js"]
      },

      test: {
        options: {
          jshintrc: true,
          ignores: [
            "test/unit/data/**/*.*"
          ]
        },

        src: ["test/**"]
      }
    },

    mochaTest:{
      options: {
        ignoreLeaks: false,
        quiet: false,
        reporter: "spec",
        timeout: 1500
      },

      es5: {
        options: {
          require: [
            "should"
          ]
        },

        src: [
          "test/unit/lib/*.js"
        ]
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-travis-lint");

  //aliases
  grunt.registerTask("buildes5", ["travis-lint", "jshint", "clean:es5", "babel:es5", "copy:nodejs"]);
  grunt.registerTask("test", ["mochaTest:es5"]);
  grunt.registerTask("es5", ["buildes5", "test"]);

  // Default task
  grunt.registerTask("default", []);
};
