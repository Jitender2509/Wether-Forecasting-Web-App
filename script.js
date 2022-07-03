function getWeather(){
    var city = document.getElementById("search").value;
    fetch("http://api.weatherstack.com/current?access_key=a917c5b1b9636519203a35ff30c06f52&query="
     + city)
    .then(responce => responce.jason())
    .then(responce =>{
    document.getElementById("opt").innerHTML=
        "<h1>"+responce.current.weater_discriptions[0];
        + "<h1>Temprature:" + responce.current.temperature 
        + "<br>Feels like" + responce.currentfeelslike
        + "<br>Humidity" + responce.current.humidity
 });
}