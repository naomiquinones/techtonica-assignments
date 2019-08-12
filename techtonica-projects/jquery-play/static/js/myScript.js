$(document).ready(function() {
  // console.log('myScript.js loaded!');
  $('#red-sentence').click(function() {
    // First remove the purple-text class in case it was added first.
    $(this).removeClass('purple-text');
    // Then add the red-text class to turn the sentence red.
    $(this).addClass('red-text');
    $(this).css('font-size','2em');
  });

  $('#blue-button').click(function() {
    // We can also "chain" methods together like this:
    $('#blue-sentence')
    .removeClass('purple-text')
    .addClass('blue-text');
  });

  $('#purple-button').click(function() {
    $('.colorful-sentence').addClass('purple-text');
  });

  $('h1').hover( function() {
    $(this).css("color",'pink');
  }, function() {
    $(this).css("color","brown");
  });
});

