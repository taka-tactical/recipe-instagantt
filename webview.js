'use strict';

module.exports = Franz => {
  function getMessages() {
    let directCount   = 0;
    let indirectCount = 0;

    const item = document.querySelector('a.newsandupdates > span.label.label-warning');

    if (item && item.innerText) {
      indirectCount = parseInt(item.innerText, 10);
    }

    Franz.setBadge(directCount, indirectCount);
  }

  Franz.loop(getMessages);
};
