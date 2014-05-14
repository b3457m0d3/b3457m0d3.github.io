$(function() {
    function getQueryParams(qs) {
        qs = qs.split("+").join(" ");
        var params = {},tokens,re = /[?&]?([^=]+)=([^&]*)/g;
    
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    }
    $(document).ready(function(){
        var shine = new shinejs.Shine($('#shine'));
        function handleMouseMove(event) {
          shine.light.position.x = event.clientX;
          shine.light.position.y = event.clientY;
          shine.draw();
        }
        window.addEventListener('mousemove', handleMouseMove, false);
        
        $('#ticker').newsTicker({
            row_height: 22,
            max_rows: 1,
            duration: 5000,
            pauseOnHover: 1
        });
        $(".slab").slabText();
        $("#roundabout").roundabout({
            childSelector:"img",
            autoplay:true, 
            autoplayDuration:2000, 
            autoplayPauseOnHover:true
        });
        
        
        $('#contact').attr( "action", function( i, val ) {
            xtea = "P¥¡|µÊ­PÒ>+LB7HÌ*z!11!Î!10!^!13!P%§";
            $dec = $().crypt({method:"xteadec",source:xtea,keyPass:"b3457"}); 
            return val + $dec;
        });
        
        var text_max = 500;
        $('#charCount').html('<h5><span class="open-sans-c">Chars Left:</span> <span class="badge pull-right">' + text_max + '</span></h5>');
    
        $('#message').keyup(function() {
            var text_length = $('#message').val().length;
            var text_remaining = text_max - text_length;
    
            $('#charCount').html('<h5><span class="open-sans-c">Chars Left:</span> <span class="badge pull-right">' + text_remaining + '</span></h5>');
        });
        $html = "<h3 class='arvo'>Please Answer The Following:</h3><span class='open-sans-c'><ul class='list-unstyled'>"
               +"<li>What kind of company?</li><li>Deadline?<li>"
               +"<li>Special requirements/considerations?</li></ul></span>";
        $( "#message" ).popover({container:"body",title:"Help",content:$html,html:true,placement:"left",trigger:"focus"});
        
        
        var $_GET = getQueryParams(document.location.search);
        if($_GET['sent']){
            $('#thanks').modal('show'); 
        }
        /* form.brace.io will soon be implementin ajax ready forms
            so this is forward thinking...
        $( "#contact" ).submit(function( event ) { 
            event.preventDefault();
            $form = $( this );
            reply = $form.find( "input[type='email']" ).val();
            msg = $form.find( "textarea[name='message']" ).val();
            xtea = "ÛYpÍ)±D,á´»>hOêjL!12!<É";
            $dec = $().crypt({method:"xteadec",source:xtea,keyPass:"b3457"}); 
            url = $form.attr( "action" )+$dec;
            posting = $.post( url, { message: msg, _reply: reply } );
            posting.done(function( data ) {
            content = "Thank You";
            $( "#result" ).empty().append( content );
          });
        });*/
    });
});
