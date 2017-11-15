module.exports = function(grunt) {

   grunt.initConfig({
	   // NOT RUN, just for example
	   sass: {
		  dev: {
			files: {
			  // destination // source file
			  'styles/main.css': 'styles/main.scss'
			}
		  }
		},
		
      less: {
		  dev: {    // indicates that it will be used only during development
			files: {
			  // destination // source file
			  'styles/main.css': 'styles/main.less'
			}
		  }
		},
		
	  // NOT RUN, just for example
	  coffee: {
		  compile: {
		   files: {
			'scripts/hello.js': 'scripts/hello.coffee'
		   }
		 }
		},
	  
      cssmin: {
		build: {
		  src: 'styles/main.css',
		  dest: 'styles/main.min.css'
		}
	  },
	  
	  concat: {
	    options: {
		  separator: '\n/*next file*/\n\n'  //this will be put between conc. files
		},
		dist: {
			src: ['scripts/**/*.js'],
			dest: 'dist/built.js'
		  }
	  },

	  uglify: {
	    build: {
		  files: {
		    'dist/built.min.js': ['dist/built.js']
		  }
	    }
	  },
	  
	  watch: {
		  sass: {
			files: 'styles/*.scss',
			tasks: ['sass'],
			options: {
			  livereload: 35729 // 35729 is the default port === true
			}
		  },
		  less : {
			files: 'styles/*.less',
			tasks: ['css'],
		  },
		  coffee: {
			files: 'scripts/*.coffee',
			tasks: ['coffee']
		  },
		  concat: {
			files: ['scripts/hello.js','scripts/main.js'],
			tasks: ['concat']
		  },
		  uglify: {
			files: 'scripts/built.js',
			tasks: ['uglify'],
			options: {
			  livereload: true
			}
		  },
		  all: {
			files: ['**/*.html'],
			options: {
			  livereload: true
			}
		  }
	  }
   });

   grunt.loadNpmTasks('grunt-contrib-less');
   // NOT USED
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-coffee');
   // USED
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['css', 'js']);
   grunt.registerTask('css', ['less', 'cssmin']);
   grunt.registerTask('js', ['concat', 'uglify']);
};