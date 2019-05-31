//Adapted from StackOverflow user jcubic

$('<img/>').attr('src', 'images/background.png').on('load', function() {
   $(this).remove(); // prevent memory leaks as @benweet suggested
   $('.hero').css('background-image', 'url(images/background.png)');
});
