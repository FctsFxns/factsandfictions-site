module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {
      options: {                          
        src: '.',
        dest: './_site',
        config: '_config.yml',
        serve: false,
        watch: false,
        future: true,
        force_polling: false,
        bundleExec: true
      },
      devel: {
        options: {
          dest: './_site',
          config: '_config.yml',
          serve: true,
          watch: true,
          future: true,
          force_polling: true,
          bundleExec: true
        }
      },
      dist: {
        options: {
          dest: './_site',
          config: '_config.yml',
          serve: false,
          watch: false,
          future: true,
          force_polling: false,
          bundleExec: true
        }
      }
    },
    clean: {
      contents: ['./_site'],
      subfolders: ['./_site']
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: [
          '.htaccess', 
          '*.png', 
          '*.ico', 
          '*.txt', 
          '*.xml', 
          '*.html', 
          '*.md', 
          '_config.yml',
          '_assets/js/*',
          '_assets/stylesheets/*',
          'css/*.css',
          '_includes/*.html', 
          '_layouts/*.html', 
          '_includes/components/*', 
          '_includes/*', 
          '_posts/*', 
          '_pages/*',
          'media/*',
          'media/images/*',
          'media/pdf/*',
          '_data/*'
          ],
        tasks: ['jekyll:dist'],
        options: {
          spawn: false,
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: './_site',
          open: {
            target: 'http://localhost:8000'
          }
        }
      }
    }
  });
  require('load-grunt-tasks')(grunt);


  grunt.loadNpmTasks('grunt-contrib-clean');

  
  // Build the full site
  // Less -> sass + js -> jekyll -> _dist
  grunt.registerTask('build', ['clean','jekyll:dist']);

  // Watch for content creation serving from jekyll
  // "_assets" asset pipeline will work: js + sass
  grunt.registerTask('content', ['clean','jekyll:devel']);

  // Server option: tails connect + watch
  // "_assets" asset pipeline will both work: 
  grunt.registerTask('theming', ['build','connect', 'watch']);

  // Watch for content and forget about the rest
  grunt.registerTask('default', ['theming']);


};