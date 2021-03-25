//welcoming alert
 userName= prompt('Please, enter your name')
 alert ('Hello '+ userName)



//asking the web visitor about his fevorite city 
 function getCityName() {
    
var favoriteCity= prompt("What is your favorite city between Dubai, Brcelona and Istanbul?");


//keep asking until the visitor enter one of the chooises
while((favoriteCity!='Dubai')&&(favoriteCity!='Brcelona')&&(favoriteCity!='Istanbul')){
    favoriteCity=prompt("Please select between the cities that have been mention");
}

//show a pic of the city that has been choose
var cityPic=" "
var result=" "


if(favoriteCity=='Dubai'){
    cityPic='<img src="https://www.aljazeera.net/wp-content/uploads/2014/11/a7f71861-8c3d-47cd-ba34-50b96aa010a7.jpeg?resize=686%2C513" width="300px" height="150px"/>';
}
else if (favoriteCity=='Brcelona') {
    cityPic='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoEyQB0Jk_kHDFrVYozY3KPXDRhnNCEFQBA&usqp=CAU" width="300px" height="150px"/>'; 
}
else if (favoriteCity=='Istanbul'){
    cityPic='<img src="https://www.nomadepicureans.com/wp-content/uploads/2019/09/One-Day-in-Istanbul-Feature-Image.jpg" width="300px" height="150px"/>';
    
} 

document.write('<h3>Here is your favorite city ' + favoriteCity +'</h3>');


//for loop to choose how many pictures the visitor want the pic to show 
var numberOfPic= prompt('how many pic you want to show?');


for(i=0;i< numberOfPic; i++){
  result+=cityPic;
}
document.write(result);

//else{ alert("choose between the cites that are showing");}

// write the favorite city name for the visitor under the pic
}
getCityName();
