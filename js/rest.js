$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "http://www.syrscreenprinting.com/api/hello/b3457",
      dataType: 'json',
      async: false,
      headers: {
        "Authorization", btoa('b3457' + ":" + 'w1nn1ng')
      },
      success: function (){
        $('#result').html('Thanks for your comment!'); 
      }
    });
});