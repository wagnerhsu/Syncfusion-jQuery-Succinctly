(function ($) {
      jQuery('<ul></ul>')
          .append('<li><a>jQuery.com</a></li><li><a>jQuery Documentation</a></li>')
          .find('a:first')
          .attr('href', 'http://www.jquery.com')
          .end()
          .find('a:eq(1)')
          .attr('href', 'http://docs.jquery.com')
          .end()
          .find('a')
          .click(function () { return confirm('Leave this page?'); })
          .end()
          .appendTo('body');
  })(jQuery); 