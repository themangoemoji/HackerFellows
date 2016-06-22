#### Task Runners

  * Allow us to be lazy when:

    * Compiling CSS

    * Running test suites

    * Compressing Images

    * ....

  * Options:

    * GRUNT

    * Broccoli

    * GULP

      * Setup GULP!

        ```bash
        npm install --global gulp

        mkdir <project-dir>

        npm init

        npm install --save-dev gulp
        ```

      * Make `gulpfile.js`

        ```js
        var gulp = require('gulp');

        gulp.task('default', function() {

          // place code for your default task here
          console.log('Is this the real life?");

        });
        ```

      * GULP has `.task()` methods

        ```js
        var gulp = require('gulp');

        gulp.task( '<name>', ['<dependencies>'], function() {

          <task>

        });
        ```
