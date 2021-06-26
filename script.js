var slider1;
var slider2;
var slider3;
var slider4;
var slider5;
var slider6;
var motor1Value;
var motor2Value;
var motor3Value;
var motor4Value;
var motor5Value;
var motor6Value;
document.addEventListener("DOMContentLoaded", function(){
    //Motor1
    slider1 = document.getElementById("slider1");
    motor1Value = document.getElementById('motor1Value');
    motor1Value.innerHTML = slider1.value
    slider1.oninput = function() {
        motor1Value.innerHTML = slider1.value
     }
     //Motor2
     slider2 = document.getElementById("slider2");
    motor2Value = document.getElementById('motor2Value');
    motor2Value.innerHTML = slider2.value
    slider2.oninput = function() {
        motor2Value.innerHTML = slider2.value
     }
     //Motor3
    slider3 = document.getElementById("slider3");
    motor3Value = document.getElementById('motor3Value');
    motor3Value.innerHTML = slider3.value
    slider3.oninput = function() {
        motor3Value.innerHTML = slider3.value
     }//motor4
     slider4 = document.getElementById("slider4");
     motor4Value = document.getElementById('motor4Value');
     motor4Value.innerHTML = slider4.value
     slider4.oninput = function() {
         motor4Value.innerHTML = slider4.value
      }//motor5
     slider5 = document.getElementById("slider5");
     motor5Value = document.getElementById('motor5\Value');
     motor5Value.innerHTML = slider5.value
     slider5.oninput = function() {
         motor5Value.innerHTML = slider5.value
      }//motor6
     slider6 = document.getElementById("slider6");
     motor6Value = document.getElementById('motor6Value');
     motor6Value.innerHTML = slider6.value
     slider6.oninput = function() {
         motor6Value.innerHTML = slider6.value
      }
});



// document.onload = ()=>{




// }




  
  


// motor1Value.innerHTML = motor1slider.innerHTML;

