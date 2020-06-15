//================================================================= chapter  1 ================
// alert("Greetings welcome");
// 
// alert("Error! please enter a valid password");
// 
// alert("welcome to jS land" +"\r\n"+ "happy coding");
// 
// alert("welcome to jS land");
// alert("happy coding");
// 
// ===========================================================chapter 2===================
// var username = "usama ali";
// 
// var myName = "Syed Usama Ali";
// 
// var message = "Hello World";
// alert(message);
// 
//  var name ="Usama";
//  var age ="19 years old";
//  var course =  "web and mobile hybrid app development";
// alert(name);
// alert(age);
// alert(course);
// 
// var email = "syedusamaali@gmail.com";
// alert("my email is " + email);
// 
// var book ="a smarter way way to learn JS";
//  alert("I am trying to learn from a book" + book);
// 
// document.write("<h1>yeah I can write HTML content thriugh JS");
// 
// ==================================== chapter 3 =============================
// var age = 15;
//  alert("my age is" + age);
// 
// var times = "N times";
//  alert("you have visited this site " + times);
// 
// var birthyear = 1999;
// document.write(birthyear + "<br>" + "this type of my declared variable is number");
// 
// var name = "Syed Usama Ali";
// var product = "T Shirts";
// var quantity = 5;
// document.write(name + "has ordered " + quantity + product);
// 
// ======================================chapter 4============================================
// var a = "usama", age = 5, course = "WEB";
// 
//  legal varible Names
// var userName , age, emailAddress, myName, yourName ;
//  illegal variable names
// var _usama , Name , MYname , AGe , CurrentLOcation;
// 
// document.write("<h1>Rules for naming JS variables</h1><br>");
// document.write("Variable names can only contain numbers, $ and _  For example $my_1stVariable<br>" );
// document.write("Variables must begin with a letter,$ or _ or . For example $name, _name or name <br>");
// document.write("Variable names are case sensitive <br> Variable names should not be JS keywords");
// 
// ===============================================================chapter 5 ========================
// 
// var a = 12
// var b = 13
// var c = a+b 
// document.write("sum of "+a+" and "+b+" is "+c+"<br/>");
// 
// var c = a-b 
// document.write("subraction of "+ a +" and "+b+" is "+c + "<br>");
// var c = a*b 
// document.write("multiplication of "+ a +" and "+b+" is "+c + "<br>" );
// var  c = a/b 
// document.write("division of "+ a +" and "+b+" is "+c + "<br>" );
// var c = a%b 
// document.write(" modulus of " + a+ " and "+b+" is " + c + "<br>" );
// 
// var a 
// document.write("Value after variable declaration is: " + a + "</br>");
// a = 5
// document.write("Initial value: " + a + "</br>");
// a++
// document.write("Value after increment is: " + a + "</br>");
// a= a+7
// document.write("Value after addition is: " +a+ "</br>");
// a--
// document.write("Value after decrement is: " +a+ "</br>");
// a = a%3
// document.write("The remainder is: " +a+ "</br>");
// 
// var a = 600;
// var totalPrice = a*5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalPrice +"PKR <br>");
// 
// document.write("<h1> Table of 4 </h1>");
// document.write(
//     "4 x 1 =" +4*1+ "<br>" +
//     "4 x 2 =" +4*2+ "<br>" +
//     "4 x 3 =" +4*3+ "<br>" +
//     "4 x 4 =" +4*4+ "<br>" +
//     "4 x 5 =" +4*5+ "<br>" +
//     "4 x 6 =" +4*6+ "<br>" +
//     "4 x 7 =" +4*7+ "<br>" +
//     "4 x 8 =" +4*8+ "<br>" +
//     "4 x 9 =" +4*9+ "<br>" +
//     "4 x 10 =" +4*10+ "<br>"
// );
// 
// var c = 25;
// var f =(c* 9/5)+32;
// document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ");
// var f = 70;
// var c =(f-32) * 5/9;
// document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ");
// 
// var item1 = 650;
// var item2 = 100;
// var quantityitem1 = 3
// var quantityitem2 = 7
// var scharges = 100
// var totalcost = item1*quantityitem1+item2*quantityitem2+scharges;

