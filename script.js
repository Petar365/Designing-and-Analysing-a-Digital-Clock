var saat;
var counterAlarm=0;
var alar=[null,null,null,null,null];
alar.length=5;
function addZero(i){
    if (i<10){
        return i="0"+i;
    }
    return i
}
$(document).ready(setInterval(function clock() {
    $("#hour").html(addZero(new Date().getHours()))
    $("#minute").html(addZero(new Date().getMinutes()))
    $("#second").html(addZero(new Date().getSeconds()))
    $("#alarmsSet").text($(".alarmInput li").length+"/5 Alarms")
},1000))
$('.clockpicker').clockpicker()
$("#submit").click(function () {
    if (counterAlarm<5) {
var time=$("#setalarm").val()
var liItem=$("<li id='listItem' class='row'>"+
    "<p id='number' style='display: none'>"+(counterAlarm+1)+"</p>"+
    "<p id='t' class='col-11'>"+time+"</p>"+
    "<button id='removeAlarm' class='close col' aria-label='close'>"+"<span>"+"&times;"+"</span>"+
    "</button>"+
    "</li>")

        $(".alarmInput").append(liItem)
        alar[counterAlarm] = $("#setalarm").val()
        counterAlarm++;
    }
    else {
        alert("Maksimum Broj Alarmi")
    }
})


setInterval(function () {
    saat=$("#hour").html()+":"+$("#minute").html()
    if (saat === alar[0]||saat === alar[1]||saat === alar[2]||saat === alar[3]||saat === alar[4]){
        $("#myAudio").trigger("play")
    }

},1000)



$(document).on("click","#removeAlarm",function () {
    var i=$(this).siblings("#number").text()-1;
    alar[i]=null;
    $(this).parent().remove()
    counterAlarm--;
    })

