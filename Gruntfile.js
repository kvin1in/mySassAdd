module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'expanded',
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'asserts/sass/',
                    src: '**/*.scss',
                    dest: 'asserts/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: 'asserts/sass/**/*.scss',
            tasks: 'sass'
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);
};