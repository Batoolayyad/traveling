//welcoming alert

var userName= prompt("inter your name please");
alert ('Hello '+ userName)


//asking the web visitor about his fevorite city 

//show a pic of the city that has been choose

var favoriteCity= prompt("what is your favorite city between Dubai, Brcelona and Istanbul?");

if(favoriteCity=='Dubai'){document.write('<img src="https://www.aljazeera.net/wp-content/uploads/2014/11/a7f71861-8c3d-47cd-ba34-50b96aa010a7.jpeg?resize=686%2C513" width="300px" height="150px"/>');
}
else if (favoriteCity=='Brcelona') {document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoEyQB0Jk_kHDFrVYozY3KPXDRhnNCEFQBA&usqp=CAU" width="300px" height="150px"/>'); 
}
else if (favoriteCity=='Istanbul'){document.write('<img src="https://www.nomadepicureans.com/wp-content/uploads/2019/09/One-Day-in-Istanbul-Feature-Image.jpg" width="300px" height="150px"/>');
    
} 
else{ alert("choose between the cites that are showing");
}

document.write('<h3>this is your favorite city</h3>')