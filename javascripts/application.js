function allowDrop(ev)
    {
        ev.preventDefault();
        }

function drag(ev)
    {
        var t = ev.target.id;
        ev.dataTransfer.setData("ship",t);
        }

function drop(ev)
    {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("ship");
        var height = document.getElementById(data).offsetHeight;
        var p =  parseInt(ev.target.id);
        if(height==60 && data=='ship1' && p%10<=5 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p+1)).style.backgroundColor == ''
        && document.getElementById((p+2)).style.backgroundColor == '' && document.getElementById((p+3)).style.backgroundColor == '' && document.getElementById((p+4)).style.backgroundColor == '')
        {
        document.getElementById(data).remove();
        document.getElementById(p).style.backgroundColor = '#0d2f5a';
        document.getElementById(p+1).style.backgroundColor = '#0d2f5a';
        document.getElementById(p+2).style.backgroundColor = '#0d2f5a';
        document.getElementById(p+3).style.backgroundColor = '#0d2f5a';
        document.getElementById(p+4).style.backgroundColor = '#0d2f5a';
        }
var p1 = Math.floor(p/10);
var p2 = p%10;

if(height>60 && data=='ship1' && p1<=5 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p1+1)*10+p2).style.backgroundColor == ''
&& document.getElementById((p1+2)*10+p2).style.backgroundColor == '' && document.getElementById((p1+3)*10+p2).style.backgroundColor == '' && document.getElementById((p1+4)*10+p2).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#0d2f5a';
            document.getElementById((p1+1)*10+p2).style.backgroundColor = '#0d2f5a';
            document.getElementById((p1+2)*10+p2).style.backgroundColor = '#0d2f5a';
            document.getElementById((p1+3)*10+p2).style.backgroundColor = '#0d2f5a';
            document.getElementById((p1+4)*10+p2).style.backgroundColor = '#0d2f5a';
            }
//red
if(height==60 && data=='ship2' && p%10<=6 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p+1)).style.backgroundColor == ''
    && document.getElementById((p+2)).style.backgroundColor == '' && document.getElementById((p+3)).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#FF0000';
            document.getElementById(p+1).style.backgroundColor = '#FF0000';
            document.getElementById(p+2).style.backgroundColor = '#FF0000';
            document.getElementById(p+3).style.backgroundColor = '#FF0000';
            }
    var p1 = Math.floor(p/10);
    var p2 = p%10;

    if(height>60 && data=='ship2' && p1<=6 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p1+1)*10+p2).style.backgroundColor == ''
        && document.getElementById((p1+2)*10+p2).style.backgroundColor == '' && document.getElementById((p1+3)*10+p2).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#FF0000';
            document.getElementById((p1+1)*10+p2).style.backgroundColor = '#FF0000';
            document.getElementById((p1+2)*10+p2).style.backgroundColor = '#FF0000';
            document.getElementById((p1+3)*10+p2).style.backgroundColor = '#FF0000';
            }

        //green
        if(height==60 && data=='ship3' && p%10<=7 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p+1)).style.backgroundColor == ''
            && document.getElementById((p+2)).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#00FF00';
            document.getElementById(p+1).style.backgroundColor = '#00FF00';
            document.getElementById(p+2).style.backgroundColor = '#00FF00';
            }
            var p1 = Math.floor(p/10);
            var p2 = p%10;

            if(height>60 && data=='ship3' && p1<=7 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p1+1)*10+p2).style.backgroundColor == ''
                && document.getElementById((p1+2)*10+p2).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#00FF00';
            document.getElementById((p1+1)*10+p2).style.backgroundColor = '#00FF00';
            document.getElementById((p1+2)*10+p2).style.backgroundColor = '#00FF00';
            }

                //black
                if(height==60 && data=='ship4' && p%10<=8 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p+1)).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#000000';
            document.getElementById(p+1).style.backgroundColor = '#000000';
            }
                    var p1 = Math.floor(p/10);
                    var p2 = p%10;

                    if(height>60 && data=='ship4' && p1<=8 && document.getElementById(p).style.backgroundColor == '' && document.getElementById((p1+1)*10+p2).style.backgroundColor == '')
        {
            document.getElementById(data).remove();
            document.getElementById(p).style.backgroundColor = '#000000';
            document.getElementById((p1+1)*10+p2).style.backgroundColor = '#000000';
            }
                        //console.log(document.getElementById('ship1'));
        if(document.getElementById('ship1')==null && document.getElementById('ship2')==null && document.getElementById('ship3')==null && document.getElementById('ship4')==null)
        {
            document.getElementById("submit").disabled = false;
        }
    }

    function ship1Function()
    {
        var h1 = $('#ship1').height();
        var h2 = $('#ship1 div').height();
        var w1 = $('#ship1').width();
        var w2 = $('#ship1 div').width();
        console.log(h1);
        $('#ship1').css('height', w1);
        $('#ship1').css('width', h1);
        $('#ship1 div').css('height', w2);
        $('#ship1 div').css('width', h2);
    }

    function ship2Function()
    {
        var h1 = $('#ship2').height();
        var h2 = $('#ship2 div').height();
        var w1 = $('#ship2').width();
        var w2 = $('#ship2 div').width();
        console.log(h1);
        $('#ship2').css('height', w1);
        $('#ship2').css('width', h1);
        $('#ship2 div').css('height', w2);
        $('#ship2 div').css('width', h2);
    }

    function ship3Function()
    {
        var h1 = $('#ship3').height();
        var h2 = $('#ship3 div').height();
        var w1 = $('#ship3').width();
        var w2 = $('#ship3 div').width();
        console.log(h1);
        $('#ship3').css('height', w1);
        $('#ship3').css('width', h1);
        $('#ship3 div').css('height', w2);
        $('#ship3 div').css('width', h2);
    }

    function ship4Function()
    {
        var h1 = $('#ship4').height();
        var h2 = $('#ship4 div').height();
        var w1 = $('#ship4').width();
        var w2 = $('#ship4 div').width();
        console.log(h1);
        $('#ship4').css('height', w1);
        $('#ship4').css('width', h1);
        $('#ship4 div').css('height', w2);
        $('#ship4 div').css('width', h2);
    }
    function submitMatrix()
    {
        console.log(document.getElementById("93").style.backgroundColor);
        var sampleChatRef = new Firebase('https://codeday.firebaseio.com/');
                        var fredNameRef = sampleChatRef.child('users/fred/name');
        sampleChatRef.set({first: 'Fred', last: 'Flintstone'});

    }
