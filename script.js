function GetTime(){
    var now= new Date(); //oluşturduğumuz değişkene bugünün parametrelerini atıyoruz
    var hour= now.getHours(); //atadığımız parametrelerden saate erişiyoruz ve değişkene atıyoruz
    var minute= now.getMinutes();//atadığımız parametrelerden dakikaya erişiyoruz ve değişkene atıyoruz
    var second=  now.getSeconds();//atadığımız parametrelerden saniyeye erişiyoruz ve değişkene atıyoruz

    var day=now.getDate(); //atadığımız parametrelerden güne erişiyoruz ve değişkene atıyoruz
    var month=now.getMonth()+1; //+1 ekliyoruz çünkü js 0 dan saymaya başlıyor
    var year=now.getFullYear(); //atadığımız parametrelerden yıla erişiyoruz ve değişkene atıyoruz

    //İf blokları; alınan parametreler tek basamaklı hale geldiğinde yanına 0 konulması için oluşturuldu

    if (hour<10){
        document.getElementById("hour").innerText="0"+hour;
    }
    else{
        document.getElementById("hour").innerText=hour;
    }
    if (minute<10){
        document.getElementById("minute").innerText="0"+minute;
    }
    else{
        document.getElementById("minute").innerText=minute;
    }
    if (second<10){
        document.getElementById("second").innerText="0"+second;
    }
    else{
        document.getElementById("second").innerText=second;
    }

    document.getElementById("date").innerText=day+" / "+month+" / "+year;
}

setInterval(function(){GetTime();},1000); //saniyede 1 güncellemesi için ayarladık