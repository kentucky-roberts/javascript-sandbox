function clock()
{
    var pauseObj = new Object();

    var totalSeconds = 0;
    var isPaused = false;
    var delay = setInterval(tick, 1000);

    function pause()
    {
        isPaused = true;
    }

    function resume()
    {
        isPaused = false;
    }

    function setTime()
    {
        var ctr;
        $(".icon-play").each(function(){
            if( $(this).parent().hasClass('hide') )
                ctr = ($(this).attr('id')).split('_');
        });

        $("#hour_" + ctr[1]).text(pad(Math.floor(totalSeconds/3600)));
        $("#min_" + ctr[1]).text(pad( Math.floor((totalSeconds/60)%60)));
        $("#sec_" + ctr[1]).text(pad(parseInt(totalSeconds%60)));
    }

    function tick()
    {
        ++totalSeconds;

        if (!isPaused)
           setTime();
    }
}