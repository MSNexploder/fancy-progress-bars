// Copyright (c) 2010 Ivan Vanderbyl
// Originally found at http://ivan.ly/ui
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// slightly modified for fancy-progress-bars examples by Stefan Huber

(function($) {
  // Simple wrapper around jQuery animate to simplify animating progress from your app
  // Inputs: Progress as a percent, Callback
  // TODO: Add options and jQuery UI support.
  $.fn.animateProgress = function(progress, callback) {
    return this.each(function() {
      $(this).animate({
        width: progress+'%'
      }, {
        duration: 2000,

        // swing or linear
        easing: 'swing',

        // this gets called every step of the animation, and updates the label
        step: function(progress) {
          var labelEl = $('> span', this);

          if (Math.ceil(progress) == 100) {
            labelEl.text('Done');
          } else {
            labelEl.text('processing... ' + Math.ceil(progress) + '%');
          }
        },
        complete: function(scope, i, elem) {
          if (callback) {
            callback.call(this, i, elem);
          }
        }
      });
    });
  };
})(jQuery);

$(function() {
  // Set initial value
  $('.base > div > div').css('width', '7%');

  // Simulate some progress
  $('.base > div > div').animateProgress(43, function() {
    $(this).animateProgress(79, function() {
      setTimeout(function() {
        $('.base > div > div').animateProgress(100, function() {
        });
      }, 2000);
    });
  });
});
