var links = ["https://images2.alphacoders.com/165/thumb-1920-16590.jpg",

"https://static1.squarespace.com/static/55de0d46e4b0dff050052f72/t/56c646c29f72661d8c50da5e/1455834820651/NovelBrewingCo_logo_final_whiteBkg_Black.png",

"https://www.orthodoxfellowship.org/images/Basketball.jpg",

"https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/games/star%20wars/images/lsw-the-new-yoda-chronicles_preview_744x421.jpg?l.r2=377395581",
"https://i.ytimg.com/vi/R48Tl6n5PD4/hqdefault.jpg"]             

var titles = ["music", "novel", "basketball", "game", "stickman fighter"]

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

