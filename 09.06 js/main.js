var body = document.getElementsByTagName("body")[0];
body.style.padding = "0";
body.style.margin = "0";
body.style.fontFamily = "sans-serif"

var myheader = document.createElement("header");
myheader.style.height = "120px";
myheader.style.width = "100%";
myheader.style.backgroundPosition = "68% 47%";
myheader.style.boxSizing = "border-box";
myheader.style.backgroundSize = "cover";
myheader.style.backgroundImage = "url('images/mainimg.jpg')";


var section1 = document.createElement("div");
section1.style.width = "78%";
section1.style.height = "120px";
section1.style.alignItems = "center";
section1.style.backgroundColor = "white";
section1.style.display = "flex";
section1.style.transform = "translate(15%,66%)";
section1.style.justifyContent = "space-around";

var section2 = document.createElement("div");
var mycategory = document.createElement("select");
var mybtn = document.createElement("button");
var categories = document.createElement("option");
var myinputs = document.createElement("input");


section2.style.width = "60%";
section2.style.display = "flex";

mybtn.innerText = "Search Course";
mybtn.style.height = "40px";
mybtn.style.color = "white";
mybtn.style.backgroundColor = "rgb(254,158,43)";
mybtn.style.border = "3px solid white";
mybtn.style.fontSize = "20px";


categories.value = "mycategory"
categories.innerText = "All CATEGORIES"
mycategory.style.width = "42%";
mycategory.style.marginRight = "5px";
mycategory.style.border = "1px solid #cdcdcd";
mycategory.style.padding = "11px";

myinputs.setAttribute("type", "text");
body.appendChild(myheader);
myheader.appendChild(section1);
section2.setAttribute("class", "section2")
section2.appendChild(mycategory);
section2.appendChild(myinputs);
mycategory.appendChild(categories)
section1.appendChild(section2);
section1.appendChild(mybtn);

var mybody = document.createElement("section");
mybody.style.height = "600px";
mybody.style.backgroundColor = "white";
mybody.style.padding = "50px";

var selects = document.querySelectorAll(".section2 input");
selects[0].style.width = "60%";
selects[0].style.height = "20px";
selects[0].style.fontSize = "18px";
selects[0].style.border = "2px solid #cdcdcd";
selects[0].style.padding = "10px";
selects[0].setAttribute("placeholder", "COURE KEYWORD");

body.appendChild(mybody);

var mytext1 = document.createElement("h2");
var mytext2 = document.createElement("h2");
var mytext3 = document.createElement("p");

mytext1.innerText = "OFFERING THE BEST"
mytext1.style.marginBottom = "10px"
mytext1.style.color = "#0000255"
mytext1.style.fontSize = "30px"
mytext1.style.position = "absolute"
mytext1.style.top = "270px"
mytext1.style.left = "36%"
mytext2.innerText = "IN EDUCATION TO THE  WORLD"
mytext2.style.marginBottom = "10px"
mytext2.style.color = "#0000255"
mytext2.style.fontSize = "30px"
mytext2.style.position = "absolute"
mytext2.style.top = "305px"
mytext2.style.left = "30%"
mytext3.innerText = "Sign-up today to join over 6 million learners already on ALISON"
mytext3.style.marginBottom = "10px"
mytext3.style.color = "grey"
mytext3.style.fontSize = "20px"
mytext3.style.position = "absolute"
mytext3.style.top = "360px"
mytext3.style.left = "28%"

mybody.appendChild(mytext1);
mybody.appendChild(mytext2);
mybody.appendChild(mytext3);


var image1 = document.createElement("img");
var image2 = document.createElement("img");
var image3 = document.createElement("img");
var image4 = document.createElement("img");
var text1 = document.createElement("h2");
var text2 = document.createElement("h2");
var text3 = document.createElement("h2");
var text4 = document.createElement("h2");
var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var p4 = document.createElement("p");

image1.setAttribute("src", 'images/icon1.png')
image2.setAttribute("src", 'images/icon2.png')
image3.setAttribute("src", 'images/icon3.png')
image4.setAttribute("src", 'images/icon4.png')

text1.innerText = "Best Learning Communities"
text1.style.fontSize = "14px"
text1.style.color = "black"
text1.style.position = "absolute"
text1.style.top = "560px"
text1.style.left = "12%"
text2.innerText = "Online Teaching Jobs"
text2.style.fontSize = "14px"
text2.style.color = "black"
text2.style.top = "560px"
text2.style.left = "32%"
text2.style.position = "absolute"
text3.innerText = "Learn Courses Online"
text3.style.fontSize = "14px"
text3.style.color = "black"
text3.style.top = "560px"
text3.style.left = "51%"
text3.style.position = "absolute"
text4.innerText = "Book Library & Store"
text4.style.fontSize = "14px"
text4.style.color = "black"
text4.style.top = "560px"
text4.style.left = "73%"
text4.style.position = "absolute"

image1.style.width = "50px";
image1.style.position = "absolute";
image1.style.top = "500px";
image1.style.left = "17%";
image2.style.width = "65px";
image2.style.position = "absolute";
image2.style.top = "492px";
image2.style.left = "35%";
image3.style.width = "50px";
image3.style.position = "absolute";
image3.style.top = "500px";
image3.style.left = "55%";
image4.style.width = "50px";
image4.style.position = "absolute";
image4.style.top = "500px";
image4.style.left = "76%";

p1.style.width = "200px"
p1.innerText = "The idea is to keep discussions going after class ends."
p1.style.fontSize = "14px"
p1.style.color = "grey"
p1.style.position = "absolute"
p1.style.top = "590px"
p1.style.left = "11%"
p2.style.width = "200px"
p2.innerText = "The idea is to keep discussions going after class ends."
p2.style.fontSize = "14px"
p2.style.color = "gray"
p2.style.top = "590px"
p2.style.left = "30%"
p2.style.position = "absolute"
p3.style.width = "200px"
p3.innerText = "The idea is to keep discussions going after class ends."
p3.style.fontSize = "14px"
p3.style.color = "gray"
p3.style.top = "590px"
p3.style.left = "49%"
p3.style.position = "absolute"
p4.style.width = "200px"
p4.innerText = "The idea is to keep discussions going after class ends."
p4.style.fontSize = "14px"
p4.style.color = "gray"
p4.style.top = "590px"
p4.style.left = "71%"
p4.style.position = "absolute"

mybody.appendChild(image1);
mybody.appendChild(image2);
mybody.appendChild(image3);
mybody.appendChild(image4);
mybody.appendChild(text1);
mybody.appendChild(text2);
mybody.appendChild(text3);
mybody.appendChild(text4);
mybody.appendChild(p1);
mybody.appendChild(p2);
mybody.appendChild(p3);
mybody.appendChild(p4);