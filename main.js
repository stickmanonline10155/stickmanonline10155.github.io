var links = ["https://truth.bahamut.com.tw/s01/202111/5582b30853e5b530252b7cf9b61adbc3.JPG",

"https://static1.squarespace.com/static/55de0d46e4b0dff050052f72/t/56c646c29f72661d8c50da5e/1455834820651/NovelBrewingCo_logo_final_whiteBkg_Black.png",

"https://img.technews.tw/wp-content/uploads/2017/03/24101829/7270219_6d3f41bc71_b-e1490321917660.jpg",

"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Western_concert_flute_%28Yamaha%29.jpg/1200px-Western_concert_flute_%28Yamaha%29.jpg",
"https://media.gq.com.tw/photos/6157f8961dbe40d77bd3a055/16:9/w_2560%2Cc_limit/GettyImages-1136354222.jpg"]             

var titles = ["music", "novel", "GOchess", "flute", "podcast"]

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

