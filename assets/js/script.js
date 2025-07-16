document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('#masonry-grid');

    if (grid) {
        new Masonry(grid, {
            itemSelector: '.col',
            percentPosition: true,
        });
    } else {
        console.error("Elemen #masonry-grid tidak ditemukan.");
    }
});
