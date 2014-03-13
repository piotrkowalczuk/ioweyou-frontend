"use strict";

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

		// Read package configuration
		pkg: grunt.file.readJSON('package.json'),

		// Project configuration
		settings: {
			app: 'app',
			dist: 'dist'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: ['<%= settings.app %>/scripts/**/*.js'],
				tasks: ['newer:jshint:all'],
				options: {
					livereload: true
				}
			},
			jsTest: {
				files: ['test/spec/**/*.js'],
				tests: ['newer:jshint:test']
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= settings.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'<%= settings.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'<%= settings.app %>'
                        ]
				}
			},
			test: {
				options: {
					port: 9001,
					base: [
						'.tmp',
						'test',
						'<%= settings.app %>'
					]
				}
			},
			dist: {
				options: {
					base: '<%= settings.dist %>'
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= settings.app %>/scripts/{,*/}*.js'
			],
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/spec/{,*/}*.js']
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= settings.dist %>/*',
						'!<%= settings.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

    // Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the app
		bowerInstall: {
			app: {
				src: [
					'<%= settings.app %>/index.html'
				],
				ignorePath: '<%= settings.app %>/',
				exclude: [
					/jquery/,
					/bootstrap.js/,
					/angular.js/
				]
			}
		},

		// Renames files for browser caching purposes
		rev: {
			dist: {
				files: {
					src: [
						'<%= settings.dist %>/scripts/{,*/}*.js',
						'<%= settings.dist %>/styles/{,*/}*.css',
						'<%= settings.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'<%= settings.dist %>/styles/fonts/*'
					]
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= settings.app %>/index.html',
			options: {
				dest: '<%= settings.dist %>'
			}
		},

		// Performs rewrites based on rev and the useminPrepare configuration
		usemin: {
			html: ['<%= settings.dist %>/{,*/}*.html'],
			css: ['<%= settings.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= settings.dist %>']
			}
		},

	  // The following *-min tasks produce minified files in the dist folder
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= settings.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: '<%= settings.dist %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= settings.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= settings.dist %>/images'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= settings.dist %>',
					src: ['*.html', 'views/{,*/}*.html'],
					dest: '<%= settings.dist %>'
				}]
			}
		},

	  // Run some tasks in parallel to speed up the build process
		concurrent: {
			server: [
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'copy:styles',
				'imagemin',
				'svgmin'
			]
		},

	  // Allow the use of non-minsafe AngularJS files. Automatically makes it
		// minsafe compatible so Uglify does not destroy the ng references
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= settings.app %>',
					dest: '<%= settings.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'views/{,*/}*.html',
						'bower_components/**/*',
						'images/{,*/}*.{webp}',
						'fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= settings.dist %>/images',
					src: ['generated/*']
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= settings.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},

		karma: {
  				unit: {
    				configFile: 'karma.conf.js',
    				singleRun: true
  			}
}
});

grunt.registerTask('serve', function (target) {
	if (target === 'dist') {
		return grunt.task.run(['build', 'connect:dist:keepalive']);
	}

	grunt.task.run([
		'clean:server',
		'bowerInstall',
		'concurrent:server',
		'autoprefixer',
		'connect:livereload',
		'watch'
	]);
});

grunt.registerTask('test', [
	'clean:server',
	'concurrent:test',
	'autoprefixer',
	'connect:test',
	'karma'
]);

grunt.registerTask('build', [
	'clean:dist',
	'bowerInstall',
	'useminPrepare',
	'concurrent:dist',
	'autoprefixer',
	'concat',
	'ngmin',
	'copy:dist',
	'cssmin',
	'uglify',
	'rev',
	'usemin',
	'htmlmin'
]);

grunt.registerTask('default', [
	'newer:jshint',
	'test',
	'build'
]);

};
