/**
 * Created by artem on 11/9/15.
 */
module.exports = function (grunt, options) {
    return {
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
    }
};