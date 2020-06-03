  /*=======================================
    counter
  ======================================= */

  if ($('.counters').length > 0) {
    var a = 0;
    $main_window.scroll(function () {
      var oTop = $('.counters').offset().top - window.innerHeight;
      if (a === 0 && $main_window.scrollTop() > oTop) {
        $('.count').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
        });
        a = 1;
      }
    });
  }
