/**
 *  Vikky Shostak <vikkyshostak@gmail.com>
 *  Copyright (c) 2016 Koddr https://koddr.me
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Instapaper (https://instapaper.com) provider.
 */

class Instapaper {
  constructor(url = document.location.href, title = document.title) {
    this.url = encodeURIComponent(url);
    this.title = encodeURIComponent(title);
  }
  
  shareWindow() {
    let share_elements = document.querySelectorAll('[data-social=instapaper]');
    let thisUrl = this.url;
    let thisTitle = this.title;

    [...share_elements].forEach((item) => {
      item
        .addEventListener('click', function (event) {
          event.preventDefault();
          item.hasAttribute('data-target') ? thisUrl = encodeURIComponent(item.getAttribute('data-target')) : null;
          item.hasAttribute('data-title') ? thisTitle = encodeURIComponent(item.getAttribute('data-title')) : null;
          let share_url = 'https://www.instapaper.com/edit?url=' + thisUrl + '&title=' + thisTitle;
          return window.open(share_url, 'Share this', 'width=640,height=480,location=no,toolbar=no,menubar=no');
        });
    });
  }
}

export let instapaper_share = new Instapaper().shareWindow();