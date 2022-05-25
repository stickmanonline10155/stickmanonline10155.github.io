var links = ["https://truth.bahamut.com.tw/s01/202111/5582b30853e5b530252b7cf9b61adbc3.JPG",

"https://media.istockphoto.com/vectors/sketch-of-three-books-vector-id803118460?k=20&m=803118460&s=170667a&w=0&h=W2d89oBSHiaR9ocn6T2H-reZacrqFG3323KgwxHMtfE=",

"https://img.technews.tw/wp-content/uploads/2017/03/24101829/7270219_6d3f41bc71_b-e1490321917660.jpg",

"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Western_concert_flute_%28Yamaha%29.jpg/1200px-Western_concert_flute_%28Yamaha%29.jpg", 
             
"https://i.pinimg.com/originals/ae/ff/8b/aeff8b4c58c943b5f605da8e9de86def.jpg", 
             
"https://media.gq.com.tw/photos/6157f8961dbe40d77bd3a055/16:9/w_2560%2Cc_limit/GettyImages-1136354222.jpg", 
             
"https://assets3.thrillist.com/v1/image/2692359/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"]             

var titles = ["Music", "Novel", "GOchess", "Flute", "Skateboard", "Podcast", "Darts"]

var index = 0;
var autoplay = true;
var name = 0;

function prevPic(){
  console.log("prevPic");
  var img = document.getElementById("pic");
  index--;
  img.src = links[index % links.length];
  
  var title = document.getElementById("title");
  name--;
  title.innerHTML = titles[index % titles.length];
}
function nextPic() {
  console.log("nextPic");
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  
  var title = document.getElementById("title");
  name++;
  title.innerHTML = titles[index % titles.length];
  
  //if(autoplay) {
    //setTimeout(nextPic, 3000);
  //}
}

