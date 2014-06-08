$(function() {
    function getQueryParams(qs) {
        qs = qs.split("+").join(" ");
        var params = {},tokens,re = /[?&]?([^=]+)=([^&]*)/g;
    
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    }
    $(document).ready(function() {
        
        var $validator = $("#commentForm").validate({
		  rules: {
		    emailfield: {
		      required: true,
		      email: true,
		      minlength: 3
		    },
		    namefield: {
		      required: true,
		      minlength: 3
		    },
		    bodyfield: {
		      required: true,
		      minlength: 3,
		      url: true
		    }
		  }
		});
        $('#rootwizard').bootstrapWizard({
            'nextSelector': '.button-next',
            'previousSelector': '.button-previous',
            'firstSelector': '.button-first', 
            'lastSelector': '.button-last',
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;
                var $percent = ($current/$total) * 100;
                $('#rootwizard').find('.progress-bar').css({width:$percent+'%'});
            }
        });
        $('.tab-pane').perfectScrollbar();
        $("#hireme").click(function(){
            $.scrollTo( "#contact", 1000, {onAfter:function(){ $("textarea").focus(); }} );
        }); 
        
        //=========================================================================
        
        
        /*if (IEversion < 10) {                
            xdr = new XDomainRequest();   // Creates a new XDR object.
            xdr.open("GET", url); // Creates a cross-domain connection with our target server using GET method. 
            xdr.send(); //Send string data to server
            xdr.onload = function () { //After load, parse data returned by xdr.responseText            
                $('#result').html($.parseJSON(xdr.responseText));
            };              
        } else {
            $.getJSON(url, function(data) {
                $('#result').html(data);
            })
        //}*/

        
        //=========================================================================*/
        
        
        $('#ticker').newsTicker({
            row_height: 22,
            max_rows: 1,
            duration: 5500,
            pauseOnHover: 0,
            hasMoved: function() {
                $('#sticker').fadeOut(200, function(){
                    $('#sticker').html($('#ticker li:first').data('legend'));
                    $(this).fadeIn(400);
                });
            },
            pause: function(){
                $(".play").hide();
                $(".pause").fadeIn(2000);
            },
            unpause: function(){
                $(".pause").hide();
                $(".play").fadeIn(2000).fadeOut(500);
            }
        });
        $('#sticker').html($('#ticker li:first').data('legend'));
        /*$("#sticker").hover( 
            function() {
                $("#ticker").newsTicker('pause');
            }, 
            function() {
                $("#ticker").newsTicker('unpause');
            }
        );*/
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
        $html = "<h5 class='arvo blue'>Please Include The Following:</h3><span class='source-code'><ul class='list-unstyled'>"
               +"<li><i class='fa fa-check-square-o pull-left'></i>What kind of company?</li>"
               +"<li><i class='fa fa-check-square-o pull-left'></i>Deadline?<li>"
               +"<li><i class='fa fa-check-square-o pull-left'></i>Special requirements?</li>"
               +"<li><i class='fa fa-check-square-o pull-left'></i>Do you already have a web host?</li>"
               +"</ul></span>";
        $( "#message" ).popover({container:"body",title:"<span class='open-sans-c h3'>Inquiry Details</span><i class='fa fa-pencil-square-o fa-3x pull-right'></i>",content:$html,html:true,placement:"left",trigger:"focus"});
        
        
        var $_GET = getQueryParams(document.location.search);
        if($_GET['sent']){
            $('#thanks').modal('show'); 
        }
        /* form.brace.io will soon be implementing ajax ready forms
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

