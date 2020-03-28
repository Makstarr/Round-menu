$(document).ready(function () {
    let rotateMenu = () => {
        let items = $('.round-menu-item')
        let i = 30
        $('.round-menu-title__text').toggleClass('hidden');
        $('.round-menu-link ').toggleClass('hidden');

        items.each(function( index ) {
                $( this ).toggleClass('rotated');
                $( this ).toggleClass('percent-sized-'+i);
                $( this ).toggleClass('shadow-animated');
                $( this ).toggleClass('shadow-animated-r');
                i+=40
          });
          $('.round-menu-title').toggleClass('percent-sized-20');
    }
    document.getElementById('round-menu-title').addEventListener('click',rotateMenu)
});