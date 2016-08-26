'use strict';

module.exports = {
  ajax(options) {
    let xhr = new XMLHttpRequest();
    xhr.open(options.requestMethod, options.url, true);

    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
        // options.error( xhr.status + ': ' + xhr.statusText );
      } else {
        let response = JSON.parse(xhr.responseText);
        options.success(response);
      }
    };

    xhr.onerror = function() {
      console.log(xhr.status + ': ' + xhr.statusText);
      // options.error(xhr.status + ': ' + xhr.statusText);
    };

    xhr.send();
  }
};
