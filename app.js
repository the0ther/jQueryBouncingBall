$(function() {

  var bounceTime = 1000;
  var ballHeight = 280;
  var ballSize = 80;

  $('#ball').css({
      'width': ballSize,
      'height': ballSize,
      'margin-left': -(ballSize / 2),
      'display': 'block',
      'bottom': ballHeight
  });
  
  $('#shadow').css({
      'width': ballSize * 1.5,
      'height': ballSize / 3,
      'margin-left': -(ballSize * 0.75),
      'display': 'block',
      'opacity': 0.2
  });

  ballBounce();
  ballShadow();

  function ballBounce() {
      $('#ball').animate({
          'bottom': 20
      }, bounceTime, 'easeInQuad', function() {
          $('#ball').animate({
              'bottom': ballHeight
          }, bounceTime, 'easeOutQuad', function() {
              ballBounce();
          });
      });
  }

  function ballShadow() {
      $('#shadow').animate({
          'width': ballSize,
          'height': ballSize / 4,
          'margin-left': -(ballSize / 2),
          'opacity': 1
      }, bounceTime, 'easeInQuad', function() {
          $('#shadow').animate({
              'width': ballSize * 1.5,
              'height': ballSize / 3,
              'margin-left': -(ballSize * 0.75),
              'opacity': 0.2
          }, bounceTime, 'easeOutQuad', function() {
              ballShadow();
          });
      });
  }
});