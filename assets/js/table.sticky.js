// ------------------------------------------------------------------------- //
// DETECTING A TOUCH DEVICE
// ------------------------------------------------------------------------- //
function isTouchDevice() {
  return !!('ontouchstart' in window || window.navigator.msMaxTouchPoints);
}

// ------------------------------------------------------------------------- //
// PLUGIN FOR DETECTING SCROLL STOP/START
// ------------------------------------------------------------------------- //
(function (factory) {
  // UMD[2] wrapper for jQuery plugins to work in AMD or in CommonJS.
  //
  // [2] https://github.com/umdjs/umd

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  // $.event.dispatch was undocumented and was deprecated in jQuery 1.7[1]. It
  // was replaced by $.event.handle in jQuery 1.9.
  //
  // Use the first of the available functions to support jQuery <1.8.
  //
  // [1] https://github.com/jquery/jquery-migrate/blob/master/src/event.js#L25
  var dispatch = $.event.dispatch || $.event.handle;

  var special = $.event.special,
    uid1 = 'D' + +new Date(),
    uid2 = 'D' + (+new Date() + 1);

  special.scrollstart = {
    setup: function (data) {
      var _data = $.extend(
        {
          latency: special.scrollstop.latency,
        },
        data
      );

      var timer,
        handler = function (evt) {
          var _self = this,
            _args = arguments;

          if (timer) {
            clearTimeout(timer);
          } else {
            evt.type = 'scrollstart';
            dispatch.apply(_self, _args);
          }

          timer = setTimeout(function () {
            timer = null;
          }, _data.latency);
        };

      $(this).bind('scroll', handler).data(uid1, handler);
    },
    teardown: function () {
      $(this).unbind('scroll', $(this).data(uid1));
    },
  };

  special.scrollstop = {
    latency: 250,
    setup: function (data) {
      var _data = $.extend(
        {
          latency: special.scrollstop.latency,
        },
        data
      );

      var timer,
        handler = function (evt) {
          var _self = this,
            _args = arguments;

          if (timer) {
            clearTimeout(timer);
          }

          timer = setTimeout(function () {
            timer = null;
            evt.type = 'scrollstop';
            dispatch.apply(_self, _args);
          }, _data.latency);
        };

      $(this).bind('scroll', handler).data(uid2, handler);
    },
    teardown: function () {
      $(this).unbind('scroll', $(this).data(uid2));
    },
  };
});

// ------------------------------------------------------------------------- //
// STICKY TABLE HEADER
// ------------------------------------------------------------------------- //
$(function () {
  $.fn.stickyTableHeader = function () {
    return this.each(function () {
      var $this = $(this),
        $sticky,
        $wrapper = $this.parents('.sticky-wrapper');

      // INIT
      function init() {
        $sticky = $this.clone();
        $sticky
          .find('tbody')
          .remove()
          .end()
          .insertBefore($this)
          .addClass('sticky');
        resizeDesktop();
      }

      // DESKTOP VERSION
      // ------------------------------------------------------------------------- //

      // STICK
      // NOTE: sticks table header to top of the screen when scrolling
      function stickDesktop() {
        var offsetLeft = $wrapper.offset().left,
          left = offsetLeft - $(window).scrollLeft();

        $wrapper
          .find('.sticky')
          .css({ left: left + 'px', width: $this.outerWidth() + 'px' })
          .addClass('sticky-desktop');
      }

      // RESIZE
      // NOTE: changes th width on window resize
      function resizeDesktop() {
        $sticky.find('th').each(function (index) {
          $(this).css('width', $this.find('th').eq(index).outerWidth() + 'px');
        });
      }

      // REVEAL
      // NOTE: toggles sticky table header on scrolling
      function revealDesktop() {
        var subheaderOffset = 54;

        if (!$('.subheader.sliding').is('.scroll-down')) {
		  subheaderOffset += $('.subheader.sliding').height();
		  //console.log("With subheader");
		  	$(".subheader.sliding").on('transitionend', function() {
				//alert('');
				//$sticky.css({ top: subheaderOffset + 'px' });
				//console.log("Without subheader transition finished");
			});
			$sticky.css({ top: subheaderOffset + 'px' });
			//   if($(".subheader.sliding").on('transitionend')){
			// 	  console.log("Yes2");
			// 		$sticky.css({ top: subheaderOffset + 'px' });
			//   }
		}
		else {
			subheaderOffset = 54;
			$sticky.css({ top: subheaderOffset + 'px' });
		}

        var offset = $(this).scrollTop(),
          tableOffsetTop = $this.offset().top - subheaderOffset,
          tableOffsetBottom =
            tableOffsetTop +
            $this.height() -
            $this.find('.thead-main-sticky').height();

        if (offset < tableOffsetTop || offset > tableOffsetBottom) {
          $sticky.hide();
          $sticky.find('.thead-main-sticky').hide();
        } else if (
          offset >= tableOffsetTop &&
          offset <= tableOffsetBottom &&
          $sticky.is(':hidden')
        ) {
          $sticky.show();
          $sticky.find('.thead-main-sticky').show();
        }
      }

      // MOBILE VERSION
      // ------------------------------------------------------------------------- //

      // STICK
      // NOTE: sticks table header to top of the screen when scrolling
      function stickTouch() {
        var offsetTop = $wrapper.offset().top,
          top = offsetTop - $(window).scrollTop();

        $wrapper
          .find('.sticky')
          .css({ top: -1 * top + 'px' })
          .addClass('sticky-touch');

        // NOTE: -1*top: makes negative value positive
      }

      // RESIZE
      // NOTE: changes th width on window resize
      function resizeTouch() {
        $sticky.find('th').each(function (index) {
          $(this).css('width', $this.find('th').eq(index).outerWidth() + 'px');
        });
      }

      // REVEAL
      // NOTE: hides table header on scroll start
      // show table header on scroll stop
      // to avoid unsmooth scrolling
      function revealTouch() {
        $(window)
          .on('scrollstart', function () {
            $sticky.hide();
          })
          .on('scrollstop', function () {
            var offset = $(this).scrollTop(),
              tableOffsetTop = $this.offset().top,
              tableOffsetBottom =
                tableOffsetTop +
                $this.height() -
                $this.find('.thead-main-sticky').height();

            if (offset > tableOffsetTop && offset < tableOffsetBottom) {
              $sticky.show();
            }
          });
      }

      // GO AHEAD
      // ------------------------------------------------------------------------- //
      $(window).resize(function () {
        if (isTouchDevice()) {
          resizeTouch();
          stickTouch();
        } else {
          resizeDesktop();
          stickDesktop();
        }
      });

      $(window).scroll(function () {
        if (isTouchDevice()) {
          stickTouch();
          revealTouch();
        } else {
          stickDesktop();
          revealDesktop();
        }
      });

      init();
    });
  };
});

// ------------------------------------------------------------------------- //
// DOCUMENT READY
// ------------------------------------------------------------------------- //
$(document).ready(function () {
  $('.sticky-wrapper .table').stickyTableHeader();
});
