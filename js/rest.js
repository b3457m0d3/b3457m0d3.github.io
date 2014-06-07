$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "http://syrscreenprinting.com/api/hello/b3457",
      dataType: 'json',
      async: false,
      success: function (){
        $('#result').html('Thanks for your comment!'); 
      }
    });
});
/*/*==================================
$(document).ready(function(){
    var client = new $.RestClient('http://www.syrscreenprinting.com/api/', {
      username: 'b3457',
      password: 'w1nn1ng'
    });

    client.add('hello');

    client.hello.read('b3457').done(
        function(data){
            $('#result').html(data).addClass('white');
        }
    );
});
//======================================*/