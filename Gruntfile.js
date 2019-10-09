module.exports = function(grunt) {

    var banner = '/**\n    @name: <%= pkg.name %> \n    @version: <%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) \n    @author: <%= pkg.author %> \n    @url: <%= pkg.homepage %> \n    @license: <%= pkg.license %>\n*/\n';

    var sources = ['src/**/*', 'src/*'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
                banner: banner
            },
            dist: {
                src: sources,
                dest: 'dist/angular-owlbot-wrapper.js'
            }
        },
        uglify: {
            js: {
                files : {
                    'dist/angular-owlbot-wrapper.min.js' : sources
                }
            },
            options: {
                banner: banner
            }
        },
        watch: {
            minifiyJs: {
                files: sources,
                tasks: ['compile'],
                options: {
                    spawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile', ['concat', 'uglify'])
};
