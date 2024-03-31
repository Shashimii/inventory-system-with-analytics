function syncTime() {
    $.ajax({
        url: './php/realTime.php',
        type: 'GET',
        success: function(response) {
            var curTime = response.trim();
            $('#sysTime').text(curTime)
        },

        error: function(xhr, status, error) {
            console.error('time script error: ', error)
        }
    })
}

syncTime();
setInterval(syncTime, 1000)