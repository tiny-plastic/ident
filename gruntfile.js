module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: [
          '**/*/js',
        ],
        tasks: [
          'build'
        ],
      }
    }
  });
  grunt.registerTask('build', [
    ''
  ])
};
