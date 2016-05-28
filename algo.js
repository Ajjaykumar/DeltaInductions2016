var deadline =prompt("Please Enter the deadline","Day Month Year hr:min:sec");
function remaining(deadline)
{
 var total=Date.parse(deadline)-Date.parse(new Date());
 var seconds=Math.floor((total/1000)%60);
 var minutes=Math.floor((total/(1000*60))%60);
 var hours=Math.floor((total/(1000*60*60))%60);
 var days=Math.floor(total/(1000*60*60*24));
   return {
     total,
     days,
     hours,
     minutes,
     seconds
  };
}
  

   setInterval(update,1000);
     function update()
    {
    var t = remaining(deadline);
   
   
 
    if(t.total<=0)
     {
      document.getElementById("demo").innerHTML = 'Deadline Achieved'
     }
     else 
     {
      document.getElementById("numbers").innerHTML = t.days+'   :   '  +   t.hours +'   :   ' + t.minutes +'   :   '+ t.seconds;
     }
   }