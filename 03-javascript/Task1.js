function task1(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var n3=parseInt(document.getElementById("num3").value);
    document.getElementById("res1").innerText="Average = "+ (n1+n2+n3)/3;
}
function task2(){
    var n1=parseInt(document.getElementById("num11").value);
    var n2=parseInt(document.getElementById("num21").value);
    var n3=parseInt(document.getElementById("num31").value);
    var avg= (n1+n2+n3)/3;
    document.getElementById("res2").innerText="Average = "+ avg;
}    
function task3(){
    var n=parseInt(document.getElementById("n").value);
    var sum=(n*(n+1))/2;
    document.getElementById("res3").innerText="Sum = "+sum;
}
function task4(){
    var n=parseInt(document.getElementById("x").value);
    var avg=(n+1)/2;
    document.getElementById("res4").innerText="Average = "+avg;
}
function task5(){
    var cp=parseInt(document.getElementById("cp").value);
    var sp=parseInt(document.getElementById("sp").value);
    var P=((sp-cp)/cp)*100;
    document.getElementById("res5").innerText="Profit Percentage = "+P+"%";
}
function task6(){
    var pa=parseInt(document.getElementById("pa").value);
    var p=parseInt(document.getElementById("p").value);
    var I=parseInt(document.getElementById("I").value);
    var si=(pa*p*I)/100;
    document.getElementById("res6").innerText="Simple Inetrest = "+si+"Rs";
}
function task7(){
    var A1=parseInt(document.getElementById("A1").value);
    var A2=parseInt(document.getElementById("A2").value);
    var A3=180-(A1+A2);
    document.getElementById("res7").innerText="Angle3 = "+A3+"deg";
}
function task8(){
    var n=parseInt(document.getElementById("y").value);
    var ld=n%10 | 0;
    document.getElementById("res8").innerText="Last digit = "+ld;
}
function task9(){
    var n=parseInt(document.getElementById("z").value);
    var res=n/10 | 0;
    document.getElementById("res9").innerText="Result = "+res;
}
function task10(){
    var n=parseInt(document.getElementById("a").value);
    var fd=n/100 | 0;
    document.getElementById("res10").innerText="First digit = "+fd;
}
function task11(){
    var n=parseInt(document.getElementById("b").value);
    var res=n/10000 | 0;
    document.getElementById("res11").innerText="First digit = "+res;
}
function task12(){
    var c=parseInt(document.getElementById("c").value);
    var f=((c*9)/5)+32;
    document.getElementById("res12").innerHTML="Fahrenheit = "+f+"<sup>o</sup>F";
}
function task13(){
    var f=parseInt(document.getElementById("d").value);
    var c=((f-32)*5)/9;
    document.getElementById("res13").innerHTML="Celsius = "+c+"<sup>o</sup>C";
}
function task14(){
    var bs=parseInt(document.getElementById("bs").value);
    var h=parseInt(document.getElementById("h").value);
    var da=parseInt(document.getElementById("da").value);
    var s=bs+h+da;
    document.getElementById("res14").innerText="Gross Salary= "+s+"Rs";
}
function task15(){
    var b1=parseInt(document.getElementById("b1").value);
    var b2=parseInt(document.getElementById("b2").value);
    var temp=b1;
    b1=b2;
    b2=temp;
    document.getElementById("res15").innerHTML="num1 = "+b1+"<br>num2 = "+b2;
}
function task16(){
    var c1=parseInt(document.getElementById("c1").value);
    var c2=parseInt(document.getElementById("c2").value);
   c1=c1+c2;
   c2=c1-c2;
   c1=c1-c2;
    document.getElementById("res16").innerHTML="num1 = "+c1+"<br>num2 = "+c2;
}