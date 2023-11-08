// page情况下的site-page-fiexd
window.onload = function() {  
    var site_page = document.querySelector('#menus > div.menus_items > div > a');
    if (window.getComputedStyle(site_page).backgroundColor === '#5da32e') {  
        site_page.style.color = '#fff';
        site_page.setAttribute('style', 'color: #fff;');
    }  
};  