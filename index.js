// variable for datapicker

var dataPicker = document.getElementById('dataPicker');
var choseDate = document.getElementById('choseDate');

// variable for prinitng values

var ageYear=document.getElementById('ageYear');
var ageMonth=document.getElementById('ageMonth');
var ageDays=document.getElementById('ageDays');
var ageHours =document.getElementById('ageHours');
var ageSeconds=document.getElementById('ageSeconds');
var ageMiliSeconds =document.getElementById('ageMiliSeconds');

dataPicker.addEventListener('change',function(){
    var options={year:'numeric',month:'long',day:'numeric'};
    var selectedDate = new Date(this.value);
    var DOB=selectedDate.toDateString('en-US',options);

    choseDate.innerHTML= "DOB : " + " " + DOB;

        
    var miliSeconds_Btw_DOB = Date.parse(DOB);
    var miliSeconds_Btw_Now = Date.now();

    var age_in_MiliSeconds = miliSeconds_Btw_Now - miliSeconds_Btw_DOB;

    var miliSecond=age_in_MiliSeconds;
    var second = 1000;
    var minute = second*60;
    var hour = minute*60;
    var day = hour*24;
    var month = day*30;;
    var year = day*365;

    // now start the calculator

    var years=Math.round(miliSecond/year);
    var month=years*12;
    var days=years*365;
    var hours=Math.round(miliSecond/hour);
    var second = Math.round(miliSecond/second);

   // now it is time to print value in boxes
    
 ageYear.innerHTML= years
 ageMonth.innerHTML=month
 ageDays.innerHTML=day
 ageHours.innerHTML =hours
 ageSeconds.innerHTML=second
 ageMiliSeconds.innerHTML=miliSecond;

  document.querySelector('.age-calc').classList.add('expand');

})