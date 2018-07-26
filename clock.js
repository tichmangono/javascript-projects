function digitalClock(){
    var date =new Date();
    //console.log(date)
    var dom = date.getDate();
    var dow = date.getDay();
    var mon = date.getMonth();
    var hrs = date.getHours() +'';
    var min = date.getMinutes() +'';
    var sec = date.getSeconds()+'';

    //console.log(dow)
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    if (hrs.length <2){
      hrs = '0'+hrs;
    }
    if (min.length <2){
      min = '0'+min;
    }
    if (sec.length <2){
      sec = '0'+sec;
    }

    var wd = days[dow];
    var clock =   wd +" "+ hrs + ":"+ min +":" + sec;
    //console.log(clock);

    document.getElementById('clock').innerHTML = clock;

  }

digitalClock()
setInterval(digitalClock, 1000)
