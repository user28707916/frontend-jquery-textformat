module.exports = function (grunt) {
	var SRC_DIR = 'src',
		TEST_DIR = 'test',
		BUILD_DIR = 'build',
		TASKS_DIR = 'tasks';

	grunt.initConfig({
		jshint: {
			dev: {
				options: {
					jshintrc: TASKS_DIR + '/.jshintrc'
				},
				src: [
					SRC_DIR + '/**/*.js'
				]
			}
		},
		clean: {
			build: [BUILD_DIR],
			test: [TEST_DIR + '/test.js']
		},
		copy: {
			build: {
				files: [
					//copy folders
					{
						cwd: SRC_DIR + '/styles',
						src: '**',
						dest: BUILD_DIR + '/styles',
						flatten: false,
						expand: true
					},
					{
						cwd: SRC_DIR,
						src: '*.js',
						dest: BUILD_DIR,
						flatten: false,
						expand: true
					},
					{
						cwd: './node_modules/jquery/dist/',
						src: 'jquery.js',
						dest: BUILD_DIR,
						flatten: false,
						expand: true
					}
				]
			}
		},
		jasmine: {
			dev: {
				options: {
					//polyfills: [''],
					vendor: [
						'./node_modules/jquery/dist/jquery.js'
					],
					helpers: ['./src/index.js'],
					keepRunner: false,
					outfile: TEST_DIR + '/test.html',
					specs: [TEST_DIR + '/spec/index.js']
				}
			}
		},
		targethtml: {
			build: {
				files: (function () {
					var config = {};
					config[BUILD_DIR + '/index.html'] = SRC_DIR + '/index.html'
					return config;
				} ())
			}
		},
		watch: {
			all: {
				files: [
					SRC_DIR + '/**/*.*',
					TEST_DIR + '/**/*.*'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			},
			dev: {
				files: [
					SRC_DIR + '/**/*.*'
				],
				//tasks: ['jshint'],
				options: {
					interrupt: true,
					livereload: 35729
				}
			}
		},
		browserSync: {
			bsFiles: {
				src: [
					SRC_DIR + '/**/*.js',
					SRC_DIR + '/**/*.css',
					SRC_DIR + '/**/*.html'
				]
			},
			//https://www.browsersync.io/docs/options
			options: {
				watchTask: true,
				server: {
					baseDir: '.'
				},
				// proxy: '',
				// host: '',
				// port: 3000,
				// https: true,
				startPath: '/' + SRC_DIR,
				// browser: ['google chrome', 'firefox'']
				// localOnly: true,
				cors: false,
				open: 'external',
				notify: false,
				reloadOnRestart: true,
				reloadDelay: 0,
				reloadDebounce: 0,
				reloadThrottle: 0,
				ghostMode: {
					clicks: true,
					forms: true,
					scroll: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('start', ['browserSync', 'watch:dev']);
	grunt.registerTask('live', ['watch:all']);
	grunt.registerTask('code', ['jshint:dev']);
	grunt.registerTask('test', ['jasmine', 'clean:test']);
	grunt.registerTask('build', ['clean:build', 'targethtml:build', 'copy:build']);
};