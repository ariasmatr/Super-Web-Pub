console.log("me mato, cosorro");

/* LIGHT/DARK MODE */
document.getElementById('switchMode').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark');
    }
  });



/* Masonry Gallery */
$(document).ready(function() {
    var $gallery = $('.gallery');
    var masonry = new Masonry($gallery[0], {
        itemSelector: '.item',
        columnWidth: '.item',
        percentPosition: true,
        gutter: 20
    });
});

$(window).resize(function() {
    masonry.layout();
});