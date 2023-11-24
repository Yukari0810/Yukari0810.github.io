$(function() {
  var count = 0;

  $('#pink').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');
    var eachCount = 0;
    

    // substract 減る動作
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
        
        
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }

      if(eachCount > 0){
        count--;
        eachCount--;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
        
      }
      

    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
        
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }

      if(eachCount < 10){
        count++;
        eachCount++;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      
    });
  });

  $('#green').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');
    var eachCount = 0;
    

    // substract 減る動作
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
        
        
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }

      if(eachCount > 0){
        eachCount--;
        count--;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      

    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
        
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }

      if(eachCount < 10){
        eachCount++;
        count++;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      
    });
  });

  $('#orange').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');
    var eachCount = 0;
    

    // substract 減る動作
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
        
        
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }

      if(eachCount > 0){
        eachCount--;
        count--;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      

    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
        
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }

      if(eachCount < 10){
        count++;
        eachCount++;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      
    });
  });

  $('#red').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');
    var eachCount = 0;
    

    // substract 減る動作
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
        
        
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }

      if(eachCount > 0){
        count--;
        eachCount--;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      

    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
        
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }

      if(eachCount < 10){
        count++;
        eachCount++;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      
    });
  });

  $('#purple').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');
    var eachCount = 0;
    

    // substract 減る動作
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
        
        
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }

      if(eachCount > 0){
        count--;
        eachCount--;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      

    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
        
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }

      if(eachCount < 10){
        eachCount++;
        count++;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      
    });
  });

  $('#yellow').each(function() {
    var el  = $(this);
    var add = $('.spinner-add');
    var sub = $('.spinner-sub');
    var eachCount = 0;
    

    // substract 減る動作
    el.parent().on('click', '.spinner-sub', function() {
      if (el.val() > parseInt(el.attr('min'))) {
        el.val(function(i, oldval) {
          return --oldval;
        });
        
        
      }
      // disabled
      if (el.val() == parseInt(el.attr('min'))) {
        el.prev(sub).addClass('disabled');
      }
      if (el.val() < parseInt(el.attr('max'))) {
        el.next(add).removeClass('disabled');
      }

      if(eachCount > 0){
        count--;
        eachCount--;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      

    });

    // increment
    el.parent().on('click', '.spinner-add', function() {
      if (el.val() < parseInt(el.attr('max'))) {
        el.val(function(i, oldval) {
          return ++oldval;
        });
        
      }
      // disabled
      if (el.val() > parseInt(el.attr('min'))) {
        el.prev(sub).removeClass('disabled');
      }
      if (el.val() == parseInt(el.attr('max'))) {
        el.next(add).addClass('disabled');
      }

      if(eachCount < 10){
        eachCount++;
        count++;
        $('#result').text(count * 10);
        /* if(count != 0){
          $('.numberCircle').css('display', 'block');
          $('.num').text(count);
        }else if(count == 0){
          $('.numberCircle').css('display', 'none');
        } */
      }
      
    });
  });

});