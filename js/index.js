 
 const tempLoad = (city) =>{
    const apikey = '6ee2d7c42203ad3f3852d6b8b9831397';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data =>showtemparature(data))
 }

 

  const showtemparature = (temp) =>{
    const displaytemparature = document.getElementById('temparature');
    displaytemparature.innerText= temp.main.temp;
    // condition()
    const con = temp.weather[0].main
    document.getElementById('condition').innerText=con; 
  }

  document.getElementById('search-btn').addEventListener('click',function(){
    const citytext = document.getElementById('city-fild');
    const city = citytext.value;
    document.getElementById('city').innerText=city;
    
    tempLoad(city);
  })
  tempLoad('dhaka');