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
        comments: false,
        compact: false
      },

      nodejs: {
        options: {
          modules: "common"
        },

        files: {
          "build/es5/lib/nodejs.js": "build/es5/lib/index.js"
        }
      },

      mongo: {
        options: {
          modules: "ignore"
        },

        files: {
          "build/es5/lib/mongo.js": "build/es5/lib/index.js"
        }
      }
    },

    clean: {
      es5: {
        src: ["build/es5", "dist/es5"]
      }
    },

    concat: {
      options: {
        separator: "\n\n"
      },

      preCompiler: {
        src: [
          "lib/index.js"
        ],
        dest: "build/es5/lib/index.js"
      },

      postCompilerMongo: {
        options: {
          banner: "var assert = {};\n\n(function() {\n\n",
          footer: "\n\n" +
                  "assert.equal = equal;\n" +
                  "assert.eq = eq;\n" +
                  "assert.notEqual = notEqual;\n" +
                  "assert.neq = neq;\n" +
                  "assert.ne = ne;\n" +
                  "assert.same = same;\n" +
                  "assert.notSame = notSame;\n" +
                  "assert.like = like;\n" +
                  "assert.notLike = notLike;\n" +
                  "assert.between = between;\n" +
                  "assert.notBetween = notBetween;\n" +
                  "assert.greaterThan = greaterThan;\n" +
                  "assert.gt = gt;\n" +
                  "assert.notGreaterThan = notGreaterThan;\n" +
                  "assert.ngt = ngt;\n" +
                  "assert.lessThan = lessThan;\n" +
                  "assert.lt = lt;\n" +
                  "assert.notLessThan = notLessThan;\n" +
                  "assert.nlt = nlt;\n" +
                  "assert.contain = contain;\n" +
                  "assert.notContain = notContain;\n" +
                  "assert.insideOf = insideOf;\n" +
                  "assert.notInsideOf = notInsideOf;\n" +
                  "assert.have = have;\n" +
                  "assert.notHave = notHave;\n" +
                  "assert.haveAny = haveAny;\n" +
                  "assert.allHave = allHave;\n" +
                  "assert.notAllHave = notAllHave;\n" +
                  "assert.raise = raise;\n" +
                  "assert.notRaise = notRaise;\n" +
                  "assert.instanceOf = instanceOf;\n" +
                  "assert.notInstanceOf = notInstanceOf;\n" +
                  "})();"
        },

        src: "build/es5/lib/mongo.js",
        dest: "build/es5/lib/mongo.js"
      }
    },

    copy: {
      nodejs: {
        files: [
          {src: ["build/es5/lib/nodejs.js"], dest: "dist/es5/nodejs/<%= pkg.name %>/lib/index.js", expand: false},
          {src: ["package.json", "README.md"], dest: "dist/es5/nodejs/<%= pkg.name %>/", expand: true},
          {src: ["test/**/*.*"], dest: "dist/es5/nodejs/<%= pkg.name %>", expand: true}
        ]
      },

      mongo: {
        files: [
          {src: ["build/es5/lib/mongo.js"], dest: "dist/es5/mongo/<%= pkg.name %>.js", expand: false}
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

        src: ["lib/**"]
      },

      test: {
        options: {
          jshintrc: true,
          ignores: []
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-travis-lint");

  //aliases
  grunt.registerTask("compilenodejs", ["babel:nodejs", "copy:nodejs"]);
  grunt.registerTask("compilemongo", ["babel:mongo", "concat:postCompilerMongo", "copy:mongo"]);
  grunt.registerTask("buildes5", ["travis-lint", "jshint", "clean:es5", "concat:preCompiler", "compilenodejs", "compilemongo"]);
  grunt.registerTask("test", ["mochaTest:es5"]);
  grunt.registerTask("es5", ["buildes5", "test"]);

  // Default task
  grunt.registerTask("default", []);
};
