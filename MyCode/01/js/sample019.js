(function ($) {
      // We pass in h3 first, but h1 appears earlier in     
      // the document, so it is first in the wrapper set.     
      alert($('h3, h2, h1').get(0).nodeName);
      // Alerts "H1" 
  })(jQuery);
