module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			bootstrap : {
				src: [
					'build/bootstrap/js/*.js'
				],
				dest: 'js/lib/bootstrap.js'
			}
		},
		copy: {
			bootstrap: {
				files: [
					{expand: true, cwd: 'build/bootstrap/img/', src: ['**'], dest: 'img/'},
					{expand: true, cwd: 'build/angular/', src: ['*.js'], dest: 'js/lib'},
					{expand: true, cwd: 'build/angulartics/src/', src: ['angulartics.js', 'angulartics-google-analytics.js'], dest: 'js/lib'}
					/*{expand: true, cwd: 'build/jquery/', src: ['*.js'], dest: 'js/lib'}*/
				]
			}
		},
		less: {
			prod: {
				options: {
					compress: true,
					yuicompress: true
				},
				files: {
					'tmp/css/styles.min.css': 'tmp/less/build.less'
				}
			}
		},
		uglify: {
			app: {
				options: {
					mangle: false
				},
				files: {
					'js/lib/bootstrap.min.js': 'js/lib/bootstrap.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib');

	grunt.registerTask('default', [ 'copy' ]);
};
