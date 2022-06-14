
/*
void calculate()
   {

      r=Math.sqrt((z*z)+((x-z)/2));
      sx=((x+y)/2)+r;
      sy=((x+y)/2)-r;
   }
   */
   var r=0;
   var sx=0;
   var sy=0;
   var xstress;
   var ystress;
   var sstress;
  function calculateStress()
  {
    xstress=parseInt(document.getElementById('xstress').value);
    ystress=parseInt(document.getElementById('ystress').value);
    sstress=parseInt(document.getElementById('sstress').value);
    let shearsqr=sstress*sstress;
     let axissqr=((xstress-ystress)/2)*((xstress-ystress)/2);
     r=Math.sqrt(axissqr+shearsqr);
     sx=((xstress+ystress)/2)+r;
     sy=((xstress+ystress)/2)-r;
     document.getElementById("reslab").innerHTML= "The Maximum and Minimum stresses are :"+sx+" N in x-axis, and "+sy+" N in y-axis";
     return false;
  }
  function refreshOf()
  {
    document.getElementById("reslab").innerHTML="";
    document.getElementById('xstress').value="";
    document.getElementById('ystress').value="";
    document.getElementById('sstress').value="";
    r=0;
    sx=0;
    sy=0;
  }
