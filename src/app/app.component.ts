import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angTheme03';
  public ngOnInit() {
    $(document).ready(function () {
      console.log("...jquery is ready");
      // $("button").click(function () {
      //   var div = $("div");
      //   div.animate({ left: '100px' }, "slow");
      //   div.animate({ fontSize: '5em' }, "slow");
      // });
      // function to activate the main menu functionality
      const $windowWidth = $(".subviews");
      const $body = $('slidingbar-area').parent();
      var mainNavigation = $('.main-navigation');
      $('.main-navigation-menu > li.active').addClass('open');
      $('.main-navigation-menu > li a').on('click', function () {

        if ($(this).parent().children('ul').hasClass('sub-menu') && ((!$body.hasClass('navigation-small') || $windowWidth < 767) || !$(this).parent().parent().hasClass('main-navigation-menu'))) {
          if (!$(this).parent().hasClass('open')) {
            $(this).parent().addClass('open');
            $(this).parent().parent().children('li.open').not($(this).parent()).not($('.main-navigation-menu > li.active')).removeClass('open').children('ul').slideUp(200);
            $(this).parent().children('ul').slideDown(200, function () {
              if (mainNavigation.height() > $(".main-navigation-menu").outerHeight()) {

                mainNavigation.scrollTo($(this).parent("li"), 300, {
                  onAfter: function () {
                    if ($body.hasClass("isMobile") == false) {
                      mainNavigation.perfectScrollbar('update');
                    }
                  }
                });
              } else {

                mainNavigation.scrollTo($(this).parent("li"), 300, {
                  onAfter: function () {
                    if ($body.hasClass("isMobile") == false) {
                      mainNavigation.perfectScrollbar('update');
                    }
                  }
                });
              }
            });
          } else {
            if (!$(this).parent().hasClass('active')) {
              $(this).parent().parent().children('li.open').not($('.main-navigation-menu > li.active')).removeClass('open').children('ul').slideUp(200, function () {
                if (mainNavigation.height() > $(".main-navigation-menu").outerHeight()) {
                  mainNavigation.scrollTo(0, 300, {
                    onAfter: function () {
                      if ($body.hasClass("isMobile") == false) {
                        mainNavigation.perfectScrollbar('update');
                      }
                    }
                  });
                } else {
                  mainNavigation.scrollTo($(this).parent("li").closest("ul").children("li:eq(0)"), 300, {
                    onAfter: function () {
                      if ($body.hasClass("isMobile") == false) {
                        mainNavigation.perfectScrollbar('update');
                      }
                    }
                  });
                }
              });
            } else {
              $(this).parent().parent().children('li.open').removeClass('open').children('ul').slideUp(200, function () {
                if (mainNavigation.height() > $(".main-navigation-menu").outerHeight()) {
                  mainNavigation.scrollTo(0, 300, {
                    onAfter: function () {
                      if ($body.hasClass("isMobile") == false) {
                        mainNavigation.perfectScrollbar('update');
                      }
                    }
                  });
                } else {
                  mainNavigation.scrollTo($(this).parent("li"), 300, {
                    onAfter: function () {
                      if ($body.hasClass("isMobile") == false) {
                        mainNavigation.perfectScrollbar('update');
                      }
                    }
                  });
                }
              });
            }
          }
        } else {
          $(this).parent().addClass('active');
        }
      });

    });
  }
}
