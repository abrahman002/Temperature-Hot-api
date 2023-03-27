const API_KEY=`1c1a352b64ebd601f9d6a126eaf005fa`;

const loadWeather=city=>{

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

      fetch(url)
      .then(res => res.json())
      .then(data =>  displayTempareture(data))

}

const displayTempareture=data=>{
    // console.log(data)
    // const temperature=document.getElementById('tempareture');
    // temperature.innerText=data.main.temp;
    setTemparetureById('tempareture',data.main.temp)
    setTemparetureById('condition',data.weather[0].main)

}
const setTemparetureById=(ID,Text)=>{
    const temperature=document.getElementById(ID);
    temperature.innerText=Text;

}
document.getElementById('btn-fuild').addEventListener('click', function(){
    const searchFuild=document.getElementById('input-fuild');
    const city=searchFuild.value;
    loadWeather(city)

    document.getElementById('city').innerText=city;

})

loadWeather('dhaka')