// document.write(
//     "<h1> Shopping Card </h1>"+
//     "Price of item 1 is "+item1+
//     "<br/>Quantity of item 1 is "+quantityitem1+
//     "<br/> Price of item 2 is "+item2+
//     "<br/>Quantity of item 2 is "+quantityitem2+
//     "<br/>Shipping Charges" +scharges+
//     "<br/> <br/> <br/>Total cost of your order is : "+totalcost
// );
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = 804/980 *100;
// document.write(
//     "<h1> Marks Sheet </h1>" +
//     "Total marks :" +totalMarks+
//     "<br/>Marks obtained :" +marksObtained+
//     " <br/> Percentage :" +percentage
// );
// 
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write (
//     "<h1>The Geometrizer </h1>"
//     +"Radius of a circle :" +radius+
//     "<br/> The circumference is : "+circumference+
//     "<br/> The area is : "+area
// );
// 
// var num = 1;
// num = ((num+5)*10)/2;
// document.write(num);
// 
// var currentYear = 2020;
// var birthYear = 2001;
// var age = currentYear-birthYear;
// document.write("<h1>Age Calculator</h1>Current Year: "+currentYear+"</br>Birth Year: "+birthYear+"</br>Current Age"+age);
// 
// ===========================================================chapter 6-9=================================
// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" +a+
//     "<br/> -------------------------------"+

//     "<br/><br/> The value of ++ a is:"+(++a)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of  --a is:"+(--a)+
//          "<br/>  Now the value of a is:"+a+

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now the value of a is:"+a 
//         );
// 
// var a = 6;
// var b = 2;
// var result = --a - --b + ++b + b--;
// document.write(" a is ="+a);
// document.write("<br/> b is = "+b);
// document.write("<br/> result is ="+result +"</br> </br>");
// 
// var userName = prompt("Please enter your Name");
// alert("Good Morning" + " " +userName);
// 
// var tableNo = prompt("Please enter a number for Table","5");
// var i = Number(tableNo);
// var num = 1
// document.write(
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"+
//     i+" x "+num+" = "+ (i*num++)+"<br/>"
// );

// alert("wellcome");
// rollno=prompt("enter your roll no","");
// name=prompt("enter your name","");
// english=prompt("enter your english marks","");
// urdu=prompt("enter your urdu marks","");
// computer=prompt("enter your computer marks","");
// confirm = confirm("Are you sure !");
// total=300;
// obtain=eval(english)+eval(urdu)+eval(computer);
// percentage=obtain*100/total;
// average=obtain/3;
// if (percentage>=33) {
// result="pass";
// } else {
//    result="fail";
// }
// if (percentage>=80){
//    grade="A one" ;
// } else if (percentage>=70){
//    grade="A";
// } else if(percentage>=60){
//    grade="B+";
// } else if (percentage>=50){
//    grade="c";
// } else if (percentage>=40){
//    grade="D";
// } else {
//    grade="F";
// }
// if(confirm==true){
//     document.write('<h1 align="center"><font color="red">Result card</font> </h1> <br><table border="1" width="400" align="center"><tr><td width="150">Roll no</td><td> '+ rollno +'</td></tr><tr><td width="150">Name</td><td> '+ name +'</td></tr><tr><td width="150">English</td><td>' + english + '</td></tr><tr><td width="150">Urdu</td><td> '+ urdu +'</td></tr><tr><td width="150">computer</td><td> '+ computer +'</td></tr><tr><td width="150">total marks</td><td> '+ total +'</td></tr><tr><td width="150">Obtained Marks</td><td> '+ obtain +'</td></tr><tr><td width="150">Percentage</td><td> '+ percentage +'</td></tr><tr><td width="150">Average</td><td> '+ average +'</td></tr><tr><td width="150">Pass/Fail</td><td> '+ result +'</td></tr><tr><td width="150">Grade</td><td> '+ grade +'</td></tr></table>');
//    }
//    else {
//           document.write('<h1>Result not found</h1>')
//    }
// 
// ==================================chapter 9-11 =================================
// 
// var cityName = prompt("Enter Your City Name");
// if (cityName === "karachi"){
//     alert("Welcome to city of lights")
// }

// var gender = prompt("Enter Your Gender");
// if (gender === "male"){
//     alert("Good Morning Sir")
// }
// if (gender === "female"){
//     alert("Good Morning Ma'am")
// }

// var lightColor = prompt("Enter Traffic Signal Light Color");
//  if (lightColor === "red"){
//      alert("Must Stop")
//  }
//  if (lightColor ==="yellow"){
//     alert("Ready to move")
// }
// if (lightColor ==="green"){
//     alert("Move now")
// }

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// =================================== chapter 12-13====================
// var number1 = +prompt("Enter first Integar");
// var number2 = +prompt("Enter second Integar");
// if (number1> number2) {
//     alert(number1 + " is larger than" + number2)
// }
// else if (number1 < number2 ) {
//     alert(number2 + " is larger than" + number1)
// }
//  else alert(number1 + " and " + number2 + " are equal");
// 
// var number = +prompt("Enter a number");
//  if (number > 0 ) {
//     alert("The given number is positive")
// }
// else if (number < 0 ) {
//     alert("The given number is negative")
// }
// else alert( "The given number is zero");

// var char = prompt("Enter a character in small character");
// if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//     alert("true")
// }
// else alert("false");

// var password = "0000";
// var uPassword = prompt("Enter your password");
// if (uPassword === ""){
//     alert("please enter your password");
// }
// else if (uPassword === password) {
//     alert("correct! the password you entered matches the original password");
// }
// else alert("incorrect password");

// / var greeting;
// var hour = 13;
// if (hour <18) {
//     greeting = "good day";
// }
// else greeting = "good evening";

// ===============================chapter 14-16==========================
// var literalArray = [];

// var objectArray = [];

// var stringsArray = ["syed","usama","ali"];

// var numbersArray = [1,2,3,4,5];

// var booleanArray = [true,false];

// var mixedArray = ["usama",1971,true];

// var eduArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>Qualification</h1>")
// for (var i = 0; i <=7; i++){
//     document.write(i+1+" "+eduArray[i]+"<br/>");
// }

// var phoneModel = ["apple","samsung","motorla","nokia","sony & haier"]
// document.write(
//     "<select>"+
//     "<option>"+phoneModel[0]+"</option>"+
//     "<option>"+phoneModel[1]+"</option>"+
//     "<option>"+phoneModel[2]+"</option>"+
//     "<option>"+phoneModel[3]+"</option>"+
//     "<option>"+phoneModel[4]+"</option>"+
//     "</select>"
// );

// ========================================chapter 17-20=========================

// for (var i = 1; i <= 10; i++){
//     document.write(i+"<br/>")
// }

// var table = +prompt("Enter a number");
// var length = +prompt("Enter length for multiplication table" );
// document.write("Multiplication Table of " +table+"<br/> length "+length+ "<br/>")
// for(var i = 1; i <= length; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br/>")
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var arr = fruits.length;
// for(var i = 0; i <arr; i++){
//     document.write(i +fruits[i]+"<br/>");
// }

// var arr = [24,53,78,91,12];
// var max = Math.max.apply(Math,arr);
// document.write(
//     "Array items: "+arr+
//     "<br/> The largest number is " +max
// );

// var arr = [24,53,78,91,12];
// var min = Math.min.apply(Math,arr);
// document.write(
//     "<br/> The samllest number is " +min
// );

// for(var i = 1; i<=100; i++){
//     if(i%5 === 0){
//         document.write(i+" ,")
//  }
// };











